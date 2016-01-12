import React, { Component, PropTypes } from 'react'

class Logo extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div>
        <div id="logo"></div>
        <div id="logobg">
          <canvas id="canvas" hidpi="on" style={{ background: 'transparent' }} />
        </div>
      </div>
    )
  }
}
Logo.propTypes = {}
