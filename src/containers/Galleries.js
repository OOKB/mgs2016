import { connect } from 'react-redux'
import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import values from 'lodash/values'

import Galleries from '../components/Galleries/Galleries'
import { update as updateFilterAction } from '../redux/modules/filters'
import { togglePin as togglePinAction } from '../redux/modules/map'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { location, showGroup, show, showLocation },
    filters,
    map,
  } = state
  let centerMap = undefined
  // Show active showGroup locations or curatorial locations.
  // const showGroupId = get(filters, [ 'galleries', 'showGroup', 'option' ], false)
  const groupType = get(filters, [ 'schedule', 'showGroup', 'groupType' ], 'On Campus Exhibition')
  const showGroups = filter(showGroup, { groupType })
  const locations = {}
  forEach(showGroups, showGroupInfo => {
    // Array of show ids.
    forEach(showGroupInfo.show, showId => {
      // Array of showLocation ids.
      forEach(show[showId].showLocation, showLocId => {
        // Array of location ids.
        forEach(showLocation[showLocId].location, locId => {
          const active = map.activePin === locId
          const loc = location[locId]
          if (active) centerMap = loc.geoData.location
          locations[locId] = { ...loc, active }
        })
      })
    })
  })
  // GroupTypes
  function makeFilter(label, value) {
    return {
      active: value === groupType,
      label,
      value,
    }
  }
  const groupTypes = [
    makeFilter('Exhibitions', 'On Campus Exhibition'),
    makeFilter('Single Day Events', 'Single Day'),
    makeFilter('Curatorial Practice Programs', 'City Wide'),
  ]
  return {
    groupTypes,
    locations: values(locations),
    centerMap,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  togglePin: togglePinAction,
  updateFilter: updateFilterAction,
}

function mergeProps(stateProps, { updateFilter, togglePin }, ownProps) {
  // Activate pin, scroll to map, center map on actived pin.
  function activateMapPin(id) {
    return function handleLocationClick() {
      togglePin(id)
    }
  }
  function activateShowType(id) {
    return function handleDateClick() {
      updateFilter('schedule', 'showGroup', 'groupType', id)
    }
  }
  const props = {
    activateMapPin,
    activateShowType,
  }
  return Object.assign(props, ownProps, stateProps)
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Galleries)
