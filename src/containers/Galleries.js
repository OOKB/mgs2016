import { connect } from 'react-redux'
import Galleries from '../components/Galleries/Galleries'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { locations },
  } = state

  return {
    locations,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// const mapDispatchToProps = {
//   loadProfiles,
// }

export default connect(mapStateToProps)(Galleries)
