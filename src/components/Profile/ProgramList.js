import React, { PropTypes } from 'react'

import { Link } from 'react-router'

function ProgramList({ peers, programName }) {
  return (
    <aside className="program-list">
      <h3>{programName}</h3>
      <ul className="program-peers">
        {/* TODO KAI: Insert new peers mixinless code here */}
      </ul>
    </aside>
  )
}

ProgramList.propTypes = {
  peers: PropTypes.array,
  programName: PropTypes.string,
}
ProgramList.defaultProps = {
}

export default ProgramList
