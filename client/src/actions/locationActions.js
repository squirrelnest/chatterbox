/* ACTION TYPES */

export const ADD_LOCATION = 'ADD_LOCATION'
export const REMOVE_LOCATION = 'REMOVE_LOCATION'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/* OTHER CONSTANTS */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ONE: 'SHOW_ONE'
}

/* ACTION CREATORS */

export function addLocation(location) {
  return { type: ADD_LOCATION, location }
}

export function removeLocation(location_id) {
  return { type: REMOVE_LOCATION, location_id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
