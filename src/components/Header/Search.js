import React, { PropTypes } from 'react'

function Search({ onChange, ...props }) {
  function handleChange(event) {
    return onChange(event.target.value)
  }
  return (
    <div role="form" className="form-group search">
      <input
        className="form-control"
        name="item-search"
        onChange={handleChange}
        placeholder="Search by name"
        type="text"
        {...props}
      />
    </div>
  )
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
Search.defaultProps = {
}

export default Search
