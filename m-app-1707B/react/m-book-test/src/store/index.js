import { createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

//把普通js对象转换为immutable对象
const defaultState = fromJS({
  listAll: [],
  currentId: 0,
  myBook: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state
  }
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState().toJS())
})

export default store