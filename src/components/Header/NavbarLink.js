import React from 'react'
import Link from '../../containers/Link'

function NavbarLink({ children, className, href, to }) {
  return href ? <a href={href}>{children}</a> : (
    <Link to={to} className={className} activeStyle={{ color: '#A94545' }}>
      {children}
    </Link>
  )
}

export default NavbarLink
