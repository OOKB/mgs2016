import React, { Component, PropTypes } from 'react'

import Logo from'./logo'

class Intro extends Component {
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

Intro.propTypes = {
  body: PropTypes.string.isRequired,
}

export default Intro
