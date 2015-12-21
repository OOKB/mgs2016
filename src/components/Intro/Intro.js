import React, { Component, PropTypes } from 'react'

import Logo from'./logo'

export default class Counter extends Component {
  render() {
    const { body } = this.props
    return (
      <article id="intro">
        <div className="container">
          <Logo />
          <div className="intro-text" dangerouslySetInnerHTML={__html: body} />
        </div>
      </article>
    )
  }
}
Counter.propTypes = {
  body: PropTypes.string.isRequired,
}
