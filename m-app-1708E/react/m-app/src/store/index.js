import { createStore, applyMiddleware, compose } from 'redux'
//import logger from 'redux-logger'
//import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '小米书城',
  allList: [],
  currentId: 0,
  isRealScroll: true,
  myBook: [],
  loading: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state;
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

 
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

store.subscribe(() => {
  //console.log(store.getState().toJS())
})

export default store