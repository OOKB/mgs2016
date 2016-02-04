import immutable from 'seamless-immutable'
import get from 'lodash/get'

const UPDATE = 'filter/UPDATE'
const UPDATE_CLOSE = 'filter/UPDATE_CLOSE'

const defaultState = immutable({
  students: {
    galleries: false,
    programId: false,
  },
})
function wrapState(state, action) {
  if (!action.type) return state
  return state.asMutable ? state : immutable(state)
}
export default function reducer(_state = defaultState, action) {
  const state = wrapState(_state, action)
  switch (action.type) {
    case UPDATE:
      return state.setIn(action.payload.path, action.payload.value)
    case UPDATE_CLOSE:
      const newVal = get(state, action.payload.path).merge({
        option: action.payload.value,
        active: false,
      })
      return state.setIn(action.payload.path, newVal)
    default:
      return state
  }
}

export function update(groupId, filterType, propertyId, value) {
  return {
    payload: { path: [ groupId, filterType, propertyId ], value },
    type: UPDATE,
  }
}

export function updateAndClose(groupId, fieldId, value) {
  return {
    payload: { path: [ groupId, fieldId ], value },
    type: UPDATE_CLOSE,
  }
}

export function toggle(groupId, filterType) {
  return (dispatch, getState) => {
    const value = !get(getState().filters, [ groupId, filterType, 'active' ])
    return dispatch(update(groupId, filterType, 'active', value))
  }
}

export function handleSearch(groupId, filterType, newTxt) {
  return update(groupId, filterType, 'value', newTxt.toLowerCase())
}

export function handleFilter(type, field, compare, value) {
  return {
    type: UPDATE,
    payload: { path: [ type, field ], value: { compare, value } },
  }
}
