import React, { Component, PropTypes } from 'react'
import Info from './Info'
import Main from './Main'

class Profile extends Component {
  componentWillMount() {
    this.props.loadProfile([ 'art' ])
  }
  render() {
    const { profile } = this.props
    const uid = 'foo'
    const className = `student-${uid}`
    return (
      <article id="student-overlay" className={className}>
        <div className="wrapper">
          <button role="button" className="close">
            <i className="fa fa-times fa-2x"></i>
          </button>
          <Info user={profile} />
          <Main
            user={profile}
            collection={profile.art}
          />
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
