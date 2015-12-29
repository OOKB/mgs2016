import React, { PropTypes } from 'react'
import ScheduleItem from './ScheduleItem'

function Schedule({ }) {
  return (
    <article id="schedule">
      <div className="container">
        <h2>Schedule of Events</h2>
        <div>
          <ScheduleItem />
        </div>
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
