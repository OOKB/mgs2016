import React, { PropTypes } from 'react'

import ContactEmail from './ContactEmail'
import ContactWebsite from './ContactWebsite'

function Contact({ personalEmail, website, twitter, email }) {
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
  personalEmail: PropTypes.string,
  website: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
}
Contact.defaultProps = {
}

export default Contact
