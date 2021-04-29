import urls from './urls'
import { common } from './common'

const Api = {
  login: (data) => common({ url: urls.login, data, method: 'post' }),
  list: () => common({ url: urls.list }),
  myBooks: (data, method) => common({ url: urls.myBooks, data, method }),
  detail: (id) => common({ url: urls.detail + id })
}

export default Api