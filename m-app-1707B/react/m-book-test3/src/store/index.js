import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { combineReducers } from 'redux-immutable'
import book from './book/book'

const reducers = combineReducers({
  book
})

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState().toJS())
})

export default store