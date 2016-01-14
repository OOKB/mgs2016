import { connect } from 'react-redux'
import filter from 'lodash/collection/filter'
import groupBy from 'lodash/collection/groupBy'
import map from 'lodash/collection/map'

import Component from '../components/Schedule/Schedule'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { show, showGroup },
  } = state
  let shows = map(show, (item) => {
    const itemShowGroup = showGroup[item.showGroup[0]]
    return { ...item, showGroup: itemShowGroup }
  })
  shows = filter(shows, (item) => item.showGroup.groupType === 'On Campus Exhibition')
  shows = groupBy(shows, (item) => item.startDate + '-' + item.endDate)
  // console.log(shows)
  shows = map(shows, (items, dateRangeId) => ({
    dateRangeId,
    items,
    startDate: items[0].startDate,
    endDate: items[0].endDate,
  }))
  return {
    shows,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// const mapDispatchToProps = {
// }

export default connect(mapStateToProps)(Component)
