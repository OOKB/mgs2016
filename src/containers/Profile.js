import { connect } from 'react-redux'
import partial from 'lodash/partial'
import compact from 'lodash/compact'
import clone from 'lodash/clone'
import { updateLocation } from '../redux/history'

import Component from '../components/Profile/Profile'
import { loadProfile as loadProfileAction } from '../redux/actions'

function mapStateToProps(state) {
  const {
    entities: { profile, url, program, profileId },
    routing: { params: { id } },
  } = state

  const profileInfo = (profile && profile[id]) || { id, name: {} }
  const { art, website, ...profileFields } = profileInfo
  // Create new object.
  const userProfile = {
    ...profileFields,
    program: profileFields.program ? clone(program[profileFields.program]) : undefined,
    art: art ? art.map(({ work, ...rest }) => ({ ...rest, work: url[work] })) : undefined,
    website: website ? url[website] : undefined,
  }
  if (userProfile.program) {
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
  }
  console.log(userProfile)
  return {
    id,
    profile: userProfile,
  }
}

const mapDispatchToProps = {
  loadProfile: loadProfileAction,
  replacePath: updateLocation,
}

function mergeProps({ id, ...stateProps }, { loadProfile, replacePath }, ownProps) {
  function closePopup() {
    replacePath('/#students')
  }
  const props = {
    closePopup,
    loadProfile: partial(loadProfile, id),
  }
  return Object.assign(props, ownProps, stateProps)
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
