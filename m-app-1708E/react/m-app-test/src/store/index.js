import { createStore } from 'redux'

const defaultState = {
  navList: [],
  count: 0
}

const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'SET_STATE':
      newState[action.key] = action.value
      return newState;
    case 'ADD': {
      newState.count++
      return newState
    }
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store