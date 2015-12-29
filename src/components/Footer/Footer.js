import React, { Component, PropTypes } from 'react'
import Credits from './Credits'
// import MailchimpForm from './Mailchimp'

class Footer extends Component {
  render() {
    const { archive, author, street, city, state, zip, phone, builtDesigned, nav, signup } = this.props
    const address = `${city}, ${state} ${zip}`

    return (
      <footer>
        <div className="container p2">
          <div className="group">
            <div className="three columns footer-logo">
              <a href="http://www.mica.edu/" target="_blank" className="micalogo">
                <img src="/assets/images/mica_lockup_transp.png" alt="MICA Logo" />
              </a>
            </div>
            <div className="three columns footer-contact">
              <ul>
                {author && <li>{author}</li>}
                {street && <li>{street}</li>}
                {address && <li>{address}</li>}
                {phone && <li>{phone}</li>}
              </ul>
            </div>
            <div className="three columns footer-nav">
              { nav &&
                <ul>
                  {nav.map((item) => {
                    const { href, link, title } = item
                    const url = href || '#' + link
                    if (href) {
                      return (
                        <li key={link}><a href={url}>{title}</a></li>
                      )
                    }
                  })}
                </ul>
              }
              <div className="signup">
                <p><a href={signup.src}>{signup.title}</a></p>
              </div>
            </div>
            <div className="three columns archive">
              <h3>Archive</h3>
              <ul>
                {
                  archive.map((item, index) => (
                    <li key={index}><a href={item.src}>{item.title}</a></li>
                  ))
                }
              </ul>
            </div>
            { builtDesigned &&
              <div className="three columns footer-credits">
                <Credits builtDesigned={builtDesigned} />
              </div>
            }
          </div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
  archive: PropTypes.array.isRequired,
  author: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  phone: PropTypes.string,
  builtDesigned: PropTypes.array,
  nav: PropTypes.array,
  signup: PropTypes.object,
}
Footer.defaultProps = {
  archive: [
    { title: '2015', src: 'http://2015.micagradshow.com' },
    { title: '2014', src: 'http://graduate.mica.edu/gradshow/2014/' },
    { title: '2013', src: 'http://graduate.mica.edu/thesis/' },
  ],
  signup: {
    title: 'Signup for MICA Grad Show Updates',
    src: 'http://eepurl.com/bciqMT',
  },
}
export default Footer
