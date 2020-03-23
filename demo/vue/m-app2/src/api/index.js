import axios from 'axios'
import urls from './urls'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:81'
}

const common = async (config) => {
  let resolve = await axios(config)
  return resolve.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  list: () => common({ url: urls.list }),
  myBooks: (data, method) => common({ url: urls.myBooks, data, method })
}

export default Api



