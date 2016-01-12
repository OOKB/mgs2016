import { connect } from 'react-redux'
import get from 'lodash/object/get'
import partial from 'lodash/function/partial'

import Component from '../components/Header/Header'

import { handleSearch } from '../redux/modules/filters'

const entityFieldId = 'name.display'
const entityId = 'profile'

function mapStateToProps(state) {
  const {
    filters: { profile },
  } = state
  const searchString = get(profile, [ entityFieldId, 'value' ])
  return {
    searchValue: searchString,
  }
}

const mapDispatchToProps = {
  onChange: handleSearch,
}

function mergeProps({ searchValue }, { onChange }, ownProps) {
  const searchInfo = {
    onChange: partial(onChange, entityId, entityFieldId),
    value: searchValue,
  }
  return Object.assign({ searchInfo }, ownProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
