import React, { PropTypes } from 'react'

function SlideImage({ imgSrc, ImageCaption, file }) {
  return (
    <div className="grouped">
      <div className="active-image">
        <img src={imgSrc} onClick={this.handleClick} alt="art" />
      </div>
      <ImageCaption img={file} />
    </div>
  )
}

SlideImage.PropTypes = {
  imgSrc: PropTypes.object.isRequired,
  ImageCaption: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
}

export default SlideImage
