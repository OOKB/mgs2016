import React, { PropTypes } from 'react'

import Student from './Student'

function Downloader({ title }) {
  return (
    <div className="container ">
      <h1>{ title }</h1>
      <div className="group">
        <ul className="students-list list-reset">
          <Student />
        </ul>
      </div>
    </div>
  )
}

Downloader.propTypes = {
  title: PropTypes.string,
}
Downloader.defaultProps = {
  title: 'MICA Grad Show — Image Downloader',
}

export default Downloader
