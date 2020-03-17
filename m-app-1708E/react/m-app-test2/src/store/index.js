import { createStore, applyMiddleware, combineReducers } from 'redux'
//import thunk from 'redux-thunk'
import { fromJS } from 'immutable' //https://www.npmjs.com/package/immutable

const defaultState = fromJS({
  listAll: [],  //列表全部数据
  currentId: 0,   //高亮
  title: '小米书城', //顶部header
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state;
  }
}

let thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk))

export default store