
const baseURL = {
  dev: 'http://localhost:81',
  test: 'http://10.3.138.173:81',
  pre: 'http://10.3.138.173:81',
  prod: 'http://39.97.238.175:81'
}[process.env.VUE_APP_NODE_ENV]

console.log(666, process.env)

export { baseURL }
