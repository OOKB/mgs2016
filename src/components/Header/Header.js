import React, { Component, PropTypes } from 'react'

import Nav from './Nav'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, ...rest } = this.props

    // <Nav data={data} programs={programs} />
    return (
      <header className="">
        <div className="container clearfix">
          <h1 className="pull-left">{title}</h1>
          <Nav {...rest} />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
