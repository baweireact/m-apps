console.log('开始时间：', Date())
let startTime = Date.now()


// let getDataIndex = 0

// //请求是否正确，错误则换个url重试
// let isRequestRight = true

// //请求尝试次数
// let requestTryCount = 0

//智能选股数组
let seletcStockArr = []

//包含主力净流入净额的股票列表
let stockListArr = []

//批量查询价格的结果数组
let queryPriceArr = []

//声音播放
let audio

//0:截止的今天，1：截止到昨天 2：截止到前天
//例如今天是2020年6月12日，想测试2020年6月10日的数据，应该设置endDay=2。只有endDay = 0时才会有主力净流入的相关数据
let endDay = 0

let myAction = {}

//智能选股
Object.assign(myAction, {
  selectStock(res, getDataIndex, stepIndex) {
    let item = {
      code: res.data.code,
      title: res.data.name, 
    }

    let klines = res.data.klines

    if (klines.length < 100 || item.title.indexOf('ST') >= 0) {
      return
    }
    
    //最新价
    let currentPrice = klines[klines.length - endDay - 1].split(',')[2] - 0
    let yesterdayPrice = klines[klines.length - endDay - 2].split(',')[2] - 0    

    if (currentPrice < yesterdayPrice) {
      return
    }

    //60代表最近60个交易日，item.split(',')[1]代表开盘价，item.split(',')[2]代表收盘价，item.split(',')[3]代表最高价，item.split(',')[4]代表最低价
    //.slice(klines.length - 60, klines.length - 1)
    //不统计当天的最高价，把之前days天的最高价保存到数组里
    let days = 30
    let list60 = klines.slice(klines.length - 60 - endDay - 1, klines.length - endDay - 1).map(item => item.split(',')[3] - 0)
    let list30 = klines.slice(klines.length - days - endDay - 1, klines.length - endDay - 1).map(item => item.split(',')[3] - 0)

    let stock = {
      //list,
      datetime: klines[klines.length - 1].split(',')[0],
      ...item
    } 



    //通过排序查找出最高价
    let sortList60 = list60.sort((a, b) => b - a)
    let sortList30 = list30.sort((a, b) => b - a)

    let currentStock = {}
    if (endDay === 0) {
      currentStock = stockListArr.find(item => item.f12 === stock.code)
    } else {
      let dayBeforeClosingPrice = klines[klines.length - endDay - 2].split(',')[2] - 0
      currentStock.f3 = ((currentPrice - dayBeforeClosingPrice) / dayBeforeClosingPrice * 100).toFixed(2)
      currentStock.f62 = 0
    }

    let moveMoney = (currentStock.f21 / 100000000).toFixed(2) - 0
    if (moveMoney < 100) {
      return
    }

    //排除掉，股价大于300元的、涨停的、创业板的、科创板的、B股的
    if (sortList30[0] <= currentPrice && currentPrice < 300 && currentStock.f3 < 9.9 && stock.code[0] !== '3' && stock.code.slice(0, 3) !== '688' && stock.code[0] !== '2' && stock.code[0] !== '9') {
      //let mainAdd = (currentStock.f62 / 10000).toFixed(2) - 0

      let shortDays = 10
      let historyPrice = klines[klines.length - shortDays - endDay].split(',')[2]
      let tenDayEarnedPercent = ((sortList30[0] - historyPrice) / historyPrice * 100).toFixed(2) - 0

      let shortKlines = JSON.parse(JSON.stringify(klines.slice(klines.length - shortDays - endDay, klines.length - endDay)))
      let minPricelist = shortKlines.map(item => item.split(',')[4] - 0)
      let minPrice = JSON.parse(JSON.stringify(minPricelist)).sort((a, b) => a - b)[0]
      let maxRisk = ((minPrice - historyPrice) / historyPrice * 100).toFixed(2) - 0
      
      let earendRisk = myAction.computeEarnedPercent(shortKlines)

      //let days = 30 
      if (sortList60[0] <= currentPrice) {
        days = 60
      } else {
        return
      }

      let c = '%c'
      let title = `序号： ${getDataIndex + stepIndex} ${c}${stock.title} (${stock.code}) ${c} 升浪：${c}${days}日 ${c}最新价: ${c}${currentPrice} ` + 
      `${c}涨幅：${c}${currentStock.f3}% ${endDay === 0 ? `${c}流值: ${c}${moveMoney}亿` : ''} ${c}${shortDays}日前：${c}${historyPrice} ` + 
      `${c}持股${shortDays}日: ${c}${tenDayEarnedPercent}% ${c}本金最低价跌幅：%c${maxRisk}% ` + 
      `${c}单日最低价跌幅:${c}${earendRisk.maxSingleDayRisk}% ${c}连续收盘价跌幅：${c}${earendRisk.maxSeriesRisk}%`

      let arg = [title, "color:red", "color:#000", "color:#f00", "color:#000", "color:#f00", "color:#000", "color:#f00", 
      "color:#000", "color:#f00", "color:#000", "color:#f00", "color:#000", "color:#f00",
      "color:#000", "color:#f00", "color:#000", "color:#f00"]
      if (endDay === 0) {
        arg.push("color:#000")
        arg.push("color:#f00")
      }
      console.info.apply(this, arg)
      if ((stock.code + '')[0] === '6') {
        console.log(`http://quote.eastmoney.com/sh${stock.code}.html`)
      } else {
        console.log(`http://quote.eastmoney.com/sz${stock.code}.html`)
      }
      
      
      let seletcStockItem = {
        title: title.replace(/%c/g, ''),

        order_number: getDataIndex + stepIndex,
        name: stock.title,
        code: stock.code,
        current_price: currentPrice,
        current_earned_percent: currentStock.f3,
        //main_add: mainAdd,
        moveMoney: moveMoney,
        some_days: shortDays,
        history_price: historyPrice,
        some_days_earned_percent: tenDayEarnedPercent,
        max_capital_risk: maxRisk,
        max_single_day_risk: earendRisk.maxSingleDayRisk,
        max_series_risk: earendRisk.maxSeriesRisk,
        datetime: stock.datetime
      }
      seletcStockArr.push(seletcStockItem)
    }
  },
  selectStock1(res, getDataIndex, stepIndex) {
    let item = {
      code: res.data.code,
      title: res.data.name, 
    }

    let klines = res.data.klines

    if (klines.length < 100 || item.title.indexOf('ST') >= 0) {
      return
    }
    
    //最新价
    let currentPrice = klines[klines.length - endDay - 1].split(',')[2] - 0

    //60代表最近60个交易日，item.split(',')[1]代表开盘价，item.split(',')[2]代表收盘价，item.split(',')[3]代表最高价，item.split(',')[4]代表最低价
    //.slice(klines.length - 60, klines.length - 1)
    //不统计当天的最高价，把之前days天的最高价保存到数组里
    let shortDays = 5
    let list60 = klines.slice(klines.length - 60 - endDay - shortDays - 1, klines.length - endDay - shortDays - 1).map(item => item.split(',')[3] - 0)

    let stock = {
      //list,
      datetime: klines[klines.length - 1].split(',')[0],
      ...item
    } 



    //通过排序查找出最高价
    let sortList60 = list60.sort((a, b) => b - a)
    let maxPrice = sortList60[0]
    let minPrice = sortList60[sortList60.length - 1]
    let range = ((maxPrice - minPrice) / minPrice * 100).toFixed(2) - 0
    if (range < 15) {
      let historyPrice = klines[klines.length - shortDays - endDay].split(',')[2]
      let tenDayEarnedPercent = ((currentPrice - historyPrice) / historyPrice * 100).toFixed(2) - 0
      if (tenDayEarnedPercent > 5) {
        console.log(`${stock.title} 当前价：${currentPrice}, ${shortDays}日前的价：${historyPrice},振幅：${range}%,最近${shortDays}日涨幅：${tenDayEarnedPercent}%`)
        if ((stock.code + '')[0] === '6') {
          console.log(`http://quote.eastmoney.com/sh${stock.code}.html`)
        } else {
          console.log(`http://quote.eastmoney.com/sz${stock.code}.html`)
        }
      }
    }


  },
  computeEarnedPercent(shortKlines) {
    let formatData = shortKlines.map(item => {
      let tempData = item.split(',')
      return {
        open: tempData[1],
        closing: tempData[2],
        high: tempData[3],
        low: tempData[4],
      }
    })

    for (let i = 0; i < formatData.length; i++) {
      if (i === 0) {
        formatData[i].earnedPercent = 0
        formatData[i].lowEarnedPercent = 0
      } else {
        formatData[i].earnedPercent = ((formatData[i].closing - formatData[i - 1].closing) / formatData[i - 1].closing * 100).toFixed(2) - 0
        formatData[i].lowEarnedPercent = ((formatData[i].low - formatData[i - 1].closing) / formatData[i - 1].closing * 100).toFixed(2) - 0
      }
    }
    let maxSingleDayRisk = JSON.parse(JSON.stringify(formatData)).sort((a, b) => a.lowEarnedPercent - b.lowEarnedPercent)[0].lowEarnedPercent
    //console.info(`单日最大跌幅：${maxSingleDayRisk}%`)

    let seriesRistArr = []
    let tempArr = []
    for (let i = 0; i < formatData.length; i++) {
      if (formatData[i].earnedPercent < 0) {
        tempArr.push(formatData[i].earnedPercent)
      } else {
        if (tempArr.length > 0) {
          seriesRistArr.push(JSON.parse(JSON.stringify(tempArr)))
          tempArr = []
        }
      }
    }
    //console.info(seriesRistArr)

    let maxSeriesRisk = 0
    for (let i = 0; i< seriesRistArr.length; i++) {
      let seriesRisk = seriesRistArr[i].reduce((total, item) => total + item, 0).toFixed(2) - 0
      if (seriesRisk < maxSeriesRisk) {
        maxSeriesRisk = seriesRisk
      }
    }
    //console.info(`最大连续跌幅：${maxSeriesRisk}%`)

    //console.info(formatData)
    return {
      maxSingleDayRisk,
      maxSeriesRisk
    }
  },
  handleSave() {
    seletcStockArr = seletcStockArr.map(item => {
      delete item.title
      return item
    })
    seletcStockArr.sort((a, b) => a.order_number - b.order_number)
    axios({
      url: 'http://localhost:85/api/stock/analyse',
      data: {
        list: seletcStockArr
      },
      method: 'post'
    }).then(res => {
      if (res.data.code === 200) {
        console.log('保存成功！')
      }
    })
    console.log(seletcStockArr)
  },
  initAudio() {
    audio = document.createElement("audio");
    audio.src = "alarm.mp3";
    audio.controls = true

    document.body.append(audio)
  },
  playAudio() {
    audio.play()
  },
  openAudioSwitch() {
    document.getElementById('m-audio-switch').innerHTML = '已经打开声音提示'
  },
  queryStockPrice() {
    stockPriceQueryList = stockPriceQueryList.map(item => {
      let index = Array.from(item).findIndex(charItem => charItem === '(') + 1
      return item.slice(index, index + 6)
    })
    console.log(stockPriceQueryList)
    myAction.queryPrice()
  },
  queryPrice: async () => {
    myAction.getData(stockPriceQueryList[getDataIndex])
    await new Promise((resolve) => {
      window.callback = (res) => {
        if (res.data && res.data.klines[0].split(',')[2] < 1500) {
          getDataIndex++
          if (res.data.klines.length > 0 && res.data.klines[0].split(',')[2] < 1500) {
            let length = res.data.klines.length
            //涨跌要等到下个交易日开盘后
            let currentPrice = res.data.klines[length - endDay - 1].split(',')[2]
            let yesterdayPrice = res.data.klines[length - endDay - 2].split(',')[2]
            let fluctuation = ((currentPrice - yesterdayPrice) / yesterdayPrice * 100).toFixed(2)
            
            if (fluctuation > 0) {
              console.log(`${res.data.name} 涨了 ${fluctuation}%`)
              queryPriceArr.push(`${res.data.name} 涨了 ${fluctuation}%`)
            } else {
              console.log(`${res.data.name} 跌了 ${fluctuation}%`)
              queryPriceArr.push(`${res.data.name} 跌了 ${fluctuation}%`)
            }
          }

          resolve(true)
        } else {
          //console.error('爬取数据失败！')
          isRequestRight = !isRequestRight
          resolve(true)
        }
      }
    })
    if (getDataIndex < stockPriceQueryList.length) {
      myAction.queryPrice()
    } else {
      console.log(JSON.stringify(queryPriceArr, null, 2))
      let winCount = queryPriceArr.filter(item => item.indexOf('涨了') >= 0).length
      let failCount = queryPriceArr.length - winCount
      console.log(`${winCount}支上涨，${failCount}支下跌，成功率:${(winCount / queryPriceArr.length * 100).toFixed(2)}%`)
    }
  },
})

