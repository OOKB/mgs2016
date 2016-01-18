import React, { PropTypes } from 'react'

import GalleryListing from './GalleryListing'
import GalleryMap from './GalleryMap'
import mapStyleOptions from './MapStyles'

function Galleries({ locations, settings, title, togglePin, updateFilter }) {
  return (
    <article id="galleries" className="clearfix">
      <section className="map-wrapper">
        <GalleryMap
          locations={locations}
          settings={settings}
          togglePin={togglePin}
        />
        <GalleryListing
          locations={locations}
          togglePin={togglePin}
          updateFilter={updateFilter}
        />
      </section>
    </article>
  )
}

Galleries.propTypes = {
  locations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  togglePin: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
}
Galleries.defaultProps = {
  locations: [],
  settings: {
    defaultCenter: {
      lat: 39.30902,
      lng: -76.62016,
    },
    zoom: 15,
    options: {
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: true,
      styles: mapStyleOptions,
    },
  },
  title: 'Participating Galleries',
}

export default Galleries
