import { connect } from 'react-redux'
import filter from 'lodash/collection/filter'
import get from 'lodash/object/get'
import map from 'lodash/collection/map'
import partial from 'lodash/function/partial'
import pick from 'lodash/object/pick'
import sortBy from 'lodash/collection/sortBy'
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
  const groupType = get(filters, [ 'schedule', 'showGroup', 'option' ], 'On Campus Exhibition')
  // Get all showGroups with groupType.
  let showGroups = filter(showGroup, { groupType })
  showGroups = map(showGroups, (itemInfo) => {
    const { active, receptionStart, receptionEnd, startDate, endDate, ...item } = itemInfo
    const startStr = moment(startDate).format('MMMM Do')
    const endStr = moment(endDate).format('MMMM Do')
    const recStartStr = moment(receptionStart).utcOffset('-0400').format('dddd, MMMM D, h')
    const recEndStr = moment(receptionEnd).utcOffset('-0400').format('hA')

    return {
      ...item,
      dateStr: `${startStr}–${endStr}`,
      active,
      dateRangeId: startDate + '-' + endDate,
      reception: `Reception: ${recStartStr}–${recEndStr}`,
      show: item.show.map(showId => getShow(showId)),
    }
  })
  // sort.
  showGroups = sortBy(showGroups, 'dateRangeId')
  console.log(showGroups)
  return {
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
  function handleLocationClick(value) {
    const scrollOptions = {
      offset: 128, // Compensate for Header
      updateURL: false,
    }
    togglePin(value)
    smoothScroll.animateScroll(null, '#gallery-map-locations', scrollOptions)
  }
  const props = {
    togglePin: handleLocationClick,
    updateFilter: partial(updateFilter, 'schedule', 'showGroup', 'option'),
  }
  return Object.assign(props, ownProps, stateProps)
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
