import React, { Component, PropTypes } from 'react'

import Blurb from './Blurb'
import Student from './Student'
import Filters from '../Filters/Filters'

class Students extends Component {
  render() {
    const { filterInfo, programInfo, students, updateDisplay } = this.props

    return (
      <article id="students">
        <div className="container">

          <Filters {...filterInfo} groupId="students" />

          { programInfo &&
            <Blurb {...programInfo} />
          }
          { students &&
            <ul className="list-reset group">
              {
                students.map((item) => {
                  function handleHover() {
                    updateDisplay([ 'profile', item.id, 'hover' ], true)
                  }
                  function handleLeave() {
                    updateDisplay([ 'profile', item.id, 'hover' ], false)
                  }
                  return (
                    <Student
                      key={item.id}
                      {...item}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                    />
                  )
                })
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
  filterInfo: PropTypes.object.isRequired,
  students: PropTypes.array.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

Students.defaultProps = {
}

export default Students
