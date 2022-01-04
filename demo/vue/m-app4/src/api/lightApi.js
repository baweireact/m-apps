import { common } from './common'
import urls from './urls'

const lightApi = {
  login: (data) => common({ url: urls.light.login, data, method: 'post' })
}

export default lightApi