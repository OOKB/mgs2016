import React, { Component, PropTypes } from 'react'
import classname from 'classname'

export default class Credits extends Component {
  render() {
    const { builtDesigned } = this.props
    const length = builtDesigned.length
    const lastI = length - 1
    const Links = builtDesigned.map((link, index) => {
      const { name, link } = link
      const first = (index === 0)
      const last = (index === lastI)
      const linkClasses = classname({
        credit: true,
        first,
        last,
      })
      let seperator
      if (lastI > index > 0) {
        seperator = ', '
      } else if (lastI === index) {
        seperator = ' and '
      }
      return (
        <span key={name} className={linkClasses}>
          {seperator}<a href={link} title={name} target="_blank">{name}</a>
        </span>
      )
    })
    return (
      {Links}
      <p className={className}>
        Built and designed by {Links}.
      </p>
    )
  }
}
Credits.propTypes = {
  builtDesigned: PropTypes.array,
}
