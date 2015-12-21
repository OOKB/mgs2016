import React, { Component, PropTypes } from 'react'
import Credits from './Credits'
import MailchimpForm from './Mailchimp'

export default class Footer extends Component {
  render() {
    const {author, street, city, state, zip, phone, builtDesigned, nav} = this.props.data
    const address = `${city}, ${state} ${zip}`

    return (
      <footer>
        <div className="container">
          <div className="group">
            <div className="column span1 footer-logo">
              <a href="http://www.mica.edu/" target="_blank" className="micalogo">
                <img src="/assets/images/mica_lockup_transp.png" alt="MICA Logo" />
              </a>
            </div>
            <div className="column span1 footer-contact">
              <ul>
                <li>{author}</li>
                <li>{street}</li>
                <li>{address}</li>
                <li>{phone}</li>
              </ul>
            </div>
            <div className="column span1 footer-credits">
              <Credits builtDesigned={builtDesigned} />
            </div>
            <div className="column span1 footer-nav">
              <ul>
                {nav.map (item) ->
                  {href, link, title} = item
                  url = href or '#'+link
                  unless href is false
                    <li key={link}><a href={url}>{title}</a></li>
                }
              </ul>
              <div className="signup">
                <p><a href="http://eepurl.com/bciqMT">Signup for MICA Grad Show Updates</a></p>
              </div>
            </div>
            <div className="column span1 archive">
              <h3>Archive</h3>
              <ul>
                <li><a href="http://graduate.mica.edu/gradshow/2014/">2014</a></li>
                <li><a href="http://graduate.mica.edu/thesis/">2013</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
  author: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  phone: PropTypes.string,
  builtDesigned: PropTypes.array,
  nav: PropTypes.array,
}
