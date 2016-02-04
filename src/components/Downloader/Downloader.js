import React, { PropTypes } from 'react'

import Student from './Student'
import Search from '../../containers/Search'

function Downloader({ title, students }) {
  return (
    <div className="container ">
      <h1>{ title }</h1>
      <Search type="profile" field="name.display" />
      <div className="group">
        <ul className="students-list list-reset">
          {
            students.map(student => <Student key={student.id} {...student} />)
          }
        </ul>
      </div>
    </div>
  )
}

Downloader.propTypes = {
  title: PropTypes.string,
  students: PropTypes.array.isRequired,
}
Downloader.defaultProps = {
  title: 'MICA Grad Show — Image Downloader',
}

export default Downloader
