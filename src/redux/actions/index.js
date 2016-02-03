import { CALL_API } from '../middleware/api'
import isEmpty from 'lodash/isEmpty'

export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAILURE = 'PROFILE_FAILURE'

const devEnv = process.env.NODE_ENV !== 'production'
const API = devEnv ? 'cape' : 'api'

// Fetches a single profile from CAPE API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchProfile(id) {
  return {
    [CALL_API]: {
      types: [ PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE ],
      api: API,
      endpoint: `mica/profile/${id}`,
    },
  }
}

// Fetches a profile unless it is cached.
// Relies on Redux Thunk middleware.
export function loadProfile(id, requiredFields = []) {
  return (dispatch, getState) => {
    const entity = getState().entities.profile[id]
    if (entity && requiredFields.every(key => entity.hasOwnProperty(key))) {
      return null
    }
    return dispatch(fetchProfile(id))
  }
}

export const PROFILES_REQUEST = 'PROFILES_REQUEST'
export const PROFILES_SUCCESS = 'PROFILES_SUCCESS'
export const PROFILES_FAILURE = 'PROFILES_FAILURE'

// Fetch profile index from CAPE API.
function fetchProfiles() {
  return {
    [CALL_API]: {
      types: [ PROFILES_REQUEST, PROFILES_SUCCESS, PROFILES_FAILURE ],
      api: API,
      endpoint: `mica`,
    },
  }
}

// Fetches a profiles unless we have a valid cache.
export function loadProfiles() {
  return (dispatch, getState) => {
    const loaded = !isEmpty(getState().entities.profile)
    if (loaded) return null
    return dispatch(fetchProfiles())
  }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE,
  }
}
