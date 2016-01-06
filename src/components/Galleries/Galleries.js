import React, { PropTypes } from 'react'

import GalleryListing from './GalleryListing'
import GalleryMap from './GalleryMap'

// Used only for development!
import sampleLocations from './sampleLocations'

function Galleries({ locations, settings, title }) {
  return (
    <article id="galleries">
      <h2>{ title }</h2>
      <section className="map-wrapper">
        <GalleryMap locations={locations} settings={settings} />
      </section>
    </article>
  )
}

Galleries.propTypes = {
  locations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Galleries.defaultProps = {
  locations: sampleLocations,
  settings: {
    latitude: 39.30902,
    longitude: -76.62016,
    zoom: 15,
    // height: 800,
    // width: 1400,
  },
  title: 'Participating Galleries',
}

export default Galleries
