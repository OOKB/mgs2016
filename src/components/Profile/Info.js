import React, { PropTypes } from 'react'

import Details from './Details'
// import StudentNav from './StudentNav'
import ProgramList from './ProgramList'

function Info({ user }) {
  return (
    <div className="student-info container">
      {/* <StudentNav user={user} /> */}
      <Details user={user} />
      <ProgramList {...user} />
    </div>
  )
}

Info.PropTypes = {
  user: PropTypes.object.isRequired,
}

export default Info
