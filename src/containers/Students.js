import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import each from 'lodash/collection/each'
import map from 'lodash/collection/map'

import { loadProfiles } from '../redux/actions'
import Students from '../components/Students/Students'

class StudentsSection extends Component {
  componentWillMount() {
    this.props.loadProfiles()
  }
  render() {
    return <Students {...this.props} />
  }
}
StudentsSection.propTypes = {
  loadProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array,
  programs: PropTypes.array,
}

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { profile, url, program },
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
  const programFilterOpts = map(programs, (programInfo) => ({
    value: '',
    label: '',
  }))
  const filterTypes = [
    // { value: 'galleries', label: 'Gallery', options: locations },
    { value: 'programs', label: 'Programs', options: programFilterOpts },
  ]

  return {
    filterTypes,
    students: profiles,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  loadProfiles,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsSection)
