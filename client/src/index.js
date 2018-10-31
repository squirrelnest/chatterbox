import 'babel-polyfill';
import './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import yomama from './reducers/index';
import WrapperApp from './App';
import configureStore from './configureStore';
import { getChats } from './actions/chatActions';


let store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
// const store = configureStore();

// store.dispatch(fetchLocations())

const retrieve = () => {
  store.dispatch(getChats())
}

window.setTimeout(retrieve, 2000)

render (
  <Provider store={store}>
    <WrapperApp store={store} />
  </Provider>,
  document.getElementById('root')
)
