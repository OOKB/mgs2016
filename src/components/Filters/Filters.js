import React, { Component, PropTypes } from 'react'
// import partial from 'lodash/function/partial'

import FilterOptions from './FilterOptions'

class Filters extends Component {
  // We need to know what filterType is expanded.
  render() {
    const { groupId, update, toggle, types } = this.props
    return (
      <ul className={`filters-${groupId}`}>
        {
          types.map(({ value, label, active, options }) => {
            function handleClick() {
              toggle(groupId, value)
            }
            function handleCategoryClick(optId) {
              return update(groupId, value, 'option', optId)
            }
            return (
              <li key={value} className={value}>
                <button className="filter" onClick={handleClick}>
                  <span>{ label }</span>
                </button>
                { active &&
                  <FilterOptions
                    onClick={handleCategoryClick}
                    options={options}
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
  types: PropTypes.array.isRequired,
  groupId: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
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
