import React, { PropTypes } from 'react'

function GalleryLocation({ togglePin, active, value }) {
  function handleClick() {
    togglePin(value)
  }
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={handleClick}
        style={{
          cursor: 'pointer',
        }}
      >
        <path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.66 5.38-1.077 1.275-2.302 2.723-3.34 4.698-1.038-1.976-2.263-3.423-3.34-4.697C7.057 11.09 6 9.84 6 7.603 6 4.617 8.804 2 12 2zm0-2C7.802 0 4 3.403 4 7.602c0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398C20 3.402 16.2 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
      <span>
        { active ?
            <div className="mapPopup">
              Gallery info TK
            </div>
          :
            false
        }
      </span>
    </div>
  )
}

GalleryLocation.propTypes = {
  name: PropTypes.string.isRequired,
  alias: PropTypes.array,
  value: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  geoData: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  togglePin: PropTypes.func.isRequired,
}
GalleryLocation.defaultProps = {
}

export default GalleryLocation
