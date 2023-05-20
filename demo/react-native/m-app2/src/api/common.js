import axios from 'axios'
import { baseURL } from './config'
import { Alert } from 'react-native'
import Toast from 'react-native-root-toast'
const service = axios.create()

service.defaults.baseURL = baseURL

service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res) => {
    if (res.data.state === 1 || res.data.code === 200) {
      return res.data
    } else if (res.data.state === 0) {
      // Alert.alert(res.data.message, "",
      // [
      //   { text: "确定" }
      // ])
      Toast.show(res.data.message, {
        duration: 1000,
        position: Toast.positions.CENTER
      })
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const common = async (config) => {
  let res = await service(config)
  return res
}
