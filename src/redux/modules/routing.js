import immutable from 'seamless-immutable'
import { UPDATE_LOCATION } from '../history'

const initialState = immutable({})

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_LOCATION:
      return state.merge(payload)
    default:
      return state
  }
  return state
}
