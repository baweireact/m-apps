import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import { IState, IAction } from '../interface'
import book from './book/reducer'

// const defaultState: IState = {
//   title: '小米书城',
//   currentId: 0,
//   isRealScroll: true,
//   list: [],
//   myBooks: []
// }

// const reducer = (state = defaultState, action: IAction) => {
//   switch (action.type) {
//     case 'SET_STATE':
//       let newState = JSON.parse(JSON.stringify(state))
//       newState[action.key] = action.value
//       return newState
//     default:
//       return state
//   }
// }

const reducers = combineReducers({
  book
})
const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
  let state = store.getState()
  //console.log(state)
})

export default store