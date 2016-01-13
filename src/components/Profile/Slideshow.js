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
    this.slideAdvance = this.slideAdvance.bind(this)
    this.slideRewind = this.slideRewind.bind(this)
  }

  getThumbs(collection) {
    const lastPosition = collection.length - 1
    const { currentPosition } = this.state
    const slides = collection.map((item, index) => {
      const { work } = item
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
        let handleClick
        if (index < currentPosition || (currentPosition === 0 && index === lastPosition)) {
          handleClick = this.slideRewind
        } else if (index > currentPosition) {
          handleClick = this.slideAdvance
        }
        itemElement.push(
          <SlideThumb
            key={imgSrc}
            src={imgSrc}
            title={item.title}
            currentPosition={currentPosition}
            handleClick={handleClick}
            classNames={{
              first: index === 0,
              last: index === lastPosition,
              active: index === currentPosition,
            }}
          />
        )
      }
      return itemElement
    })
    // If our current position is the 0th slide, we need to move the last
    // element to the front of the array
    if (currentPosition === 0) {
      const lastSlide = slides.pop()
      slides.unshift(lastSlide)
    }
    return slides
  }

  slideAdvance() {
    const { currentPosition } = this.state
    console.log("yo")
    this.setState({
      currentPosition: currentPosition + 1,
    })
  }

  slideRewind() {
    const { currentPosition } = this.state
    this.setState({
      currentPosition: currentPosition - 1,
    })
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
