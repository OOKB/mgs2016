import { connect } from 'react-redux'
import Component from '../components/Downloader/Downloader'

import select from '../redux/select'

function mapStateToProps(state) {
  const students = select(state, 'profile', {
    pick: [ 'id', 'name.display', 'program.name', 'art.work' ],
  })

  return {
    students,
  }
}

export default connect(mapStateToProps)(Component)
