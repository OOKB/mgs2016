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

// @TODO toggleFilter() look at state and toggle it.
