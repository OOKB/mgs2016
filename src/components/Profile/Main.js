import React, { PropTypes } from 'react'

import Slideshow from './Slideshow'
import NoImages from './NoImages'

function Main({ collection, user }) {
  const { statement } = user
  return (
    <div className="student-main">
      { collection ?
          <Slideshow
            user={user}
            collection={collection}
          />
        :
          <NoImages />
      }
      <div className="container">
        <div className="three columns">
          <p>please print the other program member list here</p>
        </div>
        { statement &&
            <div
              className="statement six columns"
              dangerouslySetInnerHTML = {{
                __html: statement,
              }}
            />
        }
      </div>
    </div>
  )
}

// TODO: look at the data and set these correctly
Main.propTypes = {
  collection: PropTypes.array,
  user: PropTypes.object,
}
Main.defaultProps = {
}

export default Main
