import React, { PropTypes } from 'react'

function ContactWebsite({ website }) {
  console.log(website)
  return (
    <li key="website" className="website">
      <a href={website}>
        {website}
      </a>
    </li>
  )
}

ContactWebsite.propTypes = {
  website: PropTypes.string,
}
ContactWebsite.defaultProps = {
}

export default ContactWebsite
