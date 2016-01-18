import React, { PropTypes } from 'react'

import ListingItem from './ListingItem'
import GalleriesFilters from './GalleriesFilters'
function Galleries({ locations, togglePin, updateFilter }) {
  return (
    <aside
      id="gallerylisting"
      className="pull-right"
    >
      <GalleriesFilters update={updateFilter} groupId="galleries" />
      <ul>
        {
          locations.map((location) =>
            <ListingItem
              key={location.value}
              togglePin={togglePin}
              {...location}
            />
          )
        }
      </ul>
    </aside>
  )
}

Galleries.propTypes = {
  locations: PropTypes.array.isRequired,
  togglePin: PropTypes.func,
  updateFilter: PropTypes.func.isRequired,
}
Galleries.defaultProps = {
}

export default Galleries
