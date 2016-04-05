import React, { PropTypes } from 'react'
import classnames from 'classnames'

function ListingItem({ active, building, name, street, zip, id, togglePin, galleryHours }) {
  const address = street ? `${street}, ${zip}` : zip
  return (
    <li
      className={classnames({ active })}
      onClick={togglePin(id)}
    >
      <h4 className="gallery">{ name }</h4>
      <div className="building">{ building }</div>
      <div className="address">
        <address>{ address }</address>
      </div>
      <div className="openHours">
        <strong>Gallery Hours:</strong>
        {galleryHours}
      </div>
    </li>
  )
}

ListingItem.propTypes = {
  name: PropTypes.string.isRequired,
  alias: PropTypes.array,
  id: PropTypes.string.isRequired,
  street: PropTypes.string,
  zip: PropTypes.string.isRequired,
  geoData: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  togglePin: PropTypes.func.isRequired,
  galleryHours: PropTypes.array,
}
ListingItem.defaultProps = {
}

export default ListingItem
