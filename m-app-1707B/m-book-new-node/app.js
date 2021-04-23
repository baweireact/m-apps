const express = require('express')
const app = express()
const { bookNavData, bookMallData, bookMallDetailData, taskList, news } = require('./data')
const { voice } = require('./data2')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

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

let addressList = []

let myBook = []

app.use(cors())

// parse various different custom JSON types as JSON
//app.use(bodyParser.json())

//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({
//   extended:false
// }));

// // parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// // parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// // parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.static('public'))

app.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, 1000)
})

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
  let index = myBook.findIndex(item => item.id === book.id)
  if (index >= 0) {
    myBook[index].count += book.count
  } else {
    myBook.push(book)
  }
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

app.get('/api/task_list', (req, res) => {
  res.send({
    code: 200,
    data: taskList,
    message: '任务'
  })
})

app.get('/api/news', (req, res) => {
  let { page, size, search = '' } = req.query
  let newsSearchResult = news.filter(item => item.name.includes(search))
  let start = (page - 1) * size
  let end = start + size * 1
  res.send({
    code: 200,
    data: newsSearchResult.slice(start, end),
    message: '新闻'
  })
})

app.get('/api/video', (req, res) => {
  fs.readdir(path.join(__dirname, 'public/video'), (err, files) => {
    let data = files.map(item => `/video/${item}`)
    res.send({
      code: 200,
      data,
      message: '视频列表'
    })
  })
})

app.get('/api/address_list', (req, res) => {
  res.send({
    code: 200,
    data: addressList,
    message: '地址列表'
  })
})

app.post('/api/update_address_list', (req, res) => {
  let { addressListNew } = req.body
  addressList = addressListNew
  res.send({
    code: 200,
    data: addressList,
    message: '地址列表更新成功'
  })
})

app.post('/api/voice', (req, res) => {
  let { pageNum, pageSize} = req.body
  console.log(req.body)
  // let body = {}
  // for (let key in req.body) {
  //   console.log(key)
  //   let temp = JSON.parse(key)
  //   console.log(temp)
  //   body = {...body, ...temp}
  // }
  // let { pageNum, pageSize} = body

  console.log(pageNum, pageSize)
  // let newsSearchResult = news.filter(item => item.name.includes(search))
  // let start = (page - 1) * size
  // let end = start + size * 1
  //newsSearchResult.slice(start, end),


  res.send({
    state: 1,
    data: voice,
    message: '查询成功'
  })
})


app.listen(85)
console.log(85)