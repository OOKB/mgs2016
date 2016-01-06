import * as ActionTypes from './actions'
import merge from 'lodash/object/merge'
import { routeReducer } from 'redux-simple-router'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import db from './modules/db'

// Used only for development!
import sampleLocations from './sampleLocations'

// Updates an entity cache in response to any action with response.entities.
// Define our default entities collection database.
const defaultEntityState = {
  forms: {},
  repos: {},
  users: {},
  locations: sampleLocations,
}
function entities(state = defaultEntityState, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  db,
  entities,
  errorMessage,
  form: formReducer,
  // Special place to save url. { changeId, path }
  routing: routeReducer,
})

export default rootReducer
