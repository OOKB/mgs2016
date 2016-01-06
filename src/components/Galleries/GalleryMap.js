import React, { PropTypes } from 'react'
import GoogleMap from 'google-map-react'

function GalleryMap({ locations, settings }) {
  return (
    <div className="google-map-container" style={{
      height:'500px'
    }
    }>
      <GoogleMap />
      Some text
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
