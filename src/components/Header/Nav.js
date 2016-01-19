import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Search from './Search'
// import Toggle from './toggle'
import NavbarLink from './NavbarLink'

// const LARGE_SCREEN_SIZE = 767

class Nav extends Component {
  render() {
    const { searchInfo, navLinks } = this.props
    const navClasses = classNames('main-nav', 'pull-right')
    return (
      <nav className={ navClasses }>
        <div className="nav-logo"></div>
        <ul className="nav">
          {
            navLinks.map(({ id, className, to, href, text }) => (
              <li key={id} className={className}>
                <NavbarLink to={to} href={href}>{text}</NavbarLink>
              </li>
            ))
          }
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
  navLinks: PropTypes.array.isRequired,
}
Nav.defaultProps = {
  navLinks: [
    { id: 'intro', href: '#intro', text: 'Welcome' },
    { id: 'schedule', href: '#schedule', text: 'Schedule' },
    { id: 'galleries', href: '#galleries', text: 'Galleries' },
    { id: 'students', href: '#students', text: 'Students' },
    { id: 'updates', href: 'http://micagradstudies.tumblr.com/', text: 'Updates' },
  ],
}
export default Nav
