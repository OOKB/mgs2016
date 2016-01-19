import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'
import partial from 'lodash/function/partial'

function ScheduleFilters({ filters, update }) {
  return (
    <ul className="list-reset inline schedule-filters">
      {
        map(filters, (filter, index) => (
          <li key={index}>
            <button onClick={partial(update, filter.value)}>{filter.label}</button>
          </li>
        ))
      }
    </ul>
  )
}

ScheduleFilters.propTypes = {
  filters: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
}
ScheduleFilters.defaultProps = {
  filters: [
    { label: 'Exhibitions', value: 'On Campus Exhibition' },
    { label: 'Single Day Events', value: 'Single Day' },
    { label: 'Curatorial Practice Programs', value: 'City Wide' },
  ],
}

export default ScheduleFilters
