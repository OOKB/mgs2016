import React, { PropTypes } from 'react'
import GoogleMap from 'google-map-react'
import GalleryLocation from './GalleryLocation'

function GalleryMap({ locations, settings, togglePin }) {
  return (
    <div
      className="google-map-container pull-left"
    >
      <GoogleMap {...settings}>
        {locations.map((location, index) => {
          // Quick hack to parse bad data
          const lat = typeof(location.geoData) === 'undefined' ?
            40 : location.geoData.location.lat
          const lng = typeof(location.geoData) === 'undefined' ?
            90 : location.geoData.location.lng
          return (
            <GalleryLocation
              key={index}
              lat={lat}
              lng={lng}
              togglePin={togglePin}
              {...location}
            />
          )
        })}
      </GoogleMap>
    </div>
  )
}

GalleryMap.propTypes = {
  locations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  togglePin: PropTypes.func.isRequired,
}
GalleryMap.defaultProps = {
}
export default GalleryMap
