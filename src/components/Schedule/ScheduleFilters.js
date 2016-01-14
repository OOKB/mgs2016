import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'

function ScheduleFilters({ filters }) {
  return (
    <ul>
      {
        map(filters, filter => (
          <li><button>{filter.label}</button></li>
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
