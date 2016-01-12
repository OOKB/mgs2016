import { connect } from 'react-redux'

import Component from '../components/Profile/Profile'

function mapStateToProps(state, ownProps) {
  const {
    entities: { profile },
  } = state
  const { id } = ownProps.params
  return {
    profile: profile && profile[id],
  }
}

// const mapDispatchToProps = {
// }

export default connect(mapStateToProps)(Component)
