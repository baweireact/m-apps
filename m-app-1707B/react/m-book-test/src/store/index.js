import { createStore } from 'redux'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  listAll: [],
  currentId: 0,
  myBook: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, action.value)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store