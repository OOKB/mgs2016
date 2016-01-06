import React, { PropTypes } from 'react'
import classnames from 'classnames'

function ListingItem({ active, building, name, street, zip, value }) {
  const address = `${street}, ${zip}`
  return (
    <li className={classnames(value, { active })}>
      <h4 className="gallery">{ name }</h4>
      <div className="building">{ building }</div>
      <div className="address">
        <address>{ address }</address>
      </div>
    </li>
  )
}

ListingItem.propTypes = {
  name: PropTypes.string.isRequired,
  alias: PropTypes.array,
  value: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  geoData: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  togglePin: PropTypes.func.isRequired,
}
ListingItem.defaultProps = {
}

export default ListingItem
