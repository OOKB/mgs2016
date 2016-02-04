import React, { PropTypes } from 'react'

import ImageList from './ImageList'

function Student({ name, program }) {
  const programName = program && program.name
  return (
    <li className="student">
      <ul className="info group">
        <li className="name four columns">{ name.display }</li>
        { programName && <li className="program four columns">{programName}</li> }
        <li className="email four columns">UID@mica.edu</li>
      </ul>
      <ImageList />
    </li>
  )
}

Student.propTypes = {
  name: PropTypes.shape({
    display: PropTypes.string.isRequired,
  }),
  program: PropTypes.object,
}
Student.defaultProps = {
}

export default Student
