const TOGGLE = 'filter/TOGGLE'

const defaultState = {
  students: {
    galleries: false,
    programId: false,
  },
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        [action.groupId]: {
          ...state[action.groupId],
          [action.filterType]: action.enabled,
        },
      }
    default:
      return state
  }
}

function _toggleFilter(groupId, filterType, enabled) {
  return {
    enabled,
    filterType,
    groupId,
    type: TOGGLE,
  }
}

export function disableFilter(groupId, filterType) {
  return _toggleFilter(groupId, filterType, false)
}

export function enableFilter(groupId, filterType) {
  return _toggleFilter(groupId, filterType, true)
}

export function toggleFilter(groupId, filterType) {
  return (dispatch, getState) => {
    // This assumes the filterType is known about beforehand. @see `defaultState` up top.
    const enabled = !getState().filter[groupId][filterType]
    return dispatch(_toggleFilter(groupId, filterType, enabled))
  }
}
