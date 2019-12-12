import Api from '../api'

const getListAll = (payload) => (dispatch) => {
  Api.getListAll().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['listAll'], value: res.data })
    }
  })
}

export default {
  getListAll
}