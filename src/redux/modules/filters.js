import immutable from 'seamless-immutable'
import get from 'lodash/object/get'
import set from 'lodash/object/set'

const UPDATE = 'filter/UPDATE'

const defaultState = immutable({
  students: {
    galleries: false,
    programId: false,
  },
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE:
      return state.merge(action.payload)
    default:
      return state
  }
}

export function update(groupId, filterType, propertyId, value) {
  return {
    payload: set({}, [ groupId, filterType, propertyId ], value),
    type: UPDATE,
  }
}

export function toggle(groupId, filterType) {
  return (dispatch, getState) => {
    const value = !get(getState().filters, [ groupId, filterType, 'active' ])
    return dispatch(update(groupId, filterType, 'active', value))
  }
}
