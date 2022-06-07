import Api from '../../api'
import { formatAuthData } from '../../utils/tools'

const getList = () => (dispatch) => {
  Api.list().then((res) => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['list'], value: res.data })
    }
  })
}

const getUserInfo =
  ({ role }) =>
  (dispatch) => {
    let userInfo = {}
    if (role === 'admin') {
      userInfo = localStorage.getItem('userInfoAdmin')
        ? JSON.parse(localStorage.getItem('userInfoAdmin'))
        : {}
    } else if (role === 'sale') {
      userInfo = localStorage.getItem('userInfoSale')
        ? JSON.parse(localStorage.getItem('userInfoSale'))
        : {}
    } else if (role === 'edu') {
      userInfo = localStorage.getItem('userInfoEdu')
        ? JSON.parse(localStorage.getItem('userInfoEdu'))
        : {}
    } else if (role === 'producer') {
      userInfo = localStorage.getItem('userInfoProducer')
        ? JSON.parse(localStorage.getItem('userInfoProducer'))
        : {}
    }
    dispatch({
      type: 'SET_LIGHT_STATE',
      key: ['userInfo'],
      value: { ...userInfo, role },
    })
  }

const setAuth =
  ({ authData = false, roleId = '' } = {}) =>
  (dispatch, getState) => {
    const myRoleId = localStorage.getItem('roleIdForAdmin') ? localStorage.getItem('roleIdForAdmin') : ''
    const router = getState().getIn(['light', 'router']).toJS()
    if (Array.isArray(authData) && authData.length > 0 && myRoleId !== 'sysAdmin' && roleId === myRoleId - 0) {
      const { newRouter } = formatAuthData({ router: router, authData })
      console.log(newRouter)
      dispatch({ type: 'SET_LIGHT_STATE', key: ['router'], value: newRouter })
    } else if ( myRoleId && myRoleId !== 'sysAdmin' ) {
      Api.light.adminRoleAuth({id: myRoleId - 0, isLoading: false}).then((res) => {
        if (res.state === 1) {
          const authData =
          res.data &&
          res.data.permission &&
          Array.isArray(res.data.permission)
            ? res.data.permission
            : []
          const {newRouter} = formatAuthData({
            router: router,
            authData,
          })
          dispatch({
            type: 'SET_LIGHT_STATE',
            key: ['router'],
            value: newRouter,
          })
        }
      })
    }
  }

export { getList, getUserInfo, setAuth }
