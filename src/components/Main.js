import React, { Component, PropTypes } from 'react'

import Logo from './Logo'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import Schedule from './Schedule/Schedule'
import Galleries from './Galleries/Galleries'

class Main extends Component {

  render() {
    const { title } = this.props
    return (
      <div>
        <Header title={title} />
        <Logo />
        <Intro />
        <Schedule />
        <Galleries />
      </div>
    )
  }
}
Main.propTypes = {
  title: PropTypes.string.isRequired,
}
Main.defaultProps = {
  title: 'Mica Grad Show',
}
export default Main
