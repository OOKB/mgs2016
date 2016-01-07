import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import each from 'lodash/collection/each'
import every from 'lodash/collection/every'
import filter from 'lodash/collection/filter'
import isEmpty from 'lodash/lang/isEmpty'
// import map from 'lodash/collection/map'
import mapValues from 'lodash/object/mapValues'
import values from 'lodash/object/values'

import { replacePath as replacePathAction } from 'redux-simple-router'

import { loadProfiles } from '../redux/actions'
import { toggleFilter as toggleFilterAction } from '../redux/modules/filter'

import Students from '../components/Students/Students'

class StudentsSection extends Component {
  componentWillMount() {
    this.props.loadProfiles()
  }
  render() {
    const { toggleFilter, filterTypes, replacePath, ...rest } = this.props
    const filterInfo = {
      toggleFilter,
      filterTypes,
      replacePath,
    }
    return <Students {...rest} filterInfo={filterInfo} />
  }
}
StudentsSection.propTypes = {
  filterTypes: PropTypes.array,
  toggleFilter: PropTypes.func.isRequired,
  loadProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array,
  replacePath: PropTypes.func.isRequired,
}

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state, ownProps) {
  const {
    entities: { profile, url, program },
  } = state
  const { query } = ownProps.location || {}
  // Get the query parms we care about.
  const filterValues = {}
  each(query, (value, key) => {
    if (key.startsWith('profile-')) {
      filterValues[key.split('-')[1]] = value
    }
  })
  const noFilters = isEmpty(filterValues)
  const programFilterOpts = mapValues(program, ({ label, value }) => ({
    // Figure out if the filter option is enabled.
    active: filterValues.programId && filterValues.programId === value,
    label,
    itemCount: 0,
    value,
  }))
  // Filter programs first.
  const profiles = filter(profile, (item) => {
    // Increment programId counter.
    programFilterOpts[item.programId].itemCount++
    if (noFilters) return true
    return every(filterValues, (value, key) => (
      item[key] && item[key] === value
    ))
  })
  // Merge graph nodes.
  .map(({ photo, programId, ...rest }) => ({
    // Add useful student info to profiles array.
    ...rest,
    photo: url[photo].preview.image,
    program: program[programId],
  }))

  const filterTypes = [
    // { value: 'galleries', label: 'Gallery', options: locations },
    {
      value: 'programId',
      label: 'Programs',
      options: values(programFilterOpts),
      active: state.filter.students.programId,
    },
  ]

  return {
    filterTypes,
    students: profiles,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  toggleFilter: toggleFilterAction,
  loadProfiles,
  replacePath: replacePathAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsSection)
