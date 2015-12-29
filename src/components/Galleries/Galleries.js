import React, { PropTypes } from 'react'

import GalleryListing from './GalleryListing'
import GalleryMap from './GalleryMap'

function Galleries({ locations, settings }) {
  return (
    <article id="galleries">
      <h2>Participating Galleries</h2>
      <section className="map-wrapper">
        <GalleryMap settings={settings} />
        <GalleryListing locations={locations} />
      </section>
    </article>
  )
}

Galleries.propTypes = {
  locations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
}
Galleries.defaultProps = {
  locations: [],
  settings: {},
}

export default Galleries
