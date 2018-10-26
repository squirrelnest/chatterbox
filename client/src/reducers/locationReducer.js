import {
  ADD_LOCATION,
  REMOVE_LOCATION,
} from '../actions/locationActions';

import {
  GET_LOCATIONS,
  LOADING_LOCATIONS
} from '../actions/thunks';

const initialState = {
  locations: []
}

/* Never mutate state! Reducer must be a pure function - return a new state, don't modify original state (or any variable outside the reducer's scope)*/
/* Pure functions are idempotent (returns same output for a given input, no matter how many repetitions) but not vice versa */
/* Idempotent functions that delete items from a database are NOT pure as you cannot delete the same item twice */
/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */
/* Map(), Filter() and Concat() return a new array that is a subtraction or combo of multiple sources */

export default function locationReducer(state = initialState, action) {
  switch (action.type) {

    case LOADING_LOCATIONS:
      return { locations: [] }

    case GET_LOCATIONS:
      return { locations: action.payload }

    case ADD_LOCATION:
      return { locations: state.locations.concat(action.location) }

    case REMOVE_LOCATION:
      const locations = state.locations.filter( (location) => location.id !== action.location_id)
      return { locations }

    default:
      return state
  }
}
