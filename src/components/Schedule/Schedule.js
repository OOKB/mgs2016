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
        { showGroups &&
          <ul className="dates item-grid list-reset">
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
          </ul>
        }
      </div>
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
