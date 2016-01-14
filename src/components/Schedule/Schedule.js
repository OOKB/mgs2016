import React, { PropTypes } from 'react'
import moment from 'moment'
import ScheduleItem from './ScheduleItem'
import ScheduleFilters from './ScheduleFilters'

function Schedule({ shows }) {
  return (
    <article id="schedule">
      <div className="container">
        <ScheduleFilters />
        { shows &&
          <div className="dates">
            {
              shows.map((dateInfo, index) => {
                const startDate = moment(dateInfo.startDate).format('MMMM Do')
                const endDate = moment(dateInfo.endDate).format('MMMM Do')
                const dateStr = `${startDate}-${endDate}`
                return (
                  <ScheduleItem
                    key={index}
                    dateStr={dateStr}
                    locations={dateInfo.items}
                    {...dateInfo}
                  />
                )
              })
            }
          </div>
        }
      </div>
    </article>
  )
}

Schedule.propTypes = {
  shows: PropTypes.array.isRequired,
}
Schedule.defaultProps = {
  shows: [
  ],
}

export default Schedule
