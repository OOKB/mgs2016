import React, { PropTypes } from 'react'
import GoogleMap from 'google-map-react'
import GalleryLocation from './GalleryLocation'
import mapStyleOptions from './MapStyles'

function GalleryMap({ locations, togglePin, ...settings }) {
  return (
    <div
      className="google-map-container pull-left"
      id="gallery-map-locations"
    >
      <GoogleMap {...settings} >
        {
          locations.map(location => (
            <GalleryLocation
              key={location.id}
              lat={location.geoData.location.lat}
              lng={location.geoData.location.lng}
              togglePin={togglePin}
              {...location}
            />
          ))
        }
      </GoogleMap>
    </div>
  )
}

GalleryMap.propTypes = {
  center: PropTypes.object,
  defaultCenter: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  togglePin: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
}
GalleryMap.defaultProps = {
  defaultCenter: {
    lat: 39.30902,
    lng: -76.62016,
  },
  options: {
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: true,
    styles: mapStyleOptions,
  },
  zoom: 15,
}
export default GalleryMap
