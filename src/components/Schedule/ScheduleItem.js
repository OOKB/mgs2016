import React, { PropTypes } from 'react'

function ScheduleItem({ dateStr, images, locations }) {
  return (
    <div className="schedule-event">
      <div className="schedule-text">
        <h4>{ dateStr }</h4>
        { locations &&
          <div className="locations">
            { locations.map((location, index) => <p key={index}>{location}</p>) }
          </div>
        }
      </div>
      { images &&
        <div className="schedule-images">
          {
            images.map((imgInfo, index) => <img key={index} src={imgInfo.src} />)
          }
        </div>
      }
    </div>
  )
}

ScheduleItem.propTypes = {
  dateStr: PropTypes.string.isRequired,
  locations: PropTypes.array,
}
ScheduleItem.defaultProps = {
}

export default ScheduleItem
