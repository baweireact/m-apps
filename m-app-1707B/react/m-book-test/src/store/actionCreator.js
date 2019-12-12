import Api from '../api'

const getListAll = (payload) => (dispatch) => {
  Api.getListAll().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['listAll'], value: res.data })
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