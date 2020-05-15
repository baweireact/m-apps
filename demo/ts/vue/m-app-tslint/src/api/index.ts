import axios, { AxiosRequestConfig } from 'axios'
import urls from './urls'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:83'
}

axios.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token')
  return config
}, (error) => {
  console.log('对请求错误做些什么', error)
  return Promise.reject(error);
})

axios.interceptors.response.use((res) => {
  if (res.data.code === 400) {
    alert(res.data.message)
  }
  return res
}, (error) => {
  console.log('对响应错误做些什么')
  return Promise.reject(error)
})

function greeter(name:string) {
  return `hello world!`
}

const common = async (config:AxiosRequestConfig) => {
  let resolve = await axios(config)
  return resolve.data
}

const Api = {
  login: (data: object) => common({ url: urls.login, data, method: 'post' }),
  list: () => common({ url: urls.list }),
  myBooks: (data: object = {}, method: AxiosRequestConfig['method'] = 'get') => common({ url: urls.myBooks, data, method }),
  getDetail: (id: string) => common({url: urls.detail + id})
}

export default Api




