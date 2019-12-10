const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { bookNavData, bookMallData, bookMallDetailData, news } = require('./data')
const app = express()

//跨域  https://www.npmjs.com/package/cors
app.use(cors())

//解析post请求
app.use(bodyParser.json())

app.use(express.static('public'))

//延迟函数
app.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, 1000)
})

//用户列表 作业：注册 修改密码
let userList = [{
  id: 0,
  username: 'admin',
  password: '123456'
}, {
  id: 1,
  username: 'admin2',
  password: '123'
}]

//书包,存到后端，是为了刷新后书包还存在
let myBook = []

//登录，多用户，验证用户是否存在，和密码错误
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

//列表，自动添加一个字段叫is_in_my_book true:已收藏  false:未收藏
app.get('/api/list', (req, res) => {
  let { id } = req.query
  let data = bookMallData.find(item => item.id == id).list
  //
  data.forEach(item => {
    item.is_in_my_book = myBook.findIndex(book => book.id === item.id) >= 0
  })
  res.send({
    code: 200,
    data,
    message: '列表'
  })
})

app.get('/api/list_all', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '列表全部数据'
  })
})

//详情，自动添加一个字段叫is_in_my_book true:已收藏  false:未收藏
app.get('/api/detail', (req, res) => {
  let { id } = req.query
  let detail
  bookMallDetailData.forEach(item => {
    item.list.forEach(book => {
      if (book.id == id) {
        detail = book
        detail.is_in_my_book = myBook.findIndex(bookItem => bookItem.id === book.id) >= 0
      }
    })
  })
  res.send({
    code: 200,
    data: detail,
    message: '详情'
  })
})

//添加
app.post('/api/add', (req, res) => {
  let { book } = req.body
  myBook.push(book)
  res.send({
    code: 200,
    data: myBook,
    message: '收藏成功'
  })
})

//获取书包
app.get('/api/my_book', (req, res) => {
  res.send({
    code: 200,
    data: myBook,
    message: '书包'
  })
})

//更新
app.post('/api/update', (req, res) => {
  let { myBookNew } = req.body
  myBook = myBookNew
  res.send({
    code: 200,
    data: myBook,
    message: '更新成功'
  })
})

//新闻
app.get('/api/news', (req, res) => {
  let { page, size, search = '' } = req.query
  let searchResult = news.filter(item => {
    return item.name.includes(search)
  })
  console.log(search)
  let start = (page - 1) * size
  let end = start + size * 1

  res.send({
    code: 200,
    data: searchResult.slice(start, end),
    message: '新闻'
  })
})

app.listen(86)

console.log(86)