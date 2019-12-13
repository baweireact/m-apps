import Api from '../api'

//获取列表全部数据，并存入仓库，做楼层用
const getListAll = () => (dispatch) => {
  dispatch({ type: 'SET_STATE', key: ['loading'], value: true })
  Api.getListAll().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['listAll'], value: res.data })
      dispatch({ type: 'SET_STATE', key: ['loading'], value: false })
    }
  })
}

const updateMyBook = (myBook) => (dispatch) => {
  Api.update({ myBookNew: myBook }).then(res => {

  })
}

const getMyBook = () => (dispatch) => {
  dispatch({ type: 'SET_STATE', key: ['loading'], value: true })
  Api.getMyBook().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['myBook'], value: res.data })
      dispatch({ type: 'SET_STATE', key: ['loading'], value: false })
    }
  })
}

export default {
  getListAll,
  getMyBook,
  updateMyBook
}