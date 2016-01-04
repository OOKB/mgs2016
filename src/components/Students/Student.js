import React, { PropTypes } from 'react'

function Student({ name, program, locationName, onClick, photo, showDate, uid }) {
  return (
    <li id={uid} onClick={onClick} className="student three columns">
      <img src={photo.url} alt={name.display} />
      <ul className="list-reset">
        <li className="name"><h4>{name.display}</h4></li>
        { program && <li className="program">{program.label}</li> }
        { locationName && <li className="location">{locationName}</li> }
        { showDate && <li className="show-date">{showDate}</li> }
      </ul>
    </li>
  )
}

Student.propTypes = {
  name: PropTypes.object.isRequired,
  program: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
  showDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
Student.defaultProps = {
}

export default Student
