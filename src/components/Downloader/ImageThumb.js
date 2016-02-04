import React, { PropTypes } from 'react'

function ImageThumb({ }) {
  return (
    <li className="image two columns">
      <figure className="block">
        <img src="https://source.unsplash.com/random/200x200" />
        <a href="">Download</a>
        <figcaption>
          <ul className="list-reset">
            <li>Title</li>
            <li>medium...</li>
            <li>year</li>
            <li>size</li>
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}

ImageThumb.propTypes = {
}
ImageThumb.defaultProps = {
}

export default ImageThumb
