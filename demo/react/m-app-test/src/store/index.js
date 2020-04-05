import { createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
//import thunk from 'redux-thunk'

const defaultState = fromJS({
  title: '小米书城',
  list: [],
  currentId: 0
})

let thunk = ({ dispatch }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch);
  }

  return next(action);
};

const reducer = (state = defaultState, action) => {
  //let newState = JSON.parse(JSON.stringify(state)) //有很严重的性能问题
  switch (action.type) {
    case 'SET_STATE':
      //let newState = JSON.parse(JSON.stringify(state)) //有很严重的性能问题
      //newState[action.key] = action.value
      return state.setIn(action.key, fromJS(action.value))
  
    default:
      return state
  }
}
const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState().toJS())
})

export default store