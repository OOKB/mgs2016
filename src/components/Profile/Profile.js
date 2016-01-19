import React, { Component, PropTypes } from 'react'
import Info from './Info'
import Main from './Main'
import { Link } from 'react-router'

class Profile extends Component {
  componentWillMount() {
    this.props.loadProfile([ 'art' ])
  }
  componentWillReceiveProps(newProps) {
    // console.log('new props')
    newProps.loadProfile([ 'art' ])
  }
  render() {
    const { closePopup, profile } = this.props
    const uid = 'foo'
    const className = `student-${uid}`
    return (
      <article id="student-overlay" className={className}>
        <div className="wrapper">
          <button onClick={closePopup} role="button" className="close">
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
  closePopup: PropTypes.func.isRequired,
  loadProfile: PropTypes.func.isRequired,
  profile: PropTypes.object,
}
export default Profile
