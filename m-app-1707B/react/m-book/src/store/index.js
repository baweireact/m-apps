import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '小米书城',
  listAll: [],
  currentId: 0,
  isRealScroll: true,
  myBook: [],
  loading: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      // let newState = JSON.parse(JSON.stringify(state))
      // newState[action.key] = action.value
      //state是一个immutable对象，调用setIn方法并不会修改state的值，因为state是immutable对象
      //newState是基于state和action创建出来的新immutable对象，这个创建过程并不是深拷贝，深拷贝性能很低
      //这个创建过程会共享没有改变的部分，避免深拷贝把所有节点都复制一遍带来的性能损耗
      //对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享
      let newState = state.setIn(action.key, fromJS(action.value))
      return newState
    default: 
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  //console.log(store.getState().toJS())
})

export default store