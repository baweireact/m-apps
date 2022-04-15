import axios from 'axios'
import { baseURL } from './config'
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
    if (res.data.state === 1) {
      return res.data
    } else if (res.data.state === 0) {
      alert(res.data.message)
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
