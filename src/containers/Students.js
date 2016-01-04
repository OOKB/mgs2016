import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/collection/map'

import { loadProfiles } from '../redux/actions'
import Students from '../components/Students/Students'

class StudentsSection extends Component {
  componentWillMount() {
    this.props.loadProfiles()
  }
  render() {
    const { profiles } = this.props
    return <Students students={profiles} />
  }
}
StudentsSection.propTypes = {
  loadProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array,
}

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { profile, url, program },
  } = state
  return {
    profiles: map(profile, ({ photo, programId, ...rest }) => ({
      ...rest,
      photo: url[photo].preview.image,
      program: program[programId],
    })),
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  loadProfiles,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsSection)
