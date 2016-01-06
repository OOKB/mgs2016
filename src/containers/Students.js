import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import each from 'lodash/collection/each'
import map from 'lodash/collection/map'

import { loadProfiles } from '../redux/actions'
import { toggleFilter as toggleFilterAction } from '../redux/modules/filter'

import Students from '../components/Students/Students'

class StudentsSection extends Component {
  componentWillMount() {
    this.props.loadProfiles()
  }
  render() {
    const { toggleFilter, filterTypes, ...rest } = this.props
    const filterInfo = {
      toggleFilter,
      filterTypes,
    }
    return <Students {...rest} filterInfo={filterInfo} />
  }
}
StudentsSection.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  loadProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array,
  filterTypes: PropTypes.array,
}

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { profile, url, program },
    filter,
  } = state
  const profiles = []
  const programs = {}

  each(profile, ({ photo, programId, ...rest }) => {
    // Add useful student info to profiles array.
    profiles.push({
      ...rest,
      photo: url[photo].preview.image,
      program: program[programId],
    })
    // Add programId to programs object.
    programs[programId] = program[programId]
  })

  // Build up filter options.
  const programFilterOpts = map(programs, ({ value, label }) => ({
    value,
    label,
    // enabled: filter.students[value], // Figure out if the filter option is enabled.
  }))

  const filterTypes = [
    // { value: 'galleries', label: 'Gallery', options: locations },
    {
      value: 'programId',
      label: 'Programs',
      options: programFilterOpts,
      active: filter.students.programId,
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
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsSection)
