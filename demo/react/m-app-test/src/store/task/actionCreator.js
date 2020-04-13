import Api from '../../api'

//相等于vuex里的actions对象，闭包是难点
const list = () => (dispatch) => {
  Api.list().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['list'], value: res.data })
    }
  })
}


const myBooks = (data, method) => (dispatch) => {
  Api.myBooks(data, method).then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['myBooks'], value: res.data })
    }
  })
}

export default {
  list,
  myBooks
}