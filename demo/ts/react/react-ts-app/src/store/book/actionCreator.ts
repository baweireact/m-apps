import { Dispatch } from 'react'
import { Method } from 'axios'
import Api from '../../api'

const list = () => (dispatch: Dispatch<any>) => {
  Api.list().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: 'list', value: res.data })
    }
  })
}

const myBooks = (data: any, method: Method , callback: Function) => (dispatch: Dispatch<any>) => {
  Api.myBooks(data, method).then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_STATE', key: ['myBooks'], value: res.data })
      callback && callback()
    }
  })
}


export default {
  list,
  myBooks
}