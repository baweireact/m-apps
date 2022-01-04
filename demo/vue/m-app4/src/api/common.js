import axios from 'axios'
import { bassUrl } from './config'

const service = axios.create()

service.defaults.baseURL = bassUrl

const common = async (config) => {
  const res = await service(config)
  return res
}

export {
  common
}