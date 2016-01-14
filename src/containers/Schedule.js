import { connect } from 'react-redux'
import filter from 'lodash/collection/filter'

import Component from '../components/Schedule/Schedule'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { show, showGroup },
  } = state

  return {
    shows: filter(show, (item) => item.groupType === 'On Campus Exhibition')
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
