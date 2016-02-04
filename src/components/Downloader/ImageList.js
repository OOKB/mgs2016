import React, { PropTypes } from 'react'

import ImageThumb from './ImageThumb'

function ImageList({ }) {
  return (
    <ul className="image-list group">
      <ImageThumb />
      <ImageThumb />
      <ImageThumb />
      <ImageThumb />
      <ImageThumb />
      <ImageThumb />
    </ul>
  )
}

ImageList.propTypes = {
}
ImageList.defaultProps = {
}

export default ImageList
