import React, { Component, PropTypes } from 'react'
import { Link, Navigation } from 'react-router'
import classnames from 'classnames'

import SlideThumb from './SlideThumb'
import SlideImage from './SlideImage'

class Slideshow extends Component {

  getThumbs(collection) {
    const lastPosition = collection.length - 1
    return collection.map((item, index) => {
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
          pos={index}
          classNames={classnames({
            first: index === 0,
            last: index === lastPosition,
            active: true,
          })}
        />
      )
    })
  }

  handleClick(evt) {
    console.log(evt)
    // const { pos, usr } = this.props
    // const position = !pos ? 0 : pos
    // const nextPosition = (position + 1 === usr.files.length) ? 0 : position + 1
    // @replaceWith mixin b.s.
  }

  render() {
    const { user, collection } = this.props

    const thumbEl = this.getThumbs(collection)
    let activeFileEl = ''

    // if (type === 'img') {
    //   const imgSrc = file.largeSrc.replace('#', '%23')
    //   // TODO: make this a component
    //   activeFileEl = (
    //     <SlideImage
    //       imgSrc={imgSrc}
    //       handleClick={this.handleClick}
    //       file={file}
    //     />
    //   )
    // }
    // if (type === 'embed') {
    //   const { html, title, description } = file.oembed
    //   TODO: make this a component
    //   activeFileEl = (
    //     <div className="active-embed">
    //       <div className="slideshow-iframe" dangerouslySetInnerHTML={{ __html: html }} />
    //       <ul className="caption">
    //         <li className="title"><h3>{title}</h3></li>
    //         <li className="description">{description}</li>
    //       </ul>
    //     </div>
    //   )
    // }

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
