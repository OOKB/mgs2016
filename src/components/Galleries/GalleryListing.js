import React, { PropTypes } from 'react'

import ListingItem from './ListingItem'
import Filters from '../Filters/FilterOptionsBasic'

function Galleries({ groupTypes, locations, togglePin, updateFilter }) {
  return (
    <aside
      id="gallerylisting"
      className="pull-right"
    >
      <Filters
        className="list-reset inline galleries-filters"
        filters={groupTypes}
        update={updateFilter}
      />
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
