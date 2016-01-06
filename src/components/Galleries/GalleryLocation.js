import React, { PropTypes } from 'react'

function GalleryLocation({ }) {
  return (
    <div>
      Jared
    </div>
  )
}

GalleryLocation.propTypes = {
  locations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
}
GalleryLocation.defaultProps = {
}

export default GalleryLocation
