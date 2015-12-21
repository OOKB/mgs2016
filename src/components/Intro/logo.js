import React, { Component, PropTypes } from 'react'

 class Logo extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <div id="logo"></div>
        <div id="logobg">
          <canvas id="canvas" hidpi="on" style={background: 'transparent'} />
        </div>
      </div>
    )
  }
}

export default Logo
