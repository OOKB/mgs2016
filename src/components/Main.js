import React, { Component, PropTypes } from 'react'
import smoothScroll from 'smooth-scroll'

import Logo from './Logo'
import Header from '../containers/Header'
import Intro from './Intro/Intro'
import Schedule from '../containers/Schedule'
import Galleries from '../containers/Galleries'
import Students from '../containers/Students'
import Footer from './Footer/Footer'

class Main extends Component {
  componentDidMount() {
    const { hash } = this.props
    if (hash) {
      const scrollOptions = {
        offset: 0,
        speed: 0,
        updateURL: false,
      }
      smoothScroll.animateScroll(hash, null, scrollOptions)
    }
  }
  render() {
    const { title } = this.props
    return (
      <div>
        <Header title={title} />
        <Logo />
        <Intro />
        <Schedule />
        <Galleries />
        <Students />
        <Footer />
      </div>
    )
  }
}
Main.propTypes = {
  hash: PropTypes.string,
  title: PropTypes.string.isRequired,
}
Main.defaultProps = {
  title: 'Mica Grad Show',
}
export default Main
