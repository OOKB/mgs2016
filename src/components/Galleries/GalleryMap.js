import React, { PropTypes } from 'react'
import GoogleMap from 'google-map-react'

function GalleryMap({ locations, settings }) {
  const mapOptions = {
    defaultCenter: {
      lat: 34.347595,
      lng: -112.156636,
    },
    zoom: 10,
  }
  return (
    <div
      className="google-map-container"
      style={{
        height: '500px',
        position: 'relative',
      }}
    >
      <GoogleMap {...mapOptions}>
      </GoogleMap>
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
