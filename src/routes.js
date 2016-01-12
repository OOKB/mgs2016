import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
    App,
    Main,
    Profile,
  } from './containers'

/**
 * Please keep routes in alphabetical order
 */
export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="student/:id" component={ Profile } />
    </Route>
  )
}
