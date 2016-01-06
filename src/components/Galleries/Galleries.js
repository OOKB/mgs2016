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
        <GalleryListing locations={locations} />
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
  settings: {},
  title: 'Participating Galleries',
}

export default Galleries
