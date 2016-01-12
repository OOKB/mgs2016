import React, { Component, PropTypes } from 'react'

class Toggle extends Component {
  render() {
    const { handleToggle, innerText, menuOpen } = this.props
    const className = menuOpen ? 'toggle close' : 'toggle open'
    return (
      <button onClick={handleToggle} className={className} type="button">
        { innerText }
      </button>
    )
  }
}
Toggle.propTypes = {
  handleToggle: PropTypes.func,
  innerText: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
}
Toggle.defaultProps = {
  innerText: 'Menu',
}
