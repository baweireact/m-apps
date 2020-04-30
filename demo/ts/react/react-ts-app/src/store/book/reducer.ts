import { IBookState, IAction } from '../../types'

const defaultState: IBookState = {
  title: '小米书城',
  currentId: 0,
  isRealScroll: true,
  list: [],
  myBooks: []
}

const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case 'SET_STATE':
      let newState = JSON.parse(JSON.stringify(state))
      newState[action.key] = action.value
      return newState
    default:
      return state
  }
}

export default reducer