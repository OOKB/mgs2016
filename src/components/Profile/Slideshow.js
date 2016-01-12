import React, { Component, PropTypes } from 'react'
import { Link, Navigation } from 'react-router'
import classnames from 'classnames'

import SlideThumb from './SlideThumb'
import SlideImage from './SlideImage'

class Slideshow extends Component {

  getThumbs(collectionType, collection) {
    const { pos, type, usr } = this.props
    const { uid } = usr
    const lastPosition = collection.length - 1
    return collection.map((item, index) => {
      const { fileName, thumbSrc, metadata } = item
      return (
        <SlideThumb
          key={fileName}
          src={thumbSrc}
          title={metadata.title}
          pos={index}
          uid={uid}
          type={collectionType}
          classNames={classnames({
            first: index === 0,
            last: index === lastPosition,
            active: index === pos && type === collectionType,
          })}
        />
      )
    })
  }

  handleClick() {
    const { pos, usr } = this.props
    const position = !pos ? 0 : pos
    const nextPosition = (position + 1 === usr.files.length) ? 0 : position + 1
    // @replaceWith mixin b.s.
  }

  render() {
    const { usr, file, type } = this.props
    const { files, embeds } = usr
    let thumbEl = []
    let activeFileEl = ''

    if (files && files.length > 0) {
      thumbEl = thumbEl.concat(this.getThumbs('img', files))
    }
    if (embeds && embeds.length > 0) {
      thumbEl = thumbEl.concat(this.getThumbs('embed', files))
    }

    if (type === 'img') {
      const imgSrc = file.largeSrc.replace('#', '%23')
      // TODO: make this a component
      activeFileEl = (
        <SlideImage
          imgSrc={imgSrc}
          handleClick={this.handleClick}
          file={file}
        />
      )
    }
    if (type === 'embed') {
      const { html, title, description } = file.oembed
      // TODO: make this a component
      activeFileEl = (
        <div className="active-embed">
          <div className="slideshow-iframe" dangerouslySetInnerHTML={{ __html: html }} />
          <ul className="caption">
            <li className="title"><h3>{title}</h3></li>
            <li className="description">{description}</li>
          </ul>
        </div>
      )
    }

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
  usr: PropTypes.any,
  file: PropTypes.any,
  pos: PropTypes.any,
  type: PropTypes.any,
}
Slideshow.defaultProps = {
}

export default Slideshow
