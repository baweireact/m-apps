import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import task from './task/reducer'
//import thunk from 'redux-thunk'

let thunk = ({ dispatch }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch);
  }

  return next(action);
};

const reducers = combineReducers({
  task
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState().toJS())
})

export default store