//优化爬取过程
Object.assign(myAction, {
  getData(url, isRequestRight, callbackIndex) {
    let script = document.createElement('script');
    script.src = `http://99.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback${callbackIndex}&secid=${ isRequestRight ? '0' : '1' }.${url}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2CF63&klt=101&fqt=0&end=20500101&lmt=120&_=1589448975491`
    document.head.appendChild(script);
  },
  //根据url爬取数据，全部统计完数据后，打印分析结果
  mapUrl: (urlData, stepIndex, callbackIndex, taskOption) => {
    let getDataIndex = 0

    //请求是否正确，错误则换个url重试
    let isRequestRight = true

    //请求尝试次数
    let requestTryCount = 0

    let task = async () => {
      myAction.getData(urlData[getDataIndex], isRequestRight, callbackIndex)
      await new Promise((resolve) => {
        window['callback' + callbackIndex ] = (res) => {
          if (res.data && res.data.klines.length > 0 && res.data.klines[0].split(',')[2] < 1500) {
            getDataIndex++
            requestTryCount = 0
  
            //智能选股
            myAction.selectStock(res, getDataIndex, stepIndex)
  
            resolve(true)
          } else {
            //console.error('爬取数据失败！')
            isRequestRight = !isRequestRight
            requestTryCount++
            if (requestTryCount === 3) {
              getDataIndex++
              requestTryCount = 0
            }
            resolve(true)
          }
        }
      })
      if (getDataIndex < urlData.length) {
        task()
      } else {
        //console.log(`任务编号：${callbackIndex},已经完成！`)
        taskOption.done++
        if (taskOption.done === taskOption.total) {
          myAction.taskDone()
        }
      }
    }
    task()
  },
  taskDone() {
    console.log(`总数：${seletcStockArr.length}`)
    if (endDay === 0) {
      console.log(`\n主力净流入排序：`)
      console.log(JSON.stringify(seletcStockArr.map(item => item.title), null, 2))
    }
    
    console.log(`\n本金最低价跌幅排序：`)
    console.log(JSON.stringify(seletcStockArr.sort((a, b) => b.max_capital_risk - a.max_capital_risk).map(item => item.title), null, 2))
    console.log(`\n单日最低价跌幅排序：`)
    console.log(JSON.stringify(seletcStockArr.sort((a, b) => b.max_single_day_risk - a.max_single_day_risk).map(item => item.title), null, 2))

    console.log('结束时间：', Date())
    let interval = Date.now() - startTime
    console.log(myAction.formatDateTime(interval))
    
    myAction.playAudio()
  },
  formatDateTime(shijiancha) {
    let days = shijiancha / 1000 / 60 / 60 / 24;
    let daysRound = Math.floor(days);
    let hours = shijiancha / 1000 / 60 / 60 - (24 * daysRound);
    let hoursRound = Math.floor(hours);
    let minutes = shijiancha / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
    let minutesRound = Math.floor(minutes);
    let seconds = shijiancha / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
 
    return `总共耗时： ${minutesRound}分 ${Math.floor(seconds)}秒`
  }
})

