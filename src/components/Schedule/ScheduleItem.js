import React, { PropTypes } from 'react'
import classnames from 'classnames'

function ScheduleItem({ active, dateStr, images, show, togglePin, reception }) {
  // Provide galleryLocation map function a named click handler with id.
  function getLocationClickHandler(id) {
    return function handleClick() { togglePin(id) }
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
              { show &&
                <div className="locations">
                  {
                    show.map(({ id, locations, program }) => (
                      <span key={id}>
                        { program && <p>{program.name}</p> }
                        { locations && active &&
                          <p>
                            {
                              locations.map(galleryLocation => (
                                <span
                                  className="galleryLocation"
                                  key={galleryLocation.id}
                                  onClick={getLocationClickHandler(galleryLocation.id)}
                                >
                                  {galleryLocation.name}
                                </span>
                              ))
                            }
                          </p>
                        }
                      </span>
                    ))
                  }
                </div>
              }
            </div>
            { reception && active &&
              <div className="reception">
                <p>{reception}</p>
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
  show: PropTypes.array,
  togglePin: PropTypes.func.isRequired,
}
ScheduleItem.defaultProps = {
}

export default ScheduleItem
