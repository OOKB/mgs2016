import React, { Component, PropTypes } from 'react'

class Logo extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const { videoSrc } = this.props
    return (
      <section className="landing-logo">
        <h1 className="hidden">MICA Grad Show 2016</h1>
        <div className="rotating-text"><img src="images/wordschange.gif" /></div>
      </section>
    )
  }
}
Logo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
}
Logo.defaultProps = {
  videoSrc: 'http://www.micagradshow.com/video/animated_logo-small.mp4',
}
export default Logo
