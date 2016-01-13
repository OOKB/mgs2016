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
      activeIndex - 2,
      activeIndex - 1,
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
    // Add the slides that should appear before the active slide
    let slides = viewableSlides.previousSlides.map((slideIndex) => {
      const item = collection[slideIndex]
      const { work } = item
      let imgSrc = ''
      // work is sometimes undefined. check for info in work.url and set the
      // image source.
      if (work) {
        if (work.url) {
          imgSrc = work.url.href
        }
      }
      return (
        <SlideThumb
          key={imgSrc}
          src={imgSrc}
          title={item.title}
          currentPosition={currentPosition}
          handleClick={this.slideRewind}
          classNames={{
            first: slideIndex === 0,
            last: slideIndex === lastPosition,
          }}
        />
      )
    })
    // Add the active slide
    const currentItem = collection[currentPosition]
    let imgSrc = ''
    if (currentItem.work) {
      if (currentItem.work.url) {
        imgSrc = currentItem.work.url.href
      }
    }
    slides.push(
      <SlideThumb
        key={imgSrc}
        src={imgSrc}
        title={currentItem.title}
        currentPosition={currentPosition}
        classNames={{
          first: currentPosition === 0,
          last: currentPosition === lastPosition,
          active: true,
        }}
      />
    )
    // Add the slides that should appear before the active slide
    slides = slides.concat(
      viewableSlides.nextSlides.map((slideIndex) => {
        const item = collection[slideIndex]
        const { work } = item
        let imgSrc = ''
        // work is sometimes undefined. check for info in work.url and set the
        // image source.
        if (work) {
          if (work.url) {
            imgSrc = work.url.href
          }
        }
        return (
          <SlideThumb
            key={imgSrc}
            src={imgSrc}
            title={item.title}
            currentPosition={currentPosition}
            handleClick={this.slideAdvance}
            classNames={{
              first: slideIndex === 0,
              last: slideIndex === lastPosition,
            }}
          />
        )
      })
    )
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
