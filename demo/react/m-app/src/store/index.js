import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '小米书城',
  currentId: 0,
  isRealScroll: true,
  list: [],
  myBooks: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  let state = store.getState().toJS()
  console.log(state)
})

export default store