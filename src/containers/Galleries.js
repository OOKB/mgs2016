import { connect } from 'react-redux'
import filter from 'lodash/collection/filter'

import Galleries from '../components/Galleries/Galleries'

import { togglePin } from '../redux/modules/map'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { location },
    map,
  } = state

  return {
    locations: filter(location, (loc) => loc.geoData)
      .map(loc => {
        loc.active = map.activePin === loc.value
        return loc
      }),
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  togglePin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Galleries)
