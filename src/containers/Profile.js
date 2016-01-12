import { connect } from 'react-redux'
import partial from 'lodash/function/partial'

import Component from '../components/Profile/Profile'
import { loadProfile } from '../redux/actions'

function mapStateToProps(state, ownProps) {
  const {
    entities: { profile, program, url },
  } = state
  const { id } = ownProps.params
  const profileInfo = (profile && profile[id]) || {}
  const { programId, art, social, ...profileFields } = profileInfo
  // Create new object.
  const userProfile = {
    ...profileFields,
    program: program[programId],
    art: art ? art.map(({ work, ...rest }) => ({ ...rest, work: url[work] })) : null,
    social,
  }

  if (social && social.website) {
    userProfile.social.website = url[social.website]
  }

  console.log(userProfile)
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
