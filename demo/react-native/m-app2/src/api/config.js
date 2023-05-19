import Constants from 'expo-constants'

const baseURL = {
  dev: 'http://172.20.10.4:81',
  test: 'http://172.20.10.4:81',
  prod: 'http://39.97.238.175:81'
}[Constants.manifest.extra.REACT_APP_MODE]

console.log(666, process.env, baseURL)

export { baseURL }
