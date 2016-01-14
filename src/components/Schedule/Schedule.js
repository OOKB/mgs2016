import React, { PropTypes } from 'react'
import ScheduleItem from './ScheduleItem'

function Schedule({ shows }) {
  console.log(shows)
  return (
    <article id="schedule">
      <div className="container">
        <h2>Schedule of Events</h2>
          { shows &&
            <div className="dates">
              {
                shows.map((dateInfo, index) =>
                  <ScheduleItem key={index} {...dateInfo} />)
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
