import { fromJS } from 'immutable'
//import thunk from 'redux-thunk'

const defaultState = fromJS({
  title: '小米书城',  //header里的标题，头部
  list: [],          //楼层数据
  currentId: 0,      //侧边栏的高亮
  myBooks: []        //书包数据，使用到的地方：徽章，书包页
})

const reducer = (state = defaultState, action) => {
  //let newState = JSON.parse(JSON.stringify(state)) //有很严重的性能问题
  switch (action.type) {
    case 'SET_STATE':
      //let newState = JSON.parse(JSON.stringify(state)) //有很严重的性能问题
      //newState[action.key] = action.value
      return state.setIn(action.key, fromJS(action.value))
  
    default:
      return state
  }
}

export default reducer