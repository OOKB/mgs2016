import React, { PropTypes } from 'react'
import ScheduleItem from './ScheduleItem'
import ScheduleFilters from './ScheduleFilters'

function Schedule({ showGroups, togglePin, updateFilter }) {
  return (
    <article id="schedule">
      <div className="container">
        <ScheduleFilters update={updateFilter} />
      </div>
      { showGroups &&
        <div className="dates">
          {
            showGroups.map(dateInfo => (
              <ScheduleItem
                key={dateInfo.id}
                togglePin={togglePin}
                {...dateInfo}
              />
            ))
          }
        </div>
      }
    </article>
  )
}

Schedule.propTypes = {
  showGroups: PropTypes.array.isRequired,
  togglePin: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
}
Schedule.defaultProps = {
}

export default Schedule
