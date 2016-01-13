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
    const previousSlides = [
      activeIndex - 1,
      activeIndex - 2,
    ].map((item) => {
      let indexVal = item
      if (item < 0) {
        indexVal = collectionSize + item + 1
      }
      return indexVal
    })
    const nextSlides = [
      activeIndex + 1,
      activeIndex + 2,
    ].map((item) => {
      let indexVal = item
      if (item > collectionSize) {
        indexVal = item % collectionSize
      }
      return indexVal
    })
    return {
      previousSlides,
      nextSlides,
    }
  }

  getThumbs(collection) {
    const lastPosition = collection.length - 1
    const { currentPosition } = this.state
    const viewableSlides = this.getSlideIndices(currentPosition)
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

      if (viewableSlides.previousSlides.indexOf(index) !== -1) {
        itemElement.push(
          <SlideThumb
            key={imgSrc}
            src={imgSrc}
            title={item.title}
            currentPosition={currentPosition}
            handleClick={this.slideRewind}
            classNames={{
              first: index === 0,
              last: index === lastPosition,
              active: index === currentPosition,
            }}
          />
        )
      }
      if (viewableSlides.nextSlides.indexOf(index) !== -1) {
        itemElement.push(
          <SlideThumb
            key={imgSrc}
            src={imgSrc}
            title={item.title}
            currentPosition={currentPosition}
            handleClick={this.slideAdvance}
            classNames={{
              first: index === 0,
              last: index === lastPosition,
              active: index === currentPosition,
            }}
          />
        )
      }
      if (index === currentPosition) {
        <SlideThumb
          key={imgSrc}
          src={imgSrc}
          title={item.title}
          currentPosition={currentPosition}
          classNames={{
            first: index === 0,
            last: index === lastPosition,
            active: index === currentPosition,
          }}
        />
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
    let newPosition = currentPosition + 1
    if (newPosition > collection.length - 1) {
      newPosition = 0
    }
    this.setState({
      currentPosition: newPosition,
    })
  }

  slideRewind() {
    const { currentPosition } = this.state
    const { collection } = this.props
    let newPosition = currentPosition - 1
    if (newPosition < 0) {
      newPosition = collection.length - 1
    }
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
