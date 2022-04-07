import Constants from 'expo-constants'

const baseURL = {
  dev: 'http://10.3.138.173:81',
  test: 'http://10.3.138.173:81',
  prod: 'http://39.97.238.175:81'
}[Constants.manifest.extra.REACT_APP_MODE]

console.log(666, process.env)

export { baseURL }
