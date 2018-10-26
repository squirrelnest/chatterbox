import fetch from 'isomorphic-fetch';
import { API_ROOT } from '../api-config';

/* ACTION TYPES */

export const AUTHENTICATED = 'AUTHENTICATED'
export const UNAUTHENTICATED = 'UNAUTHENTICATED'
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'
export const ADD_USER = 'ADD_USER'

/* ACTION CREATORS */

export function addUser(payload) {
  return { type: ADD_USER, payload }
}

/* ASYNCS */

export function login(loginData) {

  const bodyData = {
    auth: {
      email: loginData.email,
      password: loginData.password,
    }
  }

  return (dispatch) => {
    return fetch(`//${API_ROOT}/user_token`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => localStorage.setItem("jwt", response.jwt))
    .then( () => dispatch({ type: AUTHENTICATED }))
    .catch(function(error) {
      console.log('Oops! Invalid credentials: \n', error);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    })
  }
}

export function register(registrationData) {

  const bodyData = {
    user: {
      email: registrationData.email,
      password: registrationData.password,
      username: registrationData.username
    }
  }

  return (dispatch) => {
    return fetch(`//${API_ROOT}/register`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => dispatch(addUser(response)))
    .then(console.log('You created a new account'))
  }
}

export function logout(dispatch) {
  dispatch({ type: 'UNAUTHENTICATED' })
}

export function updateUser(userData) {

  const bodyData = {
    user: {
      id: userData.user_id,
      content: userData.content,
      stability: userData.stability,
      aesthetics: userData.aesthetics,
      safety: userData.safety,
      user_id: 1
    }
  }

  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch(`http://localhost:3001/users/${userData.user_id}`, {
      method: "PATCH",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData),
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
  }
}

export function deleteUser(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch(`http://localhost:3001/users/${user_id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(response => {
      dispatch(fetchUsersSuccess(response));
    })
  }
}

export function fetchUsersSuccess(response) {
  console.log('fetch successful');
}
