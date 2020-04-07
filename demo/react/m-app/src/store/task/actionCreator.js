import Api from '../../api'

const getList = () => (dispatch) => {
  Api.list().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['list'], value: res.data })
    }
  })
}

const myBooks = (data, method, callback) => (dispatch) => {
  Api.myBooks(data, method).then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['myBooks'], value: res.data })
      callback && callback()
    }
  })
}

export default {
  getList,
  myBooks
}