import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  ADD_USER
} from '../actions/authActions'

const initialState = {
  user: {},
  authenticated: false,
  newregistration: false
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case AUTHENTICATED:
      return { ...state, authenticated: true }

    case UNAUTHENTICATED:
      return { ...state, authenticated: false }

    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload }

    case ADD_USER:
      return { ...state, user: action.payload, newregistration: true }

    default:
      return state
  }
}
