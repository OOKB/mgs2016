import React, { PropTypes } from 'react'

import ImageThumb from './ImageThumb'

function ImageList({ }) {
  return (
    <ul className="image-list group">
      <ImageThumb />
    </ul>
  )
}

ImageList.propTypes = {
}
ImageList.defaultProps = {
}

export default ImageList
