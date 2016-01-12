import React, { Component, PropTypes } from 'react'

class Profile extends Component {

  render() {
    const uid = 'foo'
    const className = `student-${uid}`
    return (
      <article id="student-overlay" className={className}>
        <button role="button" className="close">
          x
        </button>
        <div className="container">
        </div>
      </article>
    )
  }
}
Profile.propTypes = {
  profile: PropTypes.object,
}
export default Profile
