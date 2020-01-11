import { createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
//import thunk from 'redux-thunk'
import logger from 'redux-logger'

const defaultState = fromJS({
  title: "小米书城",
  listAll: [],
  currentId: 0,
  isRealScroll: true,
  myBook: [],
  loading: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      //newState[action.key] = action.value
      return state.setIn(action.key, fromJS(action.value));
    default:
      return state;
  }
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    //如果action是一个函数,我们就执行这个函数，这里的action是形参，实参是dispatch传过来的，
    //action默认会把dispatch函数传过去，异步函数拿到dispatch函数后可以继续调用
    return action(dispatch, getState);
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState().toJS()) 
})

export default store