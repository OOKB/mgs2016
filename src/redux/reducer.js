import * as ActionTypes from './actions'
import merge from 'lodash/merge'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import db from './modules/db'
import display from './modules/display'
import filters from './modules/filters'
import map from './modules/map'
import routing from './modules/routing'
import socket, { idReducer as id } from './modules/socket'

export const defaultState = {}

// Updates an entity cache in response to any action with response.entities.
// Define our default entities collection database.
const defaultEntityState = {
  profile: {},
  location: {},
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
  display,
  filters,
  form: formReducer,
  id,
  map,
  // Special place to save url. { changeId, path }
  routing,
  socket,
})

export default rootReducer
