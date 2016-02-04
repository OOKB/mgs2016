import { connect } from 'react-redux'
import get from 'lodash/get'

import Search from '../components/Header/Search'

import { handleFilter } from '../redux/modules/filters'

function mapStateToProps(state, ownProps) {
  const { type, field } = ownProps
  return {
    searchValue: get(state, [ 'filters', type, field, 'value' ]),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { type, field } = ownProps
  function handleChange(value) {
    return dispatch(handleFilter(type, field, 'includes', value))
  }
  return {
    onChange: handleChange,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
