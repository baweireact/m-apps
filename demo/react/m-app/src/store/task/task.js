import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '小米书城',
  currentId: 0,
  isRealScroll: true,
  list: [],
  myBooks: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state
  }
}

export default reducer