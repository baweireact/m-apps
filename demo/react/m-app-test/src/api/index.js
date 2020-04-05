import axios from 'axios'
import urls from './urls'

const common = async (config) => {
  //let resolve = await axios(config)
  let resolve
  await axios(config).then(res => {
    resolve = res
  })
  return resolve.data
}

const Api = {
  login: (data) => common({ url: urls.login, data, method:'post' }),
  list: () => common({ url: urls.list })
}

export default Api