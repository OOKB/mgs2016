import { connect } from 'react-redux'
import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'
import pick from 'lodash/pick'
import sortBy from 'lodash/sortBy'
import moment from 'moment'

import Component from '../components/Schedule/Schedule'
import { togglePin as togglePinAction } from '../redux/modules/map'
import { update as updateFilterAction } from '../redux/modules/filters'
import smoothScroll from 'smooth-scroll'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { show, showGroup, program, showLocation, location },
    filters,
  } = state
  // Turn showLoc into information about the location.
  function getShowLoc(showLocId) {
    const showLoc = showLocation[showLocId]
    const loc = location[showLoc.location[0]]
    return pick(loc, 'id', 'name')
  }
  function getShow(showId) {
    const showInfo = show[showId]
    const programInfo = program[showInfo.program[0]]
    const showLoc = showInfo.showLocation ? showInfo.showLocation : []
    return {
      id: showId,
      name: showInfo.name,
      program: pick(programInfo, 'id', 'name'),
      locations: showLoc.map(showLocId => getShowLoc(showLocId)),
    }
  }
  // Filters we need.
  const groupType = get(filters, [ 'schedule', 'showGroup', 'groupType' ], 'On Campus Exhibition')
  const activeGroupId = get(filters, [ 'schedule', 'showGroup', 'active' ], false)

  // Get all showGroups with groupType.
  let showGroups = filter(showGroup, { groupType })
  showGroups = map(showGroups, (itemInfo) => {
    const { active, id, receptionStart, receptionEnd, startDate, endDate, ...item } = itemInfo
    const startStr = moment(startDate).format('MMMM Do')
    const endStr = moment(endDate).format('MMMM Do')
    const recStartStr = moment(receptionStart).format('dddd, MMMM D, h')
    const recEndStr = moment(receptionEnd).format('hA')

    return {
      ...item,
      dateStr: `${startStr}–${endStr}`,
      active: activeGroupId ? activeGroupId === id : active,
      dateRangeId: startDate + '-' + endDate,
      id,
      reception: `Reception: ${recStartStr}–${recEndStr}`,
      show: item.show.map(showId => getShow(showId)),
    }
  })
  // sort.
  showGroups = sortBy(showGroups, 'dateRangeId')
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
    showGroups,
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
      const scrollOptions = {
        offset: 128, // Compensate for Header
        updateURL: false,
      }
      smoothScroll.animateScroll('#gallery-map-locations', null, scrollOptions)
    }
  }
  function activateShowGroup(id) {
    return function handleDateClick() {
      updateFilter('schedule', 'showGroup', 'active', id)
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
    activateShowGroup,
  }
  return Object.assign(props, ownProps, stateProps)
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
