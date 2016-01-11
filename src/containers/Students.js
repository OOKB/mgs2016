import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// import each from 'lodash/collection/each'
import every from 'lodash/collection/every'
import filter from 'lodash/collection/filter'
import get from 'lodash/object/get'
import isEmpty from 'lodash/lang/isEmpty'
// import map from 'lodash/collection/map'
import mapValues from 'lodash/object/mapValues'
import some from 'lodash/collection/some'
import values from 'lodash/object/values'

import { loadProfiles } from '../redux/actions'
import { toggle as toggleFilterAction, update as updateFilterAction } from '../redux/modules/filters'
import { update as updateDisplayAction } from '../redux/modules/display'
import Students from '../components/Students/Students'

import photoDisplay from '../utils/studentPhoto'

class StudentsSection extends Component {
  componentWillMount() {
    this.props.loadProfiles()
  }
  render() {
    const { toggleFilter, filterTypes, updateFilter, ...rest } = this.props
    const filterInfo = {
      toggle: toggleFilter,
      types: filterTypes,
      update: updateFilter,
    }
    return <Students {...rest} filterInfo={filterInfo} />
  }
}
StudentsSection.propTypes = {
  filterTypes: PropTypes.array,
  toggleFilter: PropTypes.func.isRequired,
  loadProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array,
  students: PropTypes.array,
  updateDisplay: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
}

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    display,
    entities: { profile, url, program },
    filters: { students },
  } = state
  // const { query } = ownProps.location || {}
  // Get the query parms we care about.
  const filterValues = students
  const noFilters = isEmpty(filterValues) || !some(filterValues, 'option')
  const programIdFilter = get(filterValues, [ 'programId', 'option' ])
  // Program filters.
  const programFilterOpts = mapValues(program, ({ label, value }) => ({
    // Figure out if the filter option is enabled.
    active: filterValues.programId && filterValues.programId.option === value,
    label,
    itemCount: 0,
    value,
  }))
  // Filter programs first.
  const profiles = filter(profile, (item) => {
    // Increment programId counter.
    programFilterOpts[item.programId].itemCount++
    if (noFilters) return true
    return every(filterValues, (info, key) => (
      !info || item[key] && item[key] === info.option
    ))
  })
  // Merge graph nodes and stuff.
  .map(({ photo, programId, id, ...rest }) => {
    // Does this profile have an active hover? Converting `undefined` to `false` with double bang.
    const active = !!get(display, [ 'profile', id, 'hover' ])
    // Add useful student info to profiles array.
    return {
      ...rest,
      id,
      active,
      photo: photoDisplay(url[photo], active),
      program: program[programId],
    }
  })

  const filterTypes = [
    // { value: 'galleries', label: 'Gallery', options: locations },
    {
      value: 'programId',
      label: 'Programs',
      options: values(programFilterOpts),
      active: get(state.filters, [ 'students', 'programId', 'active' ]),
    },
  ]

  return {
    filterTypes,
    students: profiles,
    programInfo: programIdFilter && program[programIdFilter],
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  toggleFilter: toggleFilterAction,
  loadProfiles,
  updateDisplay: updateDisplayAction,
  updateFilter: updateFilterAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsSection)
