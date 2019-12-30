import axios from 'axios'
import urls from './urls'

const common = async (config) => {
  let resovle
  await axios(config).then(res => {
    resovle = res
  })
  return resovle.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  getNav: () => common({ url: urls.getNav }),
  getList: (url) => common({ url: urls.getList + url }),
  getMyBook: () => common({ url: urls.getMyBook }),
  add: (data) => common({ url: urls.add, data, method: 'post' }),
  getDetail: (url) => common({ url: urls.getDetail + url }),
  update: (data) => common({ url: urls.update, data, method: 'post' }),
  news: (url) => common({ url: urls.news + url }),
  getTaskList: () => common({ url: urls.getTaskList }),
  getAddressList: () => common({ url: urls.getAddressList }),
  updateAddressList: (data) => common({ url: urls.updateAddressList, data, method: 'post' })
}


export default Api