import axios from 'axios'
import urls from './url'

axios.defaults.baseURL = 'http://localhost:90'

const common = async (config) => {
  let res = await axios(config)

  // let resolve
  // await axios(config).then(res => {
  //   resolve = res
  // })

  return res.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' })
}

export default Api

