import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'
import partial from 'lodash/function/partial'

function GalleriesFilters({ filters, update, groupId }) {
  return (
    <ul className="list-reset inline galleries-filters">
      {
        map(filters, (filter, index) => (
          <li key={index}>
            <button onClick={partial(update, groupId, 'showGroup', 'option', filter.value)}>
              {filter.label}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

GalleriesFilters.propTypes = {
  update: PropTypes.func.isRequired,
}
GalleriesFilters.defaultProps = {
  filters: [
    { label: 'Galleries', value: false },
    { label: 'Curatorial Practice Venues', value: 'recVAvBdZWX79KCZo' },
  ],
}

export default GalleriesFilters
