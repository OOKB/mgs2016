import React, { PropTypes } from 'react'

import ContactEmail from './ContactEmail'
import ContactSocial from './ContactSocial'
import ContactWebsite from './ContactWebsite'

function Contact({ contactEmail, instagram, twitter, website }) {
  return (
    <ul className="contact-info">
      { website &&
          <ContactWebsite website={website} />
      }
      { contactEmail &&
          <ContactEmail mailto={contactEmail} />
      }
      { twitter &&
          <ContactSocial
            href="https://www.twitter.com"
            hrefText="Twitter"
            service="twitter"
            username={twitter}
          />
      }
      { instagram &&
          <ContactSocial
            href="https://www.instagram.com"
            hrefText="Instagram"
            service="instagram"
            username={instagram}
          />
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
