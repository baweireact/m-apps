import axios from 'axios'
import urls from './urls'
import toast from '../components/toast'

axios.defaults.baseURL = 'http://localhost:85'

//请求前的拦截
axios.interceptors.request.use((config) => {
  config.headers['token'] = localStorage.getItem('username')
  return config
})

//响应的拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 400) {
    toast({title: res.data.message})
  } else if (res.data.code === 403) {
    window.location.href = '/login'
  }
  return res
})

const common = async (config) => {
  const res = await axios(config)
  return res.data
}

const Api = {
  login: (data) => common({url: urls.login, data, method: 'post'}),
  getListAll: () => common({url: urls.listAll}),
  voice: (data) => common({url: urls.voice, data, method: 'post'})
}

export default Api

