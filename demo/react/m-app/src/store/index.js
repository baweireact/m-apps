import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import task from './task/task'

const reducers = combineReducers({
  task
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
  let state = store.getState().toJS()
  console.log(state)
})

export default store