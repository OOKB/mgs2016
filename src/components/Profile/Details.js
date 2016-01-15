import React, { PropTypes } from 'react'

import Contact from './Contact'

function Details({ user }) {
  const { name, locationName, program, showDates } = user
  const programName = program && program.label
  return (
    <div className="student-details">
      <h2>{ name.display }</h2>
      <ul className="show-details list-reset">
        { programName && <li className="program"><h3>{programName}</h3></li> }
        <li className="location">Showing in: {locationName}</li>
        <li className="show-dates">{showDates}</li>
      </ul>
      <Contact {...user} />
    </div>
  )
}

Details.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    program: PropTypes.object,
    locationName: PropTypes.string,
    showDates: PropTypes.string,
    social: PropTypes.object,
  }),
}
Details.defaultProps = {
}

export default Details
