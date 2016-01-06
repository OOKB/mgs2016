import React, { PropTypes } from 'react'

function GalleryLocation({ }) {
  return (
    <div>
      Jared
    </div>
  )
}

GalleryLocation.propTypes = {
  name: PropTypes.string.isRequired,
  alias: PropTypes.array,
  value: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  geoData: PropTypes.object.isRequired,
}
GalleryLocation.defaultProps = {
}

export default GalleryLocation
