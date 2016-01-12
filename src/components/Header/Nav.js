import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Search from './Search'
// import Toggle from './toggle'

// const LARGE_SCREEN_SIZE = 767

class Nav extends Component {
  render() {
    const { searchInfo } = this.props
    const navClasses = classNames('main-nav', 'pull-right')
    return (
      <nav className={ navClasses }>
        <div className="nav-logo"></div>
        <ul className="nav">
          <li key="search" className="student-search">
            <Search {...searchInfo} />
          </li>
        </ul>
      </nav>
    )
  }
}
Nav.propTypes = {
  searchInfo: PropTypes.object.isRequired,
}
export default Nav
