import React, { PropTypes } from 'react'
import classnames from 'classnames'

function SlideThumb({ classNames, src, title, handleClick }) {
  return (
    <li
      className={classnames(classNames)}
      style={
        /* Remove these inline styles. Mockup only */
        {
          display: 'inline-block',
        }
      }
    >
      <img
        src={src}
        title={title}
        alt={title}
        style={
          /* Remove these inline styles. Mockup only */
          {
            maxWidth: '200px',
            height: 'auto',
          }
        }
        onClick={handleClick}
      />
    </li>
  )
}

SlideThumb.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.object,
  handleClick: PropTypes.func,
}

export default SlideThumb
