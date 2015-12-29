import React, { PropTypes } from 'react'

function Student({ fullName, programName, locationName, onClick, pic, showDate, uid }) {
  return (
    <li id={uid} onClick={onClick} className="student">
      <img src={pic} alt={fullName} />
      <ul>
        <li className="name"><h4>{fullName}</h4></li>
        <li className="program">{programName}</li>
        <li className="location">{locationName}</li>
        <li className="show-date">{showDate}</li>
      </ul>
    </li>
  )
}

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  programName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  pic: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
}
Student.defaultProps = {
}

export default Student
