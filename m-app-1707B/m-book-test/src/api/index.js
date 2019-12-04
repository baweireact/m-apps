import urls from './urls'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:86'

const common = async (config) => {
  let res = await axios(config)
  return res.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post'}),
  getNav: () => common({ url: urls.getNav }),
  getList: (url) => common({ url: urls.getList + url }),
  getMyBook: () => common({ url: urls.getMyBook }),
  add: (data) => common({ url: urls.add, data, method: 'post' }),
  getDetail: (url) => common({ url: urls.getDetail + url }),
  update: (data) => common({ url: urls.update, data, method: 'post'})
}

export default Api