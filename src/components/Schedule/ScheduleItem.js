import React, { PropTypes } from 'react'
import classnames from 'classnames'
import moment from 'moment'
import _ from 'lodash'

function ScheduleItem({ active, dateStr, images, locations, togglePin }) {
  function handleClick(value) {
    togglePin(value)
  }
  let openingReception
  if (active) {
    const receptionStart = moment(locations[0].receptionStart)
      .utcOffset('-0400').format('dddd, MMMM D, h')
    const receptionEnd = moment(locations[0].receptionEnd).utcOffset('-0400').format('hA')
    openingReception = `Opening Reception ${receptionStart}-${receptionEnd}`
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
                {
                  locations.map((location, index) => {
                    let galleryLocations
                    // If gallery locations are available and section is active
                    // then generate a list
                    if (location.showLocation && active) {
                      galleryLocations = _.uniq(location.showLocation.map((gallery) => {
                        return gallery
                      }))
                    }
                    return (
                      <span key={index}>
                        <p>{location.name}</p>
                        <p>{ galleryLocations &&
                              galleryLocations.map((galleryLocation) => {
                                return (
                                  <span
                                    onClick={() => handleClick(galleryLocation.location.value)}
                                  >
                                    {galleryLocation.location.name}
                                  </span>
                                )
                              })
                            }
                        </p>
                      </span>
                    )
                  })
                }
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
              {openingReception}
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
  togglePin: PropTypes.func.isRequired,
}
ScheduleItem.defaultProps = {
}

export default ScheduleItem
