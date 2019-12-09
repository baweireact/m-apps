import Api from '../api'

//获取列表全部数据，并存入仓库，做楼层用
const getListAll = () => (dispatch) => {
  Api.getListAll().then(res => {
    dispatch({ type: 'SET_STATE', key: 'listAll', value: res.data })
  })
}

export default {
  getListAll
}