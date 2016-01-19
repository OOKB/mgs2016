import React, { PropTypes } from 'react'
import ScheduleItem from './ScheduleItem'
import Filters from '../Filters/FilterOptionsBasic'

function Schedule({ showGroups, groupTypes, activateMapPin, activateShowGroup, activateShowType }) {
  return (
    <article id="schedule">
      <div className="container">
        <Filters
          className="list-reset inline schedule-filters"
          filters={groupTypes}
          update={activateShowType}
        />
      </div>
      { showGroups &&
        <div className="dates">
          {
            showGroups.map(dateInfo => (
              <ScheduleItem
                key={dateInfo.id}
                titleClick={activateShowGroup}
                locationClick={activateMapPin}
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
  activateMapPin: PropTypes.func.isRequired,
  activateShowType: PropTypes.func.isRequired,
  activateShowGroup: PropTypes.func.isRequired,
  showGroups: PropTypes.array.isRequired,
  groupTypes: PropTypes.array.isRequired,
}
Schedule.defaultProps = {
}

export default Schedule
