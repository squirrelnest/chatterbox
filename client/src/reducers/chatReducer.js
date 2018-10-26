import {
  FETCH_CHATS,
  ADD_CHAT,
  CHANGE_MESSAGE,
  CLEAR_HISTORY
} from '../actions/chatActions'

const initialState = {
  chats: []
}

/* Object.assign(target, source object, source object) copies values from one or more source objects to the target object then returns the target object */

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_CHATS:
      return { chats: action.payload }

    case ADD_CHAT:
      return { chats: action.payload }

    case CHANGE_MESSAGE:
      return { message: action.payload }

    case CLEAR_HISTORY:
      return { chats: [] }

    default:
      return state
  }
}
