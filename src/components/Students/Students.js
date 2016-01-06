import React, { Component, PropTypes } from 'react'

import Blurb from './Blurb'
import Student from './Student'
import Filters from '../Filters/Filters'

class Students extends Component {
  render() {
    const { filterTypes, programInfo, students, title } = this.props

    return (
      <article id="students">
        <div className="container">
          <h2>{ title }</h2>

          <Filters filterTypes={filterTypes} />

          { programInfo &&
            <Blurb {...programInfo} />
          }
          { students &&
            <ul className="list-reset group">
              {
                students.map((item) =>
                  <Student key={item.id} {...item} />
                )
              }
            </ul>
          }
        </div>
      </article>
    )
  }
}

Students.propTypes = {
  programInfo: PropTypes.object,
  filterTypes: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

Students.propDefaults = {
  title: 'Students',
}

export default Students
