import React, { Component, PropTypes } from 'react'

function ImageThumb({ }) {
  return (
    <li className="image two columns">
      <figure className="block">
        <img src="" />
        <a href="">Download</a>
        <figcaption>
          <ul>
            <li>Title</li>
            <li>medium...</li>
            <li>year</li>
            <li>size</li>
          </ul>
        </figcaption
      </figure>
    </li>
  )
}

ImageThumb.propTypes = {
}
ImageThumb.defaultProps = {
}

export default ImageThumb
