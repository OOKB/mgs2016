import React, { PropTypes } from 'react'

function ContactEmail({ personalEmail }) {
  const onClick = (evt) => {
    evt.preventDefault()
    window.location.href = personalEmail
  }
  return (
    <li key="email" className="email">
      <a href="#" mailto={onClick}>
        Contact via Email
      </a>
    </li>
  )
}

ContactEmail.propTypes = {
  personalEmail: PropTypes.string,
}
ContactEmail.defaultProps = {
}

export default ContactEmail
