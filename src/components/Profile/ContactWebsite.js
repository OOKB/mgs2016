import React, { PropTypes } from 'react'

function ContactWebsite({ website }) {
  return (
    <li key="website" className="website">
      <a href={website}>
        {website}
      </a>
    </li>
  )
}

ContactWebsite.propTypes = {
  website: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
}
ContactWebsite.defaultProps = {
}

export default ContactWebsite
