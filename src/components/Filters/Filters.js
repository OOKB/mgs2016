import React, { Component, PropTypes } from 'react'

import FilterOptions from './FilterOptions'

class Filters extends Component {
  // We need to know what filterType is expanded.
  render() {
    const { toggleFilter, filterTypes, groupId, replacePath } = this.props
    return (
      <ul className={`filters-${groupId}`}>
        {
          filterTypes.map(({ value, label, active, options }) => {
            function onClick() {
              toggleFilter(groupId, value)
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
                  <FilterOptions
                    onClick={handleCategoryClick}
                    options={options}
                    replacePath={replacePath}
                  />
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
  filterTypes: PropTypes.array.isRequired,
  groupId: PropTypes.string.isRequired,
  replacePath: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
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
