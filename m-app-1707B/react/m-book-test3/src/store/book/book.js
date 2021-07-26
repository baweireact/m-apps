import {  } from 'redux'
import { fromJS } from 'immutable'

const book = fromJS({
  title: '小米书城',
  listAll: []
})

const reducer = (state = book, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, fromJS(action.value))
  
    default:
      return state
  }
}

export default reducer