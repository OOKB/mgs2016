import React, { PropTypes } from 'react'

function ContactWebsite({ preview, url }) {
  return (
    <li key="website" className="website">
      <img src={preview.image.url} />
      <a href={url.href}>
        {url.href}
      </a>
    </li>
  )
}

ContactWebsite.propTypes = {
  preview: PropTypes.object,
  url: PropTypes.object,
}
ContactWebsite.defaultProps = {
}

export default ContactWebsite
