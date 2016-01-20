import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import smoothScroll from 'smooth-scroll'
import filter from 'lodash/collection/filter'
import get from 'lodash/object/get'
import isEmpty from 'lodash/lang/isEmpty'
import map from 'lodash/collection/map'

import { loadProfiles } from '../redux/actions'
import {
  toggle as toggleFilterAction,
  update as updateFilterAction,
  updateAndClose as updateAndCloseAction } from '../redux/modules/filters'
import { update as updateDisplayAction } from '../redux/modules/display'
import Students from '../components/Students/Students'

import photoDisplay from '../utils/studentPhoto'
import { itemCount, filterCollection } from '../utils/filter'

class StudentsSection extends Component {
  componentWillMount() {
    this.props.loadProfiles()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchStr && !this.props.searchStr) {
      const scrollOptions = {
        offset: 0,
        speed: 500,
        updateURL: false,
      }
      smoothScroll.animateScroll(null, '#students', scrollOptions)
    }
  }
  render() {
    const { toggleFilter, filterTypes, updateAndClose, ...rest } = this.props
    const filterInfo = {
      toggle: toggleFilter,
      types: filterTypes,
      update: updateAndClose,
    }
    return <Students {...rest} filterInfo={filterInfo} />
  }
}
StudentsSection.propTypes = {
  filterTypes: PropTypes.array,
  toggleFilter: PropTypes.func.isRequired,
  loadProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.array,
  searchStr: PropTypes.string,
  students: PropTypes.array,
  updateAndClose: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
}

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { profile, url, program },
    filters,
  } = state
  // @see utils/filterItem.js
  const filterParams = {}
  const searchStr = get(filters, [ 'profile', 'name.display', 'value' ], false)
  let programId = get(filters, [ 'students', 'program', 'option' ], false)
  function setFilterParams(fieldId, compare, value) {
    filterParams.fieldId = fieldId
    filterParams.compare = compare
    filterParams.value = value
  }
  // Only do one filter at a time. In order of priority.
  if (searchStr) {
    setFilterParams('name.display', 'includes', searchStr)
    programId = false
  } else if (programId) {
    setFilterParams('program', 'is', programId)
  }
  const programCountIndex = itemCount(profile, 'program')
  // Program filters.
  const programFilterOpts = map(program, ({ id, name }) => ({
    // Figure out if the filter option is enabled.
    active: programId === id,
    label: name,
    itemCount: programCountIndex[id] || 0,
    value: id,
  }))
  // Filter profiles.
  let profiles = isEmpty(filterParams) ? profile : filterCollection(profile, filterParams)
  // Merge graph nodes and stuff.
  profiles = map(profiles, ({ photo, id, ...rest }) => {
    // Add useful student info to profiles array.
    return {
      ...rest,
      id,
      // active,
      photos: {
        active: url[photo] && photoDisplay(url[photo], true),
        inactive: url[photo] && photoDisplay(url[photo], false),
      },
      program: program[rest.program],
    }
  })
  // Hack for partial uploaded images.
  profiles = filter(profiles, prof => prof.photos.active)
  const filterTypes = [
    // { value: 'galleries', label: 'Gallery', options: locations },
    {
      value: 'program',
      label: 'Programs',
      options: programFilterOpts,
      active: get(state.filters, [ 'students', 'program', 'active' ]),
    },
  ]

  return {
    filterTypes,
    students: profiles,
    programInfo: programId ? program[programId] : undefined,
    searchStr,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
const mapDispatchToProps = {
  toggleFilter: toggleFilterAction,
  loadProfiles,
  updateDisplay: updateDisplayAction,
  updateFilter: updateFilterAction,
  updateAndClose: updateAndCloseAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsSection)
