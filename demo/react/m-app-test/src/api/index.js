import axios from 'axios'
import urls from './urls'

//拦截器
axios.interceptors.response.use((res) => {
  if (res.data.code === 400) {
    alert(res.data.message)
  }
  return res
})

const common = async (config) => {
  let resolve = await axios(config)
  console.log(1)
  return resolve.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method:'post' }),
  list: () => common({ url: urls.list }),
  myBooks: (data, method) => common({ url: urls.myBooks, data, method }),
  detail: (id) => common({ url: urls.detail + id })
}

export default Api