import { combineReducers } from 'redux';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

const yomama = combineReducers({
  auth: authReducer,
  chatterbox: chatReducer
})

export default yomama;
