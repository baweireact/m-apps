import axios from 'axios'
import urls from './urls'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:81'
}

axios.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token')
  return config
})

axios.interceptors.response.use((res) => {
  if (res.data.code === 400) {
    alert(res.data.message)
  }
  return res
})

const common = async (config:object) => {
  let resolve = await axios(config)
  return resolve.data
}

const Api = {
  login: (data:object) => common({ url: urls.login, data, method: 'post' }),
  list: () => common({ url: urls.list }),
}

export default Api



