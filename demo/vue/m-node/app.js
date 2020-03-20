const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const { bookMallData, bookMallDetailData } = require('./data')

const app = express()

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

let myBooks = []

app.use(history())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

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

app.get('/api/list', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '列表'
  })
})

app.post('/api/my_books', (req, res) => {
  let { book } = req.body
  console.log(book)
  let index = myBooks.findIndex(item => item.id === book.id)
  if (index >= 0) {
    myBooks[index].count += book.count
  } else {
    myBooks.push(book)
  }
  
  res.send({
    code: 200,
    data: myBooks,
    message: '添加成功'
  })
})

app.listen(81, () => {
  console.log(81)
})








