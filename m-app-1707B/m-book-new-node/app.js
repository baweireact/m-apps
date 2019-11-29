const express = require('express')
const app = express()
const { bookNavData, bookMallData, bookMallDetailData } = require('./data')
const bodyParser = require('body-parser')
const cors = require('cors')

//用户列表
let userList = [{
  id: '001',
  username: 'admin',
  password: '123456'
}, {
  id: '002',
  username: 'xu',
  password: '123'
}]

app.use(cors())
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
    message: '导航'
  })
})

app.get('/api/list', (req, res) => {
  let { id } = req.query
  res.send({
    code: 200,
    data: bookMallData[id].list,
    message: '列表'
  })
})

app.listen(85)
console.log(85)