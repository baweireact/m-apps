const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//解析post请求的中间件，https://www.npmjs.com/package/body-parser?activeTab=dependents
app.use(bodyParser.json())

//解决跨域问题，https://www.npmjs.com/package/cors
app.use(cors())

//用户列表
let userList = [
  {
    id: 0,
    username: 'admin',
    password: '123456',
    role: '管理员'
  },
  {
    id: 1,
    username: 'xu',
    password: '123'
  }
]

//测试
app.get('/api/test', (req, res) => {
  res.send({
    code: 200,
    message: '测试3'
  })
})

//登录接口，post请求，可以判断用户是否存在和密码是否正确，还可以包含多个用户，可以用postman单独测试这个接口
app.post('/api/login', (req, res) => {
  let { username, password } = req.body
  console.log(username, password)

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

app.listen(90, () => {
  console.log(90)
})