import React, { PropTypes } from 'react'

import ContactEmail from './ContactEmail'
import ContactWebsite from './ContactWebsite'

function Contact({ contactEmail, website, twitter, email }) {
  console.log(website)
  return (
    <ul className="contact-info">
      { website ?
          <ContactWebsite website={website} />
        :
          false
      }
      { contactEmail ?
          <ContactEmail mailto={contactEmail} />
        :
          false
      }
    </ul>
  )
}

Contact.propTypes = {
  contactEmail: PropTypes.string,
  website: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
}
Contact.defaultProps = {
}

export default Contact
