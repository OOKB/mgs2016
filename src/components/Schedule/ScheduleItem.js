import React, { PropTypes } from 'react'
import classnames from 'classnames'

function ScheduleItem({ active, dateStr, show, reception, name, ...handler }) {
  return (
    <li className="item show">
      <div>
        <h1>{ name }</h1>
        <h4>{ dateStr }</h4>
        <div className="reception">
          <p>{reception}</p>
        </div>
        <div className="locations">
          {
            show.map(({ id, locations, name }) => (
              <span key={id}>
                { name && <p>{name}</p> }
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
              </span>
            ))
          }
        </div>
      </div>
    </li>
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
