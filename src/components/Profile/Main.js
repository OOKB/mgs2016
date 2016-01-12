import React, { PropTypes } from 'react'

import Slideshow from './Slideshow'
import NoImages from './NoImages'

function Main({ file, pos, type, user }) {
  const { statement } = user
  return (
    <div className="student-main">
      { file ?
          <Slideshow
            user={user}
            file={file}
            pos={1}
            type={'image'}
          />
        :
          <NoImages />
      }
      { statement &&
          <div
            className="statement"
            dangerouslySetInnerHTML = {{
              __html: statement,
            }}
          />
      }
    </div>
  )
}

// TODO: look at the data and set these correctly
Main.propTypes = {
  file: PropTypes.array,
  pos: PropTypes.any,
  type: PropTypes.any,
  user: PropTypes.object,
}
Main.defaultProps = {
}

export default Main
