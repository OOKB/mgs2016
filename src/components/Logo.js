import React, { Component, PropTypes } from 'react'

class Logo extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const { videoSrc } = this.props
    return (
      <section className="landing-logo">
        <div className="creative-blank-video">
          <video height="500" controls>
            <source src={videoSrc} type="video/mp4" />
            { "Your browser does not support the video tag." }
          </video>
        </div>
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
