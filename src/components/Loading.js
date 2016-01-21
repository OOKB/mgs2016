import React, { PropTypes } from 'react'

// Basic suggestion button.
function Loading({ message }) {
  return (
    <div className="loadingWrap text-center p2 pt4">
      <img src="../images/mgslogo-sm.jpg" />
      <h2 className="loading mt2 mb2">
        { message }
      </h2>
    </div>
  )
}

Loading.propTypes = {
  message: PropTypes.string.isRequired,
}
Loading.defaultProps = {
  message: 'Loading...',
}
export default Loading
