import { connect } from 'react-redux'

import Component from '../components/Profile/Profile'

function mapStateToProps(state, ownProps) {
  const {
    entities: { profile },
  } = state
  // const { } = ownProps.location
  return {
    profile
  }
}

// const mapDispatchToProps = {
// }

export default connect(mapStateToProps)(Component)
