import React, { PropTypes } from 'react'
import classnames from 'classnames'
import moment from 'moment'

function ScheduleItem({ active, dateStr, images, locations }) {
  let openingReception
  if (active) {
    const receptionStart = moment(locations[0].receptionStart)
      .format('dddd, MMMM Do, h')
    const receptionEnd = moment(locations[0].receptionEnd).format('hA')
    openingReception = `${receptionStart}-${receptionEnd}`
  }
  return (
    <div
      className={classnames({
        'schedule-event': true,
        active,
      })}
    >
      <div className="container">
        <div className="group">
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
          { openingReception &&
            <div>
              Opening Reception {openingReception}
            </div>
          }
        </div>
      </div>
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
