import Api from '../api'

const getListAll = (payload) => (dispatch) => {
  console.log(payload)
  dispatch({ type: 'SET_STATE', key: ['loading'], value: true })
  Api.getListAll().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['listAll'], value: res.data })
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
  getListAll,
  getMyBook
}