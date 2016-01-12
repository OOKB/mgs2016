import React, { PropTypes } from 'react'

import Slideshow from './Slideshow'
import NoImages from './NoImages'

function Main({ file, pos, type, usr }) {
  const statement = usr
  return (
    <div className="student-main">
      { file ?
          <Slideshow usr={usr} file={file} pos={pos} type={type} />
        :
          <NoImages />
      }
      { statement ?
          <div
            className="statement"
            dangerouslySetInnerHTML = {{
              __html: statement,
            }}
          />
        :
          false
      }
    </div>
  )
}

// TODO: look at the data and set these correctly
Main.propTypes = {
  file: PropTypes.any,
  pos: PropTypes.any,
  type: PropTypes.any,
  usr: PropTypes.object,
}
Main.defaultProps = {
}

export default Main
