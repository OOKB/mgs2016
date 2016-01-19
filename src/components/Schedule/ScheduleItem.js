import React, { PropTypes } from 'react'
import classnames from 'classnames'

function ScheduleItem({ active, dateStr, id, images, show, reception, ...handler }) {
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
              <h4 onClick={handler.titleClick(id)}>{ dateStr }</h4>
              { show &&
                <div className="locations">
                  {
                    show.map(({ id, locations, name }) => (
                      <span key={id}>
                        { name && <p>{name}</p> }
                        { locations && active &&
                          <p>
                            {
                              locations.map(galleryLocation => (
                                <span
                                  className="galleryLocation"
                                  key={galleryLocation.id}
                                  onClick={handler.locationClick(galleryLocation.id)}
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
  titleClick: PropTypes.func.isRequired,
  locationClick: PropTypes.func.isRequired,
  show: PropTypes.array,
}
ScheduleItem.defaultProps = {
}

export default ScheduleItem
