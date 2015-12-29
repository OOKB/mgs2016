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
  dateStr: 'April 15–May 1',
  // images: [],
  locations: [
    'Community Arts, MFA',
    'LeRoy E. Hoffberger School of Painting',
    'Mount Royal School of Art',
  ],
}

export default ScheduleItem
