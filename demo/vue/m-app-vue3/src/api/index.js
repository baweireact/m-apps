import axios from 'axios'
//import message from '../components/message'
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
    //message({ message: res.data.message, duration: 2000 })
    alert(res.data.message)
  }
  return res
})

const common = async (config) => {
  let resolve = await axios(config)
  return resolve.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  list: () => common({ url: urls.list }),
  myBooks: (data, method) => common({ url: urls.myBooks, data, method }),
  detail: (id) => common({ url: urls.detail + id })
}

export default Api



