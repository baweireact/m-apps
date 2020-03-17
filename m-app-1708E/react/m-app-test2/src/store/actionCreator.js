import Api from '../api'

//获取列表数据
const getListAll = () => (dispatch) => {
  Api.getListAll().then(res => {
    if (res.code === 200) {
      //console.log(res)
      dispatch({ type: 'SET_STATE', key: ['listAll'], value: res.data })
    }
  })
} 

export default {
  getListAll
}

