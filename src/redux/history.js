import get from 'lodash/get'
import isString from 'lodash/isString'
import pick from 'lodash/pick'
// import set from 'lodash/set'

// Sure, you could parse the url all the damn time and calculate the state slice.
// I want to get away from the idea of having a location object.
// Changing url should change state. I think of it like an action creator.

// Constants
export const TRANSITION = '@@router/TRANSITION'
export const UPDATE_LOCATION = '@@router/UPDATE_LOCATION'
export const UPDATE_HASH = '@@router/UPDATE_HASH'

// const LOCATION_PATH = [ 'routing', 'location' ]
const DEFAULT_TRANSITION_METHOD = 'pushState'

function transition(method) {
  return (...args) => ({
    type: TRANSITION,
    payload: { method, args },
  })
}

export const push = transition('pushState')
export const replace = transition('replaceState')
export const go = transition('go')
export const goBack = transition('back')
export const goForward = transition('forward')

export const routeActions = { push, replace, go, goBack, goForward }

export function updateLocation(location) {
  let payload = location
  if (isString(location)) {
    const [ pathname, hash ] = location.split('#')
    payload = {
      pathname,
      hash,
    }
  }
  // console.log(payload)
  return {
    type: UPDATE_LOCATION,
    payload,
  }
}

// Send an action on every history change.
// Forward / Back
function listenHistoryChange(location, dispatch) {
  window.addEventListener('popstate', () => {
    // console.log('historyChange', event)
    dispatch(updateLocation(pick(location, 'pathname', 'hash', 'search')))
  }, false)
}

export default function routerStoreEnhancer(getRoutes, options = {}) {
  // const locationPath = options.locationPath || LOCATION_PATH
  const defaultTransition = options.defaultTransition || DEFAULT_TRANSITION_METHOD
  const history = options.history || window.history
  const location = options.location || document.location

  function historyChange(method, pathname) {
    if (location.pathname !== pathname) {
      console.log('change addressbar', method, pathname)
      history[method]({}, '', pathname)
    }
  }

  return createStore => (reducer, initialState, enhancer) => {
    // let previousLocation = undefined
    let nextTransitionMethod = defaultTransition

    const { dispatch, ...store } = createStore(reducer, initialState, enhancer)

    function _dispatch(action) {
      // Listen to every action and save it's transitionMethod.
      nextTransitionMethod = get(action, [ 'meta', 'transitionMethod' ], nextTransitionMethod)
      if (action.type === UPDATE_LOCATION) {
        const payload = router.locationInfo(action.payload)
        if (payload.location) {
          const transitionMethod = defaultTransition
          historyChange(transitionMethod, payload.location)
        }
        return dispatch({
          ...action,
          payload,
        })
      }
      if (action.type !== TRANSITION) {
        return dispatch(action)
      }
      // Allow an action to initate addressbar change.
      const { payload: { method, args } } = action
      history[method](...args)
    }

    const router = getRoutes({ getState: store.getState, dispatch: _dispatch })

    listenHistoryChange(location, _dispatch)

    // Set initialState.
    _dispatch(updateLocation(location))

    return {
      ...store,
      dispatch: _dispatch,
    }
  }
}
