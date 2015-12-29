import React, { Component, PropTypes } from 'react'

class Filters extends Component {
  render() {
    const { filterOptions } = this.props
    return (
      <ul className="student-filters">
        {
          filterOptions.map((option) => (
            <li key={option.id} className={option.id}>
              <button className="filter">
                <span>{ option.name }</span>
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
    { id: 'programs', name: 'Program' },
    { id: 'galleries', name: 'Gallery' },
    { id: 'dates', name: 'Show Date' },
  ],
}

export default Filters
