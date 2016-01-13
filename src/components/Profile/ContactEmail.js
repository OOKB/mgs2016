import React, { PropTypes } from 'react'

function ContactEmail({ mailto }) {
  const onClick = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:' + mailto
  }
  return (
    <li key="email" className="email">
      <button href="#" onClick={onClick}>
        Contact via Email
      </button>
    </li>
  )
}

ContactEmail.propTypes = {
  mailto: PropTypes.string,
}
ContactEmail.defaultProps = {
}

export default ContactEmail
