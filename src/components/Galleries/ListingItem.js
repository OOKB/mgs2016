import React, { PropTypes } from 'react'

function ListingItem({ building, name, street, zip, value }) {
  const address = `${street}, ${zip}`
  return (
    <li className={ value }>
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
}
ListingItem.defaultProps = {
}

export default ListingItem
