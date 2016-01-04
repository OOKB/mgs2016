import React, { Component, PropTypes } from 'react'

// import Nav from './Nav'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props

    // <Nav data={data} programs={programs} />
    return (
      <header className="">
        <h1>{title}</h1>
        {'navigation'}
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
