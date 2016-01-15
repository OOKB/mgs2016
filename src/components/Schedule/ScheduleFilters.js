import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'

function ScheduleFilters({ filters }) {
  return (
    <ul className="list-reset inline schedule-filters">
      {
        map(filters, (filter, index) => (
          <li key={index}><button>{filter.label}</button></li>
        ))
      }
    </ul>
  )
}

ScheduleFilters.propTypes = {
  filters: PropTypes.array.isRequired,
}
ScheduleFilters.defaultProps = {
  filters: [
    { label: 'Exhibitions', value: '' },
    { label: 'Single Day Events', value: '' },
    { label: 'Curatorial Practice Programs', value: '' },
  ],
}

export default ScheduleFilters
