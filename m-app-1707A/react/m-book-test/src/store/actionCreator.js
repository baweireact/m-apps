import Api from '../api'

//获取列表全部数据，并存入仓库，做楼层用
const getListAll = () => (dispatch) => {
  Api.getListAll().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['listAll'], value: res.data })
    }
  })
}

const updateMyBook = (myBook) => (dispatch) => {
  Api.update({ myBookNew: myBook }).then(res => {

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
  getMyBook,
  updateMyBook
}