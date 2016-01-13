import React, { PropTypes } from 'react'

import ContactEmail from './ContactEmail'
import ContactSocial from './ContactSocial'
import ContactWebsite from './ContactWebsite'

function Contact({ contactEmail, social, website }) {
  const socialLinks = []
  const socialServices = {
    twitter: {
      href: 'https://www.twitter.com',
      hrefText: 'Twitter',
    },
    instagram: {
      href: 'https://www.instagram.com',
      hrefText: 'Instagram',
    },
  }
  if (social) {
    for (const key of Object.keys(social)) {
      socialLinks.push(
        <ContactSocial
          key={key}
          {...socialServices[key]}
          service={key}
          username={social[key]}
        />
      )
    }
  }
  return (
    <ul className="contact-info">
      { website &&
          <ContactWebsite {...website} />
      }
      { contactEmail &&
          <ContactEmail mailto={contactEmail} />
      }
      {socialLinks}
    </ul>
  )
}

Contact.propTypes = {
  fullName: PropTypes.string,
  program: PropTypes.object,
  locationName: PropTypes.string,
  showDates: PropTypes.string,
  social: PropTypes.object,
  website: PropTypes.object,
}
Contact.defaultProps = {
}

export default Contact
