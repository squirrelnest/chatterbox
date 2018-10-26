import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux'
import createMemoryHistory from 'history/createMemoryHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import yomama from './reducers/index';
import history from './history';

const middlewareHistory = routerMiddleware(history)

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(thunk, middlewareHistory))(createStore)

// const store = createStore(yomama, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(yomama, initialState)
}
