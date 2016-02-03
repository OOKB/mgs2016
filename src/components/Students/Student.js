import React, { PropTypes } from 'react'
import Link from '../../containers/Link'

function Student({ name, program, locationName, photos, showDate, id, ...rest }) {
  const path = `/student/${id}`
  return (
    <li {...rest} id={id} className="student three columns">
      <Link to={path}>
        <div className="student-photo">
          <img className="photo-inactive" src={photos.inactive.url} alt={name.display} />
          <img className="photo-active" src={photos.active.url} alt={name.display} />
        </div>
      </Link>
      <ul className="list-reset">
        <li className="name"><h4><Link to={path} >{name.display}</Link></h4></li>
        { program && <li className="program">{program.name}</li> }
        { locationName && <li className="location">{locationName}</li> }
        { showDate && <li className="show-date">{showDate}</li> }
      </ul>
    </li>
  )
}

Student.propTypes = {
  name: PropTypes.object.isRequired,
  program: PropTypes.object.isRequired,
  locationName: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  photos: PropTypes.object.isRequired,
  showDate: PropTypes.string,
  id: PropTypes.string.isRequired,
}
Student.defaultProps = {
}

export default Student
