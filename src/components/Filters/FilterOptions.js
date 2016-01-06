import React, { Component, PropTypes } from 'react'

class Filters extends Component {
  render() {
    const { options } = this.props
    return (
      <ul className="student-filters">
        {
          options.map(({ value, label }) => (
            <li key={value} className={value}>
              <button className="filter">
                <span>{ label }</span>
              </button>
            </li>
          ))
        }
      </ul>
    )
  }
}

Filters.propTypes = {
  options: PropTypes.array.isRequired,
}

Filters.defaultProps = {
  options: [
    { value: 'programs', label: 'Program' },
    { value: 'galleries', label: 'Gallery' },
    { value: 'dates', label: 'Show Date' },
  ],
}

export default Filters
