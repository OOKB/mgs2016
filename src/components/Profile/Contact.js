import React, { PropTypes } from 'react'

import ContactEmail from './ContactEmail'
import ContactWebsite from './ContactWebsite'

function Contact({ personalEmail, website }) {
  return (
    <ul className="contact-info">
      { website ?
          <ContactWebsite website={website} />
        :
          false
      }
      { personalEmail ?
          <ContactEmail mailto={personalEmail} />
        :
          false
      }
    </ul>
  )
}

Contact.propTypes = {
  personalEmail: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  website: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
}
Contact.defaultProps = {
}

export default Contact
