import immutable from 'seamless-immutable'
import { UPDATE_LOCATION } from '../history'

const initialState = immutable({})

export default function reducer(_state = initialState, action) {
  if (!action.type) return _state
  const state = _state.asMutable ? _state : immutable(_state)
  const { type, payload } = action
  switch (type) {
    case UPDATE_LOCATION:
      return state.merge(payload)
    default:
      return state
  }
  return state
}
