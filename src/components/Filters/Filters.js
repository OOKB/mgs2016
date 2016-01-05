import React, { Component, PropTypes } from 'react'

class Filters extends Component {
  render() {
    const { filterOptions } = this.props
    return (
      <ul className="student-filters">
        {
          filterOptions.map((option) => (
            <li key={option.value} className={option.value}>
              <button className="filter">
                <span>{ option.label }</span>
              </button>
            </li>
          ))
        }
      </ul>
    )
  }
}

Filters.propTypes = {
  filterOptions: PropTypes.array.isRequired,
}

Filters.defaultProps = {
  filterOptions: [
    { value: 'programs', label: 'Program' },
    { value: 'galleries', label: 'Gallery' },
    { value: 'dates', label: 'Show Date' },
  ],
}

export default Filters
