import React, { PropTypes } from 'react'

function ContactSocial({ href, hrefText, service, username }) {
  return (
    <li key={service} className={service}>
      <a href={`${href}/${username}`} target="_blank">
        {hrefText}
      </a>
    </li>
  )
}

ContactSocial.propTypes = {
  service: PropTypes.string,
  username: PropTypes.string,
  hrefText: PropTypes.string,
  href: PropTypes.string,
}
ContactSocial.defaultProps = {
}

export default ContactSocial
