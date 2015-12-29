import React, { Component, PropTypes } from 'react'

import Header from './Header/Header'
import Intro from './Intro/Intro'

class Main extends Component {

  render() {
    const { title } = this.props
    return (
      <div>
        { 'main' }
        <Header title={title} />
        <Intro />
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
