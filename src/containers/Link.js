import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateLocation } from '../redux/history'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  const { href, to, hash } = ownProps
  function handleClick(event) {
    event.preventDefault()
    return dispatch(updateLocation({
      pathname: href || to,
      hash,
    }))
  }
  return {
    onClick: handleClick,
  }
}

function Anchor({ onClick, ...props }) {
  return <a onClick={onClick} {...props} />
}
Anchor.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Anchor)
