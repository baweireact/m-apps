import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

const defaultState = {
  navList: [],
  obj: {
    count: 1
  },
  count: 0
}

const reducer = (state = defaultState, action) => {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'ADD':
      state.obj.count++
      return {...state};
    
    default:
      return state;
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
 
const enhancer = composeEnhancers(applyMiddleware(logger));
const store = createStore(reducer, enhancer);

export default store