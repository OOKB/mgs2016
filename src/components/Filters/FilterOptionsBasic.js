import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'
import classnames from 'classnames'

function ScheduleFilters({ className, filters, update }) {
  return (
    <ul className={className}>
      {
        map(filters, ({ active, label, value }, index) => (
          <li key={index} className={classnames({ active })}>
            <button onClick={update(value)}>{label}</button>
          </li>
        ))
      }
    </ul>
  )
}

ScheduleFilters.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
}
ScheduleFilters.defaultProps = {
}

export default ScheduleFilters
