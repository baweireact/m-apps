import Api from '../api'

const getAllList = () => (dispatch) => {
  dispatch({ type: 'SET_STATE', key: ['loading'], value: true })
  Api.getAllList().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['allList'], value: res.data })
      dispatch({ type: 'SET_STATE', key: ['loading'], value: false })
    }
  })
}

const getMyBook = () => (dispatch) => {
  Api.getMyBook().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['myBook'], value: res.data })
    }
  })
}

export default {
  getAllList,
  getMyBook
}