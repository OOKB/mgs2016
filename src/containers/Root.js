import React, { Component, PropTypes } from 'react'
// Component makes Redux store available to the connect() calls in children.
import { Provider } from 'react-redux'

// Will uglify be smart enough to remove this code in prod?
import DevTools from './DevTools'
import App from './App'

const devEnv = process.env.NODE_ENV !== 'production'

export default class Root extends Component {
  render() {
    const { store } = this.props
    // Why do we need a div around Router and DevTools?
    // Provider only wants a single child?
    return (
      <Provider store={store}>
        <div>
          <App />
          { devEnv && <DevTools /> }
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
