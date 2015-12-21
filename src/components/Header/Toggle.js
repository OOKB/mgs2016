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
Header.propTypes = {
  handleToggle: PropTypes.func,
  innerText: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
}
Header.defaultProps = {
  innerText: 'Menu',
}
