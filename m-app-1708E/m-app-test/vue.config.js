const bodyParser = require('body-parser')
const { bookNavData, bookMallData, bookMallDetailData } = require('./data')

//用户列表
let userList = [{
  id: 0,
  username: 'admin',
  password: '123456'
}, {
  id: 1,
  username: 'xu',
  password: '123'
}]

module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      //解析post请求
      app.use(bodyParser.json())

      //登录，多用户，区分用户名错误和密码错误
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


        // if (username === 'admin' && password === '123456') {
        //   res.send({
        //     code: 200,
        //     data: { username },
        //     message: '登录成功'
        //   })
        // } else {
        //   res.send({
        //     code: 400,
        //     message: '登录失败'
        //   })
        // }
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
        let list = bookMallData.find(item => item.id == id).list
        res.send({
          code: 200,
          data: list,
          message: 'list'
        })
      })

      //详情
      app.get('/api/detail/:id', (req, res) => {
        let { id } = req.params
        console.log(id)
        bookMallDetailData.forEach(item => {
          item.list.forEach(book => {
            if (book.id == id) {
              res.send({
                code: 200,
                data: book,
                message:'详情'
              })
              return
            }
          })
        })
      })
    }
  }
}