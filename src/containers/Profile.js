import { connect } from 'react-redux'
import partial from 'lodash/function/partial'

import Component from '../components/Profile/Profile'
import { loadProfile } from '../redux/actions'

function mapStateToProps(state, ownProps) {
  const {
    entities: { profile, program },
  } = state
  const { id } = ownProps.params
  const userProfile = profile && profile[id]
  if (userProfile) {
    userProfile.program = program[userProfile.programId]
  }
  return {
    id,
    profile: userProfile,
  }
}

const mapDispatchToProps = {
  loadProfile,
}
function mergeProps({ id, ...stateProps }, dispatchProps, ownProps) {
  const props = {
    loadProfile: partial(dispatchProps.loadProfile, id),
  }
  return Object.assign(props, ownProps, stateProps)
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
