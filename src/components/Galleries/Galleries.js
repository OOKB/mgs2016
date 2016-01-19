import React, { PropTypes } from 'react'

import GalleryListing from './GalleryListing'
import GalleryMap from './GalleryMap'

function Galleries({ locations, centerMap, groupTypes, activateMapPin, activateShowType }) {
  return (
    <article id="galleries" className="clearfix">
      <section className="map-wrapper">
        <GalleryMap
          locations={locations}
          center={centerMap}
          togglePin={activateMapPin}
        />
        <GalleryListing
          locations={locations}
          togglePin={activateMapPin}
          groupTypes={groupTypes}
          updateFilter={activateShowType}
        />
      </section>
    </article>
  )
}

Galleries.propTypes = {
  activateMapPin: PropTypes.func.isRequired,
  activateShowType: PropTypes.func.isRequired,
  groupTypes: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  centerMap: PropTypes.object,
  title: PropTypes.string,
}
Galleries.defaultProps = {
  locations: [],
  title: 'Participating Galleries',
}

export default Galleries