Object.assign(myAction, {
  //根据分页股票列表，生成单支股票的爬取url列表
  addUrlListToScript(url) {
    var script = document.createElement('script')
    script.src = url
    document.head.appendChild(script);
  },
  async init() {
    let mapUrlListIndex = 0
    let urlData = []
    myAction.initAudio()
    await new Promise((resolve) => {
      let mapUrlList = async () => {
        if (urlListData.length > 0) {
          myAction.addUrlListToScript(urlListData[mapUrlListIndex])
        } else {
          resolve(true)
        }
        await new Promise((resolve) => {
          window.callback = (res) => {
            mapUrlListIndex++
            
            let isNoData = false
            if (isNoData) {
              stockListArr = [...resData.data.diff]
              urlData = [...urlData, ...resData.data.diff.map(item => item.f12)]
            } else {
              stockListArr = [...res.data.diff]
              urlData = [...urlData, ...res.data.diff.map(item => item.f12)]
            }
            
            resolve(true)
          }
        })
        if (mapUrlListIndex < urlListData.length) {
          mapUrlList()
        } else {
          console.log(urlData)
          resolve(true)
        }
      }
      mapUrlList()
    })
    let step = 50
    let count = Math.ceil(urlData.length / step)
    let taskOption = {
      done: 0,
      total: count
    }
    console.log(`任务总数:${count}`)
    for(let i = 0; i < count; i++) {
      let start = i * step
      let end = start + step
      let tempData = []
      if (end <= urlData.length) {
        tempData = urlData.slice(start, end)
      } else {
        tempData = urlData.slice(start)
      }
      //tempData = JSON.parse(JSON.stringify(tempData))
      myAction.mapUrl(tempData, start, i + 1, taskOption)
    }
    //myAction.otherTask()
  }
})

myAction.init()

//批量查询股票
//myAction.queryStockPrice()







