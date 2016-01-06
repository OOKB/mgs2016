import React, { Component, PropTypes } from 'react'

import FilterOptions from './FilterOptions'

class Filters extends Component {
  // We need to know what filterType is expanded.
  render() {
    const { enableFilter, filterTypes, groupId } = this.props
    return (
      <ul className={`filters-${groupId}`}>
        {
          filterTypes.map(({ value, label, active, options }) => {
            function onClick() {
              enableFilter(groupId, value)
            }
            function handleCategoryClick() {
              return true
            }
            return (
              <li key={value} className={value}>
                <button className="filter" onClick={onClick}>
                  <span>{ label }</span>
                </button>
                { active &&
                  <FilterOptions onClick={handleCategoryClick} options={options} />
                }
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Filters.propTypes = {
  disableFilter: PropTypes.func.isRequired,
  enableFilter: PropTypes.func.isRequired,
  filterTypes: PropTypes.array.isRequired,
  groupId: PropTypes.string.isRequired,
}

Filters.defaultProps = {
  filterTypes: [
    { value: 'programs', label: 'Program', options: [ { value: 'art', label: 'Art School' } ] },
    { value: 'galleries', label: 'Gallery' },
    { value: 'dates', label: 'Show Date' },
  ],
  groupId: 'profiles',
}

export default Filters
