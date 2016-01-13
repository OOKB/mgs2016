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

  getSlideIndices(activeIndex) {
    const collectionSize = this.props.collection.length - 1
    previousSlides =
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
          Math.abs(index - currentPosition) === 2 ||
          (currentPosition === 0 && (Math.abs(index === lastPosition)) ||
          (currentPosition === lastPosition && (index === 0))) {
        let handleClick
        // If we are on the last slide, the 0th slide needs to advance
        if (currentPosition === lastPosition && index === 0) {
          handleClick = this.slideAdvance
        // If the slide index is less than the position slide should rewind
        // OR if we're on the 0th slide, the last indexed slide should rewind
        } else if (index < currentPosition || (currentPosition === 0 && index === lastPosition)) {
          handleClick = this.slideRewind
        // If the index is greater than the current position should advance
        // Or when the last slide is displayed, the 0th element should advance
        } else if (index > currentPosition || (currentPosition === lastPosition && index === 0)) {
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
    // If we're on the last slide, the 0th slide needs to be moved to the end
    if (currentPosition === lastPosition) {
      const firstSlide = slides.shift()
      slides.push(firstSlide)
    }
    return slides
  }

  slideAdvance() {
    const { currentPosition } = this.state
    const { collection } = this.props
    let newPosition = currentPosition + 1 % (collection - 1)
    this.setState({
      currentPosition: newPosition,
    })
  }

  slideRewind() {
    const { currentPosition } = this.state
    const { collection } = this.props
    let newPosition = Math.abs(currentPosition - 1 % (collection - 1))
    this.setState({
      currentPosition: newPosition,
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
