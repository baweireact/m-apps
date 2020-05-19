const bodyParser = require('body-parser')

let userList = [
  {
    id: 0,
    username: 'admin',
    password: '123456'
  },
  {
    id: 1,
    username: 'xu',
    password: '123'
  }
]

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:81'
      }
    }
  }
}