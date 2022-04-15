import urls from './urls'
import { common } from './common'

const Api = {
  getUserInfo: () => common({ url: urls.light.getUserInfo }),
  login: (data) => common({ url: urls.light.login, data, method: 'post'})

}

export default Api
