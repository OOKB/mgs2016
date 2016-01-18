import { connect } from 'react-redux'
import find from 'lodash/collection/find'
import forEach from 'lodash/collection/forEach'
import get from 'lodash/object/get'

import Galleries from '../components/Galleries/Galleries'
import { update as updateFilterAction } from '../redux/modules/filters'
import { togglePin } from '../redux/modules/map'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { location, showGroup, show, showLocation },
    filters,
    map,
  } = state
  // Show active showGroup locations or curatorial locations.
  const showGroupId = get(filters, [ 'galleries', 'showGroup', 'option' ], false)
  const showGroupInfo = showGroupId ? showGroup[showGroupId] : find(showGroup, 'active')
  const locations = []
  // Array of show ids.
  forEach(showGroupInfo.show, showId => {
    // Array of showLocation ids.
    forEach(show[showId].showLocation, showLocId => {
      // Array of location ids.
      forEach(showLocation[showLocId].location, locId => {
        locations.push({
          ...location[locId],
          active: map.activePin === locId,
        })
      })
    })
  })
  // console.log('locs', locations)
  return {
    locations,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  togglePin,
  updateFilter: updateFilterAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Galleries)
