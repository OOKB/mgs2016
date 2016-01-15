import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'

function GalleriesFilters({ filters }) {
  return (
    <ul className="list-reset inline galleries-filters">
      {
        map(filters, (filter, index) => (
          <li key={index}><button>{filter.label}</button></li>
        ))
      }
    </ul>
  )
}

GalleriesFilters.propTypes = {
  filters: PropTypes.array.isRequired,
}
GalleriesFilters.defaultProps = {
  filters: [
    { label: 'Galleries', value: '' },
    { label: 'Curatorial Practice Venues', value: '' },
  ],
}

export default GalleriesFilters
