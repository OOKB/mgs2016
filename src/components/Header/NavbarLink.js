import React from 'react'
import { Link } from 'react-router'

function NavbarLink({ children, className, component, href, to }) {
  const Comp = component || Link
  return href ? <a href={href}>{children}</a> : (
    <Comp to={to} className={className} activeStyle={{ color: '#A94545' }}>
      {children}
    </Comp>
  )
}

export default NavbarLink
