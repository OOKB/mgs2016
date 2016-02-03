import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

import { loadProfiles, resetErrorMessage } from '../redux/actions'
import Loading from '../components/Loading'

import Downloader from './Downloader'
import Main from '../components/Main'
import Profile from './Profile'

const routeIndex = {
  downloader: Downloader,
  home: Main,
  profile: Profile,
}

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
    const { hash, hasProfile, routeId } = this.props
    const MainElement = routeIndex[routeId]
    return (
      <div className="mgs">
        { this.renderErrorMessage() }
        { hasProfile &&
          <MainElement hash={hash}/>
        }
        { !hasProfile &&
          <Loading message="Loading artist information..." />
        }
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  loadProfiles: PropTypes.func.isRequired,
  hash: PropTypes.string,
  hasProfile: PropTypes.bool.isRequired,
  resetErrorMessage: PropTypes.func.isRequired,
  // Injected by React Router
  routeId: PropTypes.string,
}

function mapStateToProps(state) {
  const {
    entities: { profile },
    errorMessage,
    routing: { routeId, hash },
  } = state
  return {
    hasProfile: !!profile && !isEmpty(profile),
    errorMessage,
    hash,
    routeId,
  }
}

const mapDispatchToProps = {
  loadProfiles,
  resetErrorMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
