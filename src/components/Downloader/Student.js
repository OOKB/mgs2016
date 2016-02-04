import React, { PropTypes } from 'react'

import ImageList from './ImageList'

function Student({ user }) {
  const { name, program } = user
  const programName = program && program.name
  return (
    <li className="student">
      <ul className="info clearfix">
        <li className="name">{ name.display }</li>
        { programName && <li className="program">{programName}</li> }
        <li className="email">UID@mica.edu</li>
        <li className="images">
          <ImageList />
        </li>
      </ul>
    </li>
  )
}

Student.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    program: PropTypes.object,
  }),
}
Student.defaultProps = {
}

export default Student
