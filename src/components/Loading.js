import React, { PropTypes } from 'react'

// Basic suggestion button.
function Loading({ message }) {
  return (
    <h2 className="loading text-center p4">
      { message }
    </h2>
  )
}

Loading.propTypes = {
  message: PropTypes.string.isRequired,
}
Loading.defaultProps = {
  message: 'Loading...',
}
export default Loading
