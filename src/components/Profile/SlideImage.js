import React, { PropTypes } from 'react'
import ImageCaption from './ImageCaption'

function SlideImage({ imgSrc, handleClick, file }) {
  return (
    <div className="grouped">
      <div className="active-image">
        <img src={imgSrc} onClick={handleClick} alt="art" />
      </div>
      <ImageCaption img={file} />
    </div>
  )
}

SlideImage.PropTypes = {
  imgSrc: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
}

export default SlideImage
