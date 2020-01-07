import Api from '../api'

const getAllList = () => (dispatch) => {
  Api.getAllList().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['allList'], value: res.data })
    }
  })
}

export default {
  getAllList
}