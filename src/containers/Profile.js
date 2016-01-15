import { connect } from 'react-redux'
import partial from 'lodash/function/partial'
import compact from 'lodash/array/compact'
import clone from 'lodash/lang/clone'
import Component from '../components/Profile/Profile'
import { loadProfile } from '../redux/actions'

function mapStateToProps(state, ownProps) {
  const {
    entities: { profile, url, program, profileId },
  } = state

  const { id } = ownProps.params
  const profileInfo = (profile && profile[id]) || { id, name: {} }
  const { art, website, ...profileFields } = profileInfo
  // Create new object.
  const userProfile = {
    ...profileFields,
    program: profileFields.program ? clone(program[profileFields.program]) : undefined,
    art: art ? art.map(({ work, ...rest }) => ({ ...rest, work: url[work] })) : undefined,
    website: website ? url[website] : undefined,
  }
  userProfile.program.student = compact(userProfile.program.student.map(student => {
    const peerId = profileId && profileId[student]
    const peer = peerId && profile[peerId]
    if (!peer || peerId === id) return null
    // console.log('peer', id, peerId, peer)
    return {
      name: peer.name,
      id: peer.id,
    }
  }))
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
