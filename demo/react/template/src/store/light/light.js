import { fromJS } from 'immutable'

const defaultState = fromJS({

})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LIGHT_STATE':
      return state.setIn(action.key, fromJS(action.value))
    default:
      return state
  }
}

export default reducer