import axios from 'axios'
import urls from './urls'

axios.defaults.baseURL = "http://localhost:89"

//拦截响应， http://www.axios-js.com/zh-cn/docs/#%E6%8B%A6%E6%88%AA%E5%99%A8
axios.interceptors.response.use((res) => {
  //处理状态码400
  if (res.data.code === 400) {
    alert(res.data.message)
  }
  return res
})

//封装axios请求，https://es6.ruanyifeng.com/#docs/async
const common = async (config) => {
  let res = await axios(config)
  // let result
  // await axios(config).then(res => {
  //   result = res
  // })
  return res.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  getNavList: () => common({ url: urls.getNavList }),
  getList: (url) => common({ url: urls.getList + url }),
  getDetail: (id) => common({ url: urls.getDetail + id }),
  add: (data) => common({ url: urls.add, data, method: 'post' }),
  getMyBook: () => common({ url: urls.getMyBook })
}

export default Api