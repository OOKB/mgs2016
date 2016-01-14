import { connect } from 'react-redux'
import filter from 'lodash/collection/filter'
import groupBy from 'lodash/collection/groupBy'
import map from 'lodash/collection/map'

import Component from '../components/Schedule/Schedule'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { show, showGroup, program, showLocation, location },
  } = state
  let shows = map(show, (item) => {
    const showLocations = item.showLocation && item.showLocation.map(showLoc => {
      const value = showLocation[showLoc]
      value.location = location[value.location[0]]
      return value
    })
    return {
      ...item,
      showGroup: showGroup[item.showGroup[0]],
      program: program[item.program[0]],
      showLocation: showLocations,
    }
  })
  shows = filter(shows, (item) => item.showGroup.groupType === 'On Campus Exhibition')
  shows = groupBy(shows, (item) => item.startDate + '-' + item.endDate)
  // console.log(shows)
  shows = map(shows, (items, dateRangeId) => ({
    active: false,
    dateRangeId,
    items,
    startDate: items[0].startDate,
    endDate: items[0].endDate,
  }))
  // Hack to get the first thing to be "active".
  shows[0].active = true
  return {
    shows,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// const mapDispatchToProps = {
// }

export default connect(mapStateToProps)(Component)
