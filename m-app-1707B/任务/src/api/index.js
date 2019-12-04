import axios from 'axios'
import urls from './urls'

axios.defaults.baseURL = 'http://localhost:85'

const common = async (config) => {
  let res = await axios(config)
  return res.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  getNav: () => common({ url: urls.getNav }),
  getList: (url) => common({ url: urls.getList + url }),
  getTaskList: () => common({ url: urls.getTaskList })
}

export default Api