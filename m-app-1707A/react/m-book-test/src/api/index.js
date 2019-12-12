import urls from './urls'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:85'

//请求前的拦截
axios.interceptors.request.use((config) => {
  config.headers['token'] = localStorage.getItem('username')
  return config
})

//响应的拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 400) {
    alert(res.data.message)
  } else if (res.data.code === 403) {
    window.location.href = '/login'
  }
  return res
})

const common = async (config) => {
  let res = await axios(config)
  return res.data
}

const Api = {
  login: (data) => common({ url: urls.login, data: data, method: 'post'}),
  getListAll: () => common({ url: urls.getListAll }),
  getMyBook: () => common({ url: urls.getMyBook }),
  add: (data) => common({ url: urls.add, data, method: 'post' }),
  getDetail: (url) => common({ url: urls.getDetail + url }),
  update: (data) => common({ url: urls.update, data, method: 'post'}),
  news: (url) => common({ url: urls.news + url })
}

export default Api