import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Credits extends Component {
  render() {
    const { builtDesigned } = this.props
    const length = builtDesigned.length
    const lastIndex = length - 1
    const className = `credits count-${length}`
    const Links = builtDesigned.map((linkItem, index) => {
      const { title, src } = linkItem
      const isFirstEl = (index === 0)
      const isLastEl = (index === lastIndex)
      const linkClasses = classNames({
        credit: true,
        first: isFirstEl,
        last: isLastEl,
      })
      let seperator
      if (!isFirstEl && !isLastEl) {
        seperator = ', '
      } else if (isLastEl) {
        seperator = ', and '
      }
      return (
        <span key={title} className={linkClasses}>
          {seperator}<a href={src} title={title} target="_blank">{title}</a>
        </span>
      )
    })
    return (
      <div>
        <p className={className}>
          Built and designed by: {Links}.
        </p>
      </div>
    )
  }
}
Credits.propTypes = {
  builtDesigned: PropTypes.array,
}
