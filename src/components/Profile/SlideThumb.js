import React, { PropTypes } from 'react'
import classnames from 'classnames'

function SlideThumb({ classNames, src, title, handleClick, unprotectedHtml }) {
  return (
    <li
      className={classnames(classNames)}
    >
      { unprotectedHtml ?
          <div
            dangerouslySetInnerHTML={{ __html: unprotectedHtml }}
          />
        :
          <img
            src={src + '?w=1200'}
            title={title}
            alt={title}
            onClick={handleClick}
          />
      }
    </li>
  )
}

SlideThumb.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.object,
  handleClick: PropTypes.func,
  unprotectedHtml: PropTypes.string,
}

export default SlideThumb
