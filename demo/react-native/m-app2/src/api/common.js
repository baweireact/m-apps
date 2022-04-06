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
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const common = async (config) => {
  let res = await service(config)
  return res
}
