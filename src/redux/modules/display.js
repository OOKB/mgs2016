import immutable from 'seamless-immutable'
import get from 'lodash/get'
import set from 'lodash/set'

// This module is where we keep state information about specific entities.

// Toggle a specific attribute about an entity true/false.
const UPDATE = 'entityMeta/UPDATE'

const defaultState = immutable({
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE:
      return state.merge(action.payload)
    default:
      return state
  }
}

export function update(entityAttribute, value) {
  const payload = set({}, entityAttribute, value)
  return {
    payload,
    type: UPDATE,
  }
}

// entityAttribute should be a string with dot notation.
export function toggle(entityAttribute) {
  return (dispatch, getState) => {
    const newValue = !get(getState().display, entityAttribute)
    return dispatch(update(entityAttribute, newValue))
  }
}
