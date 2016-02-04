import React, { PropTypes } from 'react'

import ImageList from './ImageList'

function Student({ art, name, program, id }) {
  const programName = program && program.name
  const email = `${id}@mica.edu`
  return (
    <li className="student">
      <ul className="info group">
        <li className="name four columns">{ name.display }</li>
        { programName && <li className="program four columns">{programName}</li> }
        <li className="email four columns">{ email }</li>
      </ul>
      { art && art.length &&
        <ImageList art={art} />
      }
    </li>
  )
}

Student.propTypes = {
  art: PropTypes.array,
  name: PropTypes.shape({
    display: PropTypes.string.isRequired,
  }),
  program: PropTypes.object,
  id: PropTypes.string,
}
Student.defaultProps = {
}

export default Student
