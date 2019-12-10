import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  listAll: [],
  currentId: 0,
  myBook: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      // let newState = JSON.parse(JSON.stringify(state))
      // newState[action.key] = action.value
      return state.setIn(action.key, action.value)
    default: 
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState().toJS())
})

export default store