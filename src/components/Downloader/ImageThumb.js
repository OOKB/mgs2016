import React, { PropTypes } from 'react'
import get from 'lodash/get'

function ImageThumb({ title, medium, size, year, work }) {
  const imgSrc = get(work, [ 'preview', 'image', 'url' ], false)
  const imgLink = get(work, [ 'url', 'href' ], false)
  return (
    <li className="image two columns">
      <figure className="block">
        { imgSrc && <img src={imgSrc} /> }
        { imgLink && <a href={imgLink}>Download</a> }
        <figcaption>
          <ul className="list-reset">
            { title && <li>{title}</li> }
            { medium && <li>{medium}</li> }
            { year && <li>{year}</li> }
            { size && <li>{size}</li> }
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}

ImageThumb.propTypes = {
  title: PropTypes.string,
  medium: PropTypes.string,
  size: PropTypes.string,
  year: PropTypes.string,
  work: PropTypes.object,
}
ImageThumb.defaultProps = {
}

export default ImageThumb
