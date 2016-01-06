const TOGGLE_PIN = 'map/TOGGLE_PIN'

const defaultState = {
  activePin: null,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_PIN:
      return {
        ...state,
        activePin: action.activePin,
      }
    default:
      return state
  }
}

export function togglePin(pinId) {
  return (dispatch, getState) => {
    return dispatch({
      activePin: getState().map.activePin === pinId ? null : pinId,
      type: TOGGLE_PIN,
    })
  }
}
