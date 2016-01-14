import React, { PropTypes } from 'react'

import ListingItem from './ListingItem'

function Galleries({ locations, togglePin }) {
  return (
    <aside
      id="gallerylisting"
      className="pull-right"
    >
      <h3>Gallery Listing</h3>
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
}
Galleries.defaultProps = {
}

export default Galleries
