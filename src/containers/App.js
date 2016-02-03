import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'
import isEmpty from 'lodash/isEmpty'

import { loadProfiles, resetErrorMessage } from '../redux/actions'
import Loading from '../components/Loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  componentWillMount() {
    this.props.loadProfiles()
  }

  handleDismissClick(err) {
    this.props.resetErrorMessage()
    err.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (
          <a href="#" onClick={this.handleDismissClick}>
            Dismiss
          </a>
        )
      </p>
    )
  }

  render() {
    const { children, hasProfile } = this.props
    return (
      <div className="mgs">
        { this.renderErrorMessage() }
        { hasProfile ? children : <Loading message="Loading artist information..." /> }
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  loadProfiles: PropTypes.func.isRequired,
  hasProfile: PropTypes.bool.isRequired,
  resetErrorMessage: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node,
}

function mapStateToProps(state) {
  const {
    entities: { profile },
    errorMessage,
  } = state
  return {
    hasProfile: !!profile && !isEmpty(profile),
    errorMessage,
  }
}

const mapDispatchToProps = {
  loadProfiles,
  pushPath,
  resetErrorMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
