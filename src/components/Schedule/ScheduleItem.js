import React, { PropTypes } from 'react'
import classnames from 'classnames'
import moment from 'moment'
import _ from 'lodash'
import smoothScroll from 'smooth-scroll'

function ScheduleItem({ active, dateStr, images, locations, togglePin }) {
  function handleClick(value) {
    togglePin(value)
    smoothScroll.animateScroll(null, '#gallery-map-locations', { offset: 128 })
  }
  let openingReception
  if (active) {
    const receptionStart = moment(locations[0].receptionStart)
      .utcOffset('-0400').format('dddd, MMMM D, h')
    const receptionEnd = moment(locations[0].receptionEnd).utcOffset('-0400').format('hA')
    openingReception = `Reception: ${receptionStart}–${receptionEnd}`
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
          <div className="four columns">
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
                                galleryLocations.map((galleryLocation, idx) => {
                                  return (
                                    <span
                                      className="galleryLocation"
                                      key={idx}
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
            { openingReception &&
              <div className="reception">
                <p>{openingReception}</p>
              </div>
            }
          </div>
          { images &&
            <div className="schedule-images eight columns">
              {
                images.map((imgInfo, index) => <img key={index} src={imgInfo.src} />)
              }
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
