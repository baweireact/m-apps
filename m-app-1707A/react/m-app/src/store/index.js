import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const defaultState = {
  list: [],
  currentId: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      let newState = JSON.parse(JSON.stringify(state))
      newState[action.key] = action.value
      return newState
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store