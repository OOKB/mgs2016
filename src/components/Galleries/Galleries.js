import React, { PropTypes } from 'react'

import GalleryListing from './GalleryListing'
import GalleryMap from './GalleryMap'

function Galleries({ locations, centerMap, togglePin, updateFilter }) {
  return (
    <article id="galleries" className="clearfix">
      <section className="map-wrapper">
        <GalleryMap
          locations={locations}
          center={centerMap}
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
  centerMap: PropTypes.object,
  title: PropTypes.string,
  togglePin: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
}
Galleries.defaultProps = {
  locations: [],
  title: 'Participating Galleries',
}

export default Galleries
