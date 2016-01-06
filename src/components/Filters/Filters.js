import React, { Component, PropTypes } from 'react'

class Filters extends Component {
  // We need to know what filterType is expanded.
  render() {
    const { enableFilter, filterTypes, groupId } = this.props
    return (
      <ul className={`filters-${groupId}`}>
        {
          filterTypes.map((option) => {
            const onClick = () => {
              enableFilter(groupId, option.value)
            }
            return (
              <li key={option.value} className={option.value}>
                <button className="filter" onClick={onClick}>
                  <span>{ option.label }</span>
                </button>
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
