import React, { PropTypes } from 'react'

import ImageThumb from './ImageThumb'

function ImageList({ art }) {
  return (
    <ul className="image-list group">
      {
        art.map(item => <ImageThumb {...item} />)
      }
    </ul>
  )
}

ImageList.propTypes = {
  art: PropTypes.array.isRequired,
}
ImageList.defaultProps = {
}

export default ImageList
