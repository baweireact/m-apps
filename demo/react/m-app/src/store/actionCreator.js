import Api from '../api'

const getList = () => (dispatch) => {
  Api.list().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['list'], value: res.data })
    }
  })
}

export default {
  getList
}