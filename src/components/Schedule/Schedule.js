import React, { PropTypes } from 'react'
import ScheduleItem from './ScheduleItem'

function Schedule({ dates }) {
  return (
    <article id="schedule">
      <div className="container">
        <h2>Schedule of Events</h2>
          { dates &&
            <div className="dates">
              {
                dates.map((dateInfo, index) =>
                  <ScheduleItem key={index} {...dateInfo} />)
              }
            </div>
          }
      </div>
    </article>
  )
}

Schedule.propTypes = {
  dates: PropTypes.array.isRequired,
}
Schedule.defaultProps = {
  dates: [
  ],
}

export default Schedule
