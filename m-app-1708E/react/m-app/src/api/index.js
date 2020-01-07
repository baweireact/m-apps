import axios from 'axios'
import urls from './urls'

axios.defaults.baseURL = "http://localhost:88"

const common = async (config) => {
  let resovle
  await axios(config).then(res => {
    resovle = res
  })
  return resovle.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  getAllList: () => common({ url: urls.allList }),
  getMyBook: () => common({ url: urls.getMyBook }),
  add: (data) => common({ url: urls.add, data, method: 'post' }),
  getDetail: (url) => common({ url: urls.getDetail + url }),
  update: (data) => common({ url: urls.update, data, method: 'post' }),
  news: (url) => common({ url: urls.news + url }),
  getTaskList: () => common({ url: urls.getTaskList }),
  getAddressList: () => common({ url: urls.getAddressList }),
  updateAddressList: (data) => common({ url: urls.updateAddressList, data, method: 'post' }),
  getBanner: () => common({ url: urls.getBanner })
}


export default Api