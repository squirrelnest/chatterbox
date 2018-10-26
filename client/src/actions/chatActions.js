import fetch from 'isomorphic-fetch'

/* ACTION TYPES */

export const FETCH_CHATS = 'FETCH_CHATS'
export const ADD_CHAT = 'ADD_CHAT'
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'


/* ACTION CREATORS */

export function fetchChatsSuccess(payload) {
  return { type: FETCH_CHATS, payload }
}

export function addChat(payload) {
  return { type: ADD_CHAT, payload }
}

export function changeMessage(payload) {
  return { type: CHANGE_MESSAGE, payload }
}

export function clearHistory() {
  return { type: CLEAR_HISTORY }
}

/* API CALLS */

export function getChats() {

  return (dispatch) => {
    return fetch(`/chat`, {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(payload => {
      dispatch(fetchChatsSuccess(payload));
    })
  }
}

export function postChat(chat) {

  const bodyData = {
    content: chat
  }

  return (dispatch) => {
    return fetch(`/chat`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(payload => {
      dispatch(addChat(payload));
    })
  }
}

export function deleteHistory() {

  return (dispatch) => {
    return fetch(`/chat/clear`, {
      method: "DELETE",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(payload => {
      dispatch(clearHistory());
    })
  }
}
