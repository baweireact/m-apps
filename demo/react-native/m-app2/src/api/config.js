import Constants from 'expo-constants'

const baseURL = {
  dev: 'http://192.168.1.102:85',
  test: 'http://192.168.1.102:85',
  prod: 'http://yuying-api.xutongbao.top'
}[Constants.manifest.extra.REACT_APP_MODE]

console.log(666, process.env, baseURL)

export { baseURL }
