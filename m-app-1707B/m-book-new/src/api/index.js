import axios from 'axios'
import urls from './urls'
import { Alert, Message, MessageBox } from 'element-ui';
import MyAlert from '../components/Alert'  //js文件里无法使用挂载到vue全局的函数，只能手动引进来

//开发环境
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:85'
}

axios.interceptors.response.use((res) => {
  // MessageBox({
  //   title: '1',
  //   showCancelButton: true,
  //   confirmButtonText: '确定',
  //   cancelButtonText: '取消',
  //   callback(action) {
  //     if (action === 'confirm') {
  //       console.log(2)
  //     } else if (action === 'cancel') {
  //       console.log(3)
  //     }
  //   }
  // })
  if (res.data.code === 400) {
    MyAlert({title: '标题', message: res.data.message})
  }
  return res
})

const common = async (config) => {
  let res = await axios(config)
  return res.data
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