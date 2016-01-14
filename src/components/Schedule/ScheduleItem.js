import React, { PropTypes } from 'react'
import classnames from 'classnames'

function ScheduleItem({ active, dateStr, images, locations }) {
  return (
    <div
      className={classnames({
        'schedule-event': true,
        active,
      })}
    >
      <div className="schedule-text">
        <h4>{ dateStr }</h4>
        { locations &&
          <div className="locations">
            { locations.map((location, index) => <p key={index}>{location.name}</p>) }
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
  active: PropTypes.bool,
  dateStr: PropTypes.string.isRequired,
  locations: PropTypes.array,
}
ScheduleItem.defaultProps = {
}

export default ScheduleItem
