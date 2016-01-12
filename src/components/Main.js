import React, { Component, PropTypes } from 'react'

import Logo from './Logo'
import Header from '../containers/Header'
import Intro from './Intro/Intro'
import Schedule from './Schedule/Schedule'
import Galleries from '../containers/Galleries'
import Students from '../containers/Students'
import Footer from './Footer/Footer'

class Main extends Component {

  render() {
    const { title, location } = this.props
    return (
      <div>
        <Header title={title} />
        <Logo />
        <Intro />
        <Schedule />
        <Galleries />
        <Students location={location} />
        <Footer />
      </div>
    )
  }
}
Main.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Main.defaultProps = {
  title: 'Mica Grad Show',
}
export default Main
