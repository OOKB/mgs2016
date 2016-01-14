import React, { PropTypes } from 'react'

function slideNavigation({ slideAdvance, slideRewind }) {
  return (
    <ul className="thumbs-navigation">
      <li>
        <button onClick={slideRewind}>
          Previous button!
        </button>
      </li>
      <li>
        <button onClick={slideAdvance}>
          Next button!
        </button>
      </li>
    </ul>
  )
}

slideNavigation.propTypes = {
  slideAdvance: PropTypes.func,
  slideRewind: PropTypes.func,
}
slideNavigation.defaultProps = {
}

export default slideNavigation
