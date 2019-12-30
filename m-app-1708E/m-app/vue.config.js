const bodyParser = require('body-parser')
const { bookNavData, bookMallData, bookMallDetailData } = require('./data')

let userList = [{
  id: 0,
  username: 'admin',
  password: '123456'
}, {
  id: 1,
  username: 'xu',
  password: '123'
}]

let myBook = []

module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      app.use(bodyParser.json())

      app.post('/api/login', (req, res) => {
        let { username, password } = req.body
        let user = userList.find(item => item.username === username)
        if (user) {
          if (user.password === password) {
            res.send({
              code: 200,
              data: { username },
              message: '登录成功'
            })
          } else {
            res.send({
              code: 400,
              message: '密码错误'
            })
          }
        } else {
          res.send({
            code: 400,
            message: '用户名不存在'
          })
        }
      })

      app.get('/api/nav', (req, res) => {
        res.send({
          code: 200,
          data: bookNavData,
          message: '列表'
        })
      })

      app.get('/api/list', (req, res) => {
        let { id } = req.query
        let list = bookMallData.find(item => item.id == id).list
        list.forEach(item => {
          item.is_in_my_book = myBook.findIndex(book => book.id === item.id) >= 0
        })
        res.send({
          code: 200,
          data: list,
          message: '列表'
        })
      })

      app.get('/api/detail', (req, res) => {
        let { id } = req.query
        bookMallDetailData.forEach(item => {
          item.list.forEach(book => {
            if (book.id == id) {
              res.send({
                code: 200,
                data: book,
                message: '详情'
              })
            }
          })
        })
      })

      app.post('/api/add', (req, res) => {
        let { item } = req.body
        myBook.push(item)
        res.send({
          code: 200,
          data: myBook,
          message: '添加成功'
        })
      })

      app.get('/api/my_book', (req, res) => {
        res.send({
          code: 200,
          data: myBook,
          message: '书包'
        })
      })
    }
  }
}