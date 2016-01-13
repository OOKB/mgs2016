import React, { Component, PropTypes } from 'react'
import { Link, Navigation } from 'react-router'
import classnames from 'classnames'

import SlideThumb from './SlideThumb'
import SlideImage from './SlideImage'

class Slideshow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 0,
    }
  }

  getThumbs(collection) {
    const lastPosition = collection.length - 1
    return collection.map((item, index) => {
      const { work } = item
      const { currentPosition } = this.state
      const itemElement = []

      let imgSrc = ''
      // work is sometimes undefined. check for info in work.url and set the
      // image source.
      if (work) {
        if (work.url) {
          imgSrc = work.url.href
        }
      }

      // Include currentPosition index, plus or minus 1, and wrap end and
      // beginning
      if (index === currentPosition ||
          Math.abs(index - currentPosition) === 1 ||
          (currentPosition === 0 && (index === lastPosition)) ||
          (currentPosition === lastPosition && (index === 0))) {
        itemElement.push(
          <SlideThumb
            key={imgSrc}
            src={imgSrc}
            title={item.title}
            currentPosition={currentPosition}
            classNames={classnames({
              first: index === 0,
              last: index === lastPosition,
              active: index === currentPosition,
            })}
          />
        )
      }
      return itemElement
    })
  }

  handleClick(evt) {
    console.log(evt)
  }

  render() {
    const { user, collection } = this.props

    const thumbEl = this.getThumbs(collection)
    let activeFileEl = ''

    return (
      <div id="slideshow">
        {activeFileEl}
        <ul className="thumbs">
          {thumbEl}
        </ul>
      </div>
    )
  }

}

// TODO: real proptypes
Slideshow.propTypes = {
  user: PropTypes.object,
  collection: PropTypes.array,
}
Slideshow.defaultProps = {
}

export default Slideshow
