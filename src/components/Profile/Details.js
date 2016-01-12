import React, { PropTypes } from 'react'

import Contact from './Contact'

function Details({ fullName, locationName, programName, showDates, usr }) {
  return (
    <div className="student-details">
      <h2>{fullName}</h2>
      <ul className="show-details">
        <li className="program"><h3>{programName}</h3></li>
        <li className="location">Showing in: {locationName}</li>
        <li className="show-dates">{showDates}</li>
      </ul>
      <Contact usr={usr} />
    </div>
  )
}

Details.propTypes = {
  fullName: PropTypes.string,
  programName: PropTypes.string,
  locationName: PropTypes.string,
  showDates: PropTypes.string,
  usr: PropTypes.object,
}
Details.defaultProps = {
}

export default Details
