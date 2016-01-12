import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function Student({ name, program, locationName, photos, showDate, id, ...rest }) {
  return (
    <li {...rest} id={id} className="student three columns">
      <div className="student-photo">
        <img className="photo-inactive" src={photos.inactive.url} alt={name.display} />
        <img className="photo-active" src={photos.active.url} alt={name.display} />
      </div>
      <ul className="list-reset">
        <li className="name"><h4><Link to={`student/${id}`} >{name.display}</Link></h4></li>
        { program && <li className="program">{program.label}</li> }
        { locationName && <li className="location">{locationName}</li> }
        { showDate && <li className="show-date">{showDate}</li> }
      </ul>
    </li>
  )
}

Student.propTypes = {
  name: PropTypes.object.isRequired,
  program: PropTypes.object.isRequired,
  locationName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  photos: PropTypes.object.isRequired,
  showDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
Student.defaultProps = {
}

export default Student
