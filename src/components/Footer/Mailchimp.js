import React, { Component } from 'react'

export default class Mailchimp extends Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form action="//mica.us7.list-manage.com/subscribe/post?u=53b5a3bbf080b63810883298a&id=3497a06e19" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <p>Signup for MICA Grad Show Updates</p>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span>
              </label>
              <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }}><input type="text" name="b_53b5a3bbf080b63810883298a_3497a06e19" tabIndex={ -1 } defaultValue /></div>
            <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
    )
  }
}
