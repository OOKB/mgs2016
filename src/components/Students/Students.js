import React, { Component, PropTypes } from 'react'

import Blurb from './Blurb'
import Student from './Student'
import Filters from '../filters/filters'

class Students extends Component {
  render() {
    const { locations, programInfo, programs, students, title } = this.props
    return (
      <article id="students">
        <div className="container">
          <h2>{ title }</h2>
          <Filters locations={locations} programs={programs} />
          { programInfo &&
            <Blurb {...programInfo} />
          }
          <ul id="projects" className="list">
            {
              students.map((item) =>
                <Student model={item} key={item.uid} />
              )
            }
          </ul>
        </div>
      </article>
    )
  }
}

Students.propTypes = {
  locations: PropTypes.array.isRequired,
  programInfo: PropTypes.object,
  programs: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

Students.propDefaults = {
  title: 'Students',
  students: [],
}

export default Students
