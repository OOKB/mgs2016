import React, { PropTypes } from 'react'

function GalleryMap({ }) {
  return (
    <div className="google-map-container">
      {'gmap'}
    </div>
  )
}

GalleryMap.propTypes = {
  locations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
}
GalleryMap.defaultProps = {
}

export default GalleryMap
