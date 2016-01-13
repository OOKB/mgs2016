import React, { PropTypes } from 'react'
import classnames from 'classnames'

function SlideThumb({ classNames, currentPosition, src, title }) {
  return (
    <li
      className={classnames(classNames)}
    >
      <img
        src={src}
        title={title}
        alt={title}
      />
    </li>
  )
}

SlideThumb.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  currentPosition: PropTypes.number,
  classNames: PropTypes.object,
}

export default SlideThumb
