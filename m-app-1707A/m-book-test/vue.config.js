const bodyParser = require('body-parser')
const { bookNavData, bookMallData, bookMallDetailData } = require('./data')

let userList = [{
  id: 0,
  username: 'admin',
  password: '123456'
}, {
  id: 1,
  username: 'admin2',
  password: '123'
}]

module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      app.use(bodyParser.json())

      //登录，多个用户，验证用户名是否存在，密码是否正确
      app.post('/api/login', (req, res) => {
        let { username, password } = req.body
        let user = userList.find(item => item.username === username)
        if (user) {
          if (user.password === password) {
            res.send({
              code: 200,
              data: {
                username
              },
              message: '登录成功'
            })
          } else {
            res.send({
              code: 400,
              data: {
                username
              },
              message: '密码错误'
            })
          }
        } else {
          res.send({
            code: 400,
            data: {
              username
            },
            message: '用户名不存在'
          })
        }
      })

      //导航
      app.get('/api/nav', (req, res) => {
        res.send({
          code: 200,
          data: bookNavData,
          message: '导航'
        })
      })

      //列表
      app.get('/api/list', (req, res) => {
        let { id } = req.query
        let data = bookMallData.find(item => item.id == id).list
        res.send({
          code: 200,
          data,
          message: '列表'
        })
      })

      //详情
      app.get('/api/detail', (req, res) => {
        let { id } = req.query
        let detail
        bookMallDetailData.forEach(item => {
          item.list.forEach(book => {
            if (book.id == id) {
              detail = book
            }
          })
        })
        res.send({
          code: 200,
          data: detail,
          message: '详情'
        })
      })
    }
  }
}