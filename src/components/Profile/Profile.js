import React, { Component, PropTypes } from 'react'
import Info from './Info'
import Main from './Main'

class Profile extends Component {
  componentWillMount() {
    this.props.loadProfile([ 'art' ])
  }
  render() {
    const { profile } = this.props
    console.log(profile)
    const uid = 'foo'
    const className = `student-${uid}`
    return (
      <article id="student-overlay" className={className}>
        <button role="button" className="close">
          x
        </button>
        <div className="container">
          <Info user={profile} />
        </div>
      </article>
    )
  }
}
Profile.propTypes = {
  loadProfile: PropTypes.func.isRequired,
  profile: PropTypes.object,
}
export default Profile
