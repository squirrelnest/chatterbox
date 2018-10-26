import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import reviewReducer from './reviewReducer';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

const yomama = combineReducers({
  locations: locationReducer,
  reviews: reviewReducer,
  auth: authReducer,
  chatterbox: chatReducer
})

export default yomama;
