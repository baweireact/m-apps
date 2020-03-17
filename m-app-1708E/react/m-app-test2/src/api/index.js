import axios from 'axios'
import urls from './url'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:90'
}


const common = async (config) => {
  let res = await axios(config)
  return res.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  getListAll: () => common({url: urls.listAll})
}

export default Api

