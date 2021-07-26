console.log('开始时间：', Date())

//交易单输出到数组
let dealingSlipArr = []

//利润亏损多少清仓
let clearSwitch = 0.2

//所有股票总盈利
let total = []

//单次交易在多少钱左右
let singleMoney = 7000

//单支股票平均持仓保存到这个数组
let totalHaveStockPriceArr = []

//加仓次数
let addCount = 0

//是否开始打印
let isStartLog = false

//是否打印详情
let isPrintDetail = false

//分析前多少天的数据，总共120天
let analyseDayCount = 0

let getDataIndex = 0

//请求是否正确，错误则换个url重试
let isRequestRight = true

//请求尝试次数
let requestTryCount = 0

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

//日志相关
Object.assign(myAction, {
  //打印日志
  printLog(item) {
    console.log(`序号：${item.index} ${item.title} 持股价格：${item.price.toFixed(2)} 持股数量: ${item.count} 持股成本总价:${item.totalPrice.toFixed(2)} ` +
    `市值：${(item.currentPrice * item.count).toFixed(2)} 当前价：${item.currentPrice} 盈利额：${item.earned.toFixed(2)} ` + 
    `盈利百分比：${(item.earnedPercent * 100).toFixed(2)}% ` +
    `涨幅${ item.historyPrice === 0 ? 0 : ((item.currentPrice - item.historyPrice) / item.historyPrice * 100).toFixed(2)}%`)
    item.totalHaveStockPrice += item.totalPrice.toFixed(2) - 0
  },
  //交易日志
  logList(item) {
    if (item.isClear) {
      return
    }
    myAction.printLog(item)
    item.haveStockDay++
  },
  //分类日志
  logCategory(item) {
    if (item.isClear) {
      return
    }
    console.log(`\n股票代码：${item.code} 趋势描述：${item.title} 交易天数：${item.list.length}`)  
  },
  //重写console.log 可以把交易单输出到数组
  initLog() {
    console.log = (function(oriLogFunc){
      return function() {
        //dealingSlipArr.push(arguments)
        if (isPrintDetail) {
          isStartLog = true
        }
        if ((arguments[0] + '').indexOf('以下是分析结果') >= 0) {
          isStartLog = true
        }
        if (isStartLog) {
          oriLogFunc.apply(console, arguments);
        }
      }
    })(console.log);
  }
})

//清仓加仓
Object.assign(myAction, {
  //清仓
  clearFn(item) {
    item.isClear = true
    item.clearPrice = item.currentPrice
    console.log(`利润亏损${clearSwitch * 100 }%，清仓!`)
    myAction.printLog(item)
    console.log('已清仓~~~~~~~~')
    item.clearCount++
    item.historyClearIndex = item.index
    item.stageEarnedArr.push(item.earned.toFixed(2) - 0)

    item.count = 0
    item.price = 0
    item.totalPrice = 0
    item.currentPrice = 0
    item.earned = 0
    item.earnedPercent = 0
    item.stopReferenceEarned = 0
  },
  //加仓
  addFn(item) {
    let count = parseInt(singleMoney / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }
    item.count += count
    item.totalPrice = item.totalPrice + count * item.currentPrice
    item.price = item.totalPrice / item.count
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0
    console.log(`加仓！数量:${count}`)
    addCount++
    item.addCount++
  },
  //如果加仓后盈利依然大于10%，则加仓，主要是防止加仓后跌停出现亏损，总市值控制在5万以内
  isNeedAdd(item) {
    let count = parseInt(singleMoney / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }
    let totalPrice = item.totalPrice + count * item.currentPrice
    let earnedPercent = (item.earned / totalPrice).toFixed(4) - 0
    if (earnedPercent > 0.1 && (item.count + count) * item.currentPrice < 50000) {
      return true
    } else {
      return false
    }
  }
})

//流程交易
Object.assign(myAction, {
  //交易
  computed(item, currentPrice) {
    //曾经挣的钱
    let alreadyEarned = item.stageEarnedArr.reduce((total, item) => total + item, 0)

    let isLastAlreadyEarned = true
    //看一下最后三次的盈利
    if (item.stageEarnedArr.length > 3) {
      isLastAlreadyEarned = item.stageEarnedArr.slice(item.stageEarnedArr.length - 3).reduce((total, item) => total + item, 0) > 0
    }

    //清仓数大于0, 之后的买入要格外小心，曾经挣的钱能支持一次跌停  && item.index - item.historyClearIndex > 20
    if (item.clearCount > 0 && item.count === 0) {
      //曾经挣的钱能支持一次跌停，且单价小于100,需要人工干预,再次买入价格相对于清仓价格，浮动大于5%
      if (currentPrice * 0.1 < alreadyEarned && currentPrice < 100 && Math.abs((currentPrice - item.clearPrice) / item.clearPrice) > 0.05 && isLastAlreadyEarned) {
        console.log('清仓后再次买入！曾经挣的钱能支持一次跌停，且单价小于100，再次买入价格相对于清仓价格，浮动大于5%')
        item.isClear = false
        item.price = currentPrice
        item.clearPrice = 0  //清仓价归零
        item.stopReferenceEarned = currentPrice
  
        //持股数量
        item.count = parseInt(singleMoney / (item.price * 100)) * 100
        if (item.count === 0) {
          item.count = 100
        }
  
        //持股总价
        item.totalPrice = item.price * item.count
      }
    }

    if (item.isClear) {
      return
    }

    //单支股票，只走一次
    if (item.isFirst) {
      if (currentPrice > 100) {
        console.log(`单价${currentPrice},太高了，不建议买！`)
        myAction.clearFn(item)
      }
      //持股单价
      item.price = currentPrice

      //持股数量
      item.count = parseInt(singleMoney / (item.price * 100)) * 100
      if (item.count === 0) {
        item.count = 100
      }

      //持股总价
      item.totalPrice = item.price * item.count

      item.isFirst = false
    }

    //上次的价格
    item.historyPrice = item.currentPrice
    //当前价
    item.currentPrice = currentPrice

    //盈利额
    item.earned = ((item.currentPrice - item.price) * item.count).toFixed(2) - 0

    //盈利百分百
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0

    //根据序号打断点
    // if (item.index === 82) {
    //   debugger
    // }

    //盈利大于200时，把利润保存起来做参考，以后如果利润亏损超过过了clearSwith（动态的值，如20%等），则清仓
    if (item.clearCount === 0) {  //从来没请过仓的情况
      if (item.stopReferenceEarned === 0 && item.earned >= 200) {
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      } else if (item.stopReferenceEarned >= 200 && ((item.earned - item.stopReferenceEarned) / item.stopReferenceEarned) <= 0 - clearSwitch) {
        //如果是首次买入，则不盈利不清仓，死磕到底
        if (item.earned >= 100) {
          myAction.clearFn(item)
        }
      } else if (item.earned > item.stopReferenceEarned) {
        //更新利润最高价位参考
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      }
    } else {
      //已经清仓过，以后操作要保证曾经挣的钱别再培进去
      //如果吃掉了曾经挣的钱的20%，则立马清仓
      if ((alreadyEarned * clearSwitch) + item.earned < 0 && alreadyEarned > 550) {
        myAction.clearFn(item)
      }

      if (item.stopReferenceEarned === 0 && item.earned >= 200) {
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      } else if (item.stopReferenceEarned >= 200 && ((item.earned - item.stopReferenceEarned) / item.stopReferenceEarned) <= 0 - clearSwitch) {
        myAction.clearFn(item)
      } else if (item.earned > item.stopReferenceEarned) {
        //更新利润最高价位参考
        item.stopReferenceEarned = item.earned.toFixed(2) - 0
      }
    }

    //加仓
    if (myAction.isNeedAdd(item)) {
      myAction.logList(item)
      myAction.addFn(item)
    }
  },
  //遍历全部
  dealAll(day = 0) {
    for (let i = 0; i < data.length; i++) {
      myAction.logCategory(data[i])
      data[i].index = day
      for (let j = day; j < data[i].list.length; j++) {
        data[i].index++
        if (data[i].list[0] > 100) {
          break;
        }
        //使用旧交易系统
        myAction.computed(data[i], data[i].list[j])

        //使用新交易系统
        //myAction.newDeal(data[i], data[i].list[j])
        myAction.logList(data[i])
        if (j === data[i].list.length - 1) {
          if (data[i].haveStockDay === 0) {
            break
          }
          if (data[i].count > 0) {
            data[i].stageEarnedArr.push(data[i].earned.toFixed(2) - 0)
          }
          let itemTotal = data[i].stageEarnedArr.reduce((total, item) => total + item, 0)
          let averageStockPrice = (data[i].totalHaveStockPrice / data[i].haveStockDay).toFixed(2) - 0
          console.log(`单支股票总盈利：${itemTotal}, 持股天数：${data[i].haveStockDay},平均持仓：${ averageStockPrice } 详情:`, data[i].stageEarnedArr)
          total.push({...data[i], earend: itemTotal, averageStockPrice } )
          totalHaveStockPriceArr.push(averageStockPrice)
          break
        }
      }
    }
  },
  //使用前三个月的数据做分析，决定是否可以买
  analyseData(day) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].list.length - day; j++) {
        data[i].index++
        myAction.computed(data[i], data[i].list[j])
        if (j === data[i].list.length - day - 1) {
          if (data[i].count > 0) {
            data[i].stageEarnedArr.push(data[i].earned.toFixed(2) - 0)
          }
          let itemTotal = data[i].stageEarnedArr.reduce((total, item) => total + item, 0)
          let averageStockPrice = (data[i].totalHaveStockPrice / data[i].haveStockDay).toFixed(2) - 0
          if (data[i].stageEarnedArr.length > 1 && itemTotal > 0) {
            return true
          }
            
          return false

        }
      }
    }
  }
})

//新交易系统
Object.assign(myAction, {
  newDeal(item, currentPrice) {
    console.log(currentPrice)
    //单支股票，只走一次
    if (item.isFirst) {
      if (currentPrice > 100) {
        console.log(`单价${currentPrice},太高了，不建议买！`)
        myAction.clearFn(item)
      }
      //持股单价
      item.price = currentPrice
      item.lastPrice = currentPrice

      //持股数量
      item.count = parseInt(singleMoney / (item.price * 100)) * 100
      if (item.count === 0) {
        item.count = 100
      }

      //持股总价
      item.totalPrice = item.price * item.count

      item.isFirst = false
    }

    //上次的价格
    item.historyPrice = item.currentPrice
    //当前价
    item.currentPrice = currentPrice

    //盈利额
    item.earned = ((item.currentPrice - item.price) * item.count).toFixed(2) - 0

    //盈利百分百
    item.earnedPercent = (item.earned / item.totalPrice).toFixed(4) - 0

    //加仓
    if (myAction.newDealIsNeedAdd(item)) {
      myAction.logList(item)
      myAction.addFn(item)
    }
  },
  newDealIsNeedAdd(item) {
    let count = parseInt(singleMoney / (item.currentPrice * 100)) * 100
    if (count === 0) {
      count = 100
    }

    if ((item.currentPrice - item.lastPrice) / item.lastPrice < -0.05 && (item.count + count) * item.currentPrice < 50000) {
      return true
    } else {
      return false
    }
  }
})

//格式化数据
Object.assign(myAction, {
  //格式化数据
  formatData() {
    for(let i = 0; i< data.length; i++) {
      let init = {
        index: 0,   //序号
        historyClearIndex: 0,  //清仓时的序号
        price: 0,       //持股单价,买入价格
        lastPrice: 0,   //最后一次买入价
        count: 0,       //持股数量
        totalPrice: 0,  //持股成本总价
        historyPrice: 0,  //上个交易日的价格
        currentPrice: 0,   //当前价
        earned: 0,   //盈利额
        earnedPercent: 0,   //盈利百分比
        stopReferenceEarned: 0,  //盈利额止损参考
        isClear: false,   //是否已清仓
        isFirst: true,    //是否是刚建仓，从未加过仓
        clearPrice: 0,    //清仓价格
        stageEarnedArr: [],  //阶段盈利数组，每次清仓时添加一个，跑完一支股票的所有数据，最新的盈亏也会添加进去
        clearCount: 0,    //清仓数
        addCount: 0,      //加仓次数
        haveStockDay: 0,  //持股天数
        totalHaveStockPrice: 0, //持股总成品累加，用于算平均持仓
      }
      data[i] = {...data[i], ...init }
    }
  }
})

//智能选股
Object.assign(myAction, {
  selectStock(res) {
    let item = {
      code: res.data.code,
      title: res.data.name, 
    }

    let klines = res.data.klines
    if (klines.length < 100) {
      return
    }

    //60代表最近60个交易日，item.split(',')[1]代表开盘价，item.split(',')[2]代表收盘价，item.split(',')[3]代表最高价，item.split(',')[4]代表最低价
    //.slice(klines.length - 60, klines.length - 1)
    let days = 60
    //不统计当天的最高价，把之前days天的最高价保存到数组里
    let list = klines.slice(klines.length - days - endDay - 1, klines.length - endDay - 1).map(item => item.split(',')[3] - 0)

    let stock = {
      list,
      datetime: klines[klines.length - 1].split(',')[0],
      ...item
    } 

    //最新价
    let currentPrice = klines[klines.length - endDay - 1].split(',')[2] - 0

    //通过排序查找出最高价,深拷贝,防止影响原数据
    let sortList = JSON.parse(JSON.stringify(list)).sort((a, b) => b - a)

    let currentStock = {}
    if (endDay === 0) {
      currentStock = stockListArr.find(item => item.f12 === stock.code)
    } else {
      let dayBeforeClosingPrice = klines[klines.length - endDay - 2].split(',')[2] - 0
      currentStock.f3 = ((currentPrice - dayBeforeClosingPrice) / dayBeforeClosingPrice * 100).toFixed(2)
      currentStock.f62 = 0
    }

    //排除掉，股价大于100元的、涨停的、创业板的、科创板的、B股的
    if (sortList[0] <= currentPrice && currentPrice < 100 && currentStock.f3 < 9.9 && stock.code[0] !== '3' && stock.code.slice(0, 3) !== '688' && stock.code[0] !== '2' && stock.code[0] !== '9') {
      let mainAdd = (currentStock.f62 / 10000).toFixed(2) - 0
      let shortDays = 10
      let historyPrice = klines[klines.length - shortDays - endDay].split(',')[2]
      let tenDayEarnedPercent = ((sortList[0] - historyPrice) / historyPrice * 100).toFixed(2) - 0

      let shortKlines = JSON.parse(JSON.stringify(klines.slice(klines.length - shortDays - endDay, klines.length - endDay)))
      let minPricelist = shortKlines.map(item => item.split(',')[4] - 0)
      let minPrice = JSON.parse(JSON.stringify(minPricelist)).sort((a, b) => a - b)[0]
      let maxRisk = ((minPrice - historyPrice) / historyPrice * 100).toFixed(2) - 0
      
      let earendRisk = myAction.computeEarnedPercent(shortKlines)

      let c = '%c'
      let title = `序号： ${getDataIndex} ${c}${stock.title} (${stock.code}) ${c} 最新价: ${c}${currentPrice} ` + 
      `${c}涨幅：${c}${currentStock.f3}% ${endDay === 0 ? `${c}主力: ${c}${mainAdd}万` : ''} ${c}${shortDays}日前：${c}${historyPrice} ` + 
      `${c}持股${shortDays}日: ${c}${tenDayEarnedPercent}% ${c}本金最低价跌幅：%c${maxRisk}% ` + 
      `${c}单日最低价跌幅:${c}${earendRisk.maxSingleDayRisk}% ${c}连续收盘价跌幅：${c}${earendRisk.maxSeriesRisk}%`

      let arg = [title, "color:red", "color:#000", "color:#f00", "color:#000", "color:#f00", "color:#000", "color:#f00", 
      "color:#000", "color:#f00", "color:#000", "color:#f00", "color:#000", "color:#f00",
      "color:#000", "color:#f00"]
      if (endDay === 0) {
        arg.push("color:#000")
        arg.push("color:#f00")
      }
      console.info.apply(this, arg)
      
      let seletcStockItem = {
        title: title.replace(/%c/g, ''),

        order_number: getDataIndex,
        name: stock.title,
        code: stock.code,
        current_price: currentPrice,
        current_earned_percent: currentStock.f3,
        main_add: mainAdd,
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
  //正常跑一遍数据
  run(res) {
    data = []

    let item = {
      code: res.data.code,
      title: res.data.name, 
    }

    data.push({
      list: res.data.klines.map(item => item.split(',')[2] - 0),
      ...item
    })

    if (analyseDayCount > 0) {
      myAction.formatData()
      if (myAction.analyseData(analyseDayCount)) {
        myAction.formatData()
        myAction.dealAll(analyseDayCount)
      }
    } else {
      myAction.formatData()
      myAction.dealAll()
    }
  },
  //移动着跑数据
  moveRun(res) {
    let list = res.data.klines.map(item => item.split(',')[2] - 0)
    for (let i = 0; i < list.length / 2; i++) {
      this.stepRun(res, list.slice(i, i + 60))
    }
  },
  stepRun(res, list) {
    data = []

    let item = {
      code: res.data.code,
      title: res.data.name, 
    }

    data.push({
      list,
      ...item
    })
    myAction.formatData()
    myAction.dealAll()
  },
  getData(url) {
    var script = document.createElement('script');
    script.src = `http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=${ isRequestRight ? '0' : '1' }.${url}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2CF63&klt=101&fqt=0&end=20500101&lmt=120&_=1589448975491`
    document.head.appendChild(script);
  },
  //根据url爬取数据，全部统计完数据后，打印分析结果
  mapUrl: async () => {
    myAction.getData(urlData[getDataIndex])
    await new Promise((resolve) => {
      window.callback = (res) => {
        if (res.data && res.data.klines.length > 0 && res.data.klines[0].split(',')[2] < 1500) {
          getDataIndex++
          requestTryCount = 0
          //正常跑数据
          //myAction.run(res)
          //移动这跑数据
          //myAction.moveRun(res)

          //智能选股
          myAction.selectStock(res)

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
      myAction.mapUrl()
    } else {
      let sum = total.reduce((total, item) => total + item.earend, 0)
      
      //“以下是分析结果”文案不要改，作为是否打印详情的标识位
      console.log('以下是分析结果')
      console.log(`总盈利：${sum},  操作的股票(${total.length}支):${total.map(item => `${item.title}`).join(' ')}` )
      console.log(`排序后的详细盈利记录:`)
      //赚钱的股票
      let earnedDetail = total.sort((a, b) => b.earend - a.earend).filter(item => item.earend > 0).map(item => `${item.title}(持股天数：${item.haveStockDay}, ` + 
      `平均持仓：${item.averageStockPrice},清仓次数：${item.clearCount},加仓次数：${item.addCount},收益率：${(item.earend / item.averageStockPrice * 100).toFixed(2)}%):${item.earend}`).join('，\n')
      console.log(`%c${earnedDetail}`, 'color:red;')

      //赔钱的股票
      let loseMoneyDetail = total.sort((a, b) => b.earend - a.earend).filter(item => item.earend <= 0).map(item => `${item.title}(持股天数：${item.haveStockDay}, ` + 
      `平均持仓：${item.averageStockPrice},清仓次数：${item.clearCount},加仓次数：${item.addCount},收益率：${(item.earend / item.averageStockPrice * 100).toFixed(2)}%):${item.earend}`).join('，\n')
      console.log(`%c${loseMoneyDetail}`, 'color:green;' )

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
      
      myAction.playAudio()

      if (totalHaveStockPriceArr.length === 0) {
        return
      }

      let buyUseMoney =  totalHaveStockPriceArr.reduce((total, item) => total + item, 0).toFixed(2) - 0
      console.log(`总共花了多少钱:${buyUseMoney}，收益率:${(sum / buyUseMoney * 100).toFixed(2) - 0}%，加仓次数:${addCount}`)
      //打印交易单数组
      //console.log(JSON.stringify(dealingSlipArr, null, 2))

      console.log(`结束!`)
    }
  },
  mapUrlFast() {
    window.callback = (res) => {
      getDataIndex++
      myAction.run(res)
    }
    for(let i = 0; i < urlData.length; i++) {
      myAction.getData(urlData[i])
    }
    let timer = setInterval(() => {
      if (getDataIndex === urlData.length) {
        let sum = total.reduce((total, item) => total + item.earend, 0)
        console.log(`\n总盈利：${sum}， 详细:`, total)
      
        let buyUseMoney =  totalHaveStockPriceArr.reduce((total, item) => total + item, 0)
        console.log(`总共花了多少钱:${buyUseMoney}，收益率:${(sum / buyUseMoney * 100).toFixed(2) - 0}%，加仓次数:${addCount}`)
        //打印交易单数组
        //console.log(JSON.stringify(dealingSlipArr, null, 2))
  
        console.log('结束', getDataIndex)
        clearInterval(timer)
      }
    }, 100);
  },
  //去重
  unique() {      
    var res = [];      
    var json = {};      
    for(var i = 0; i < this.length; i++){      
        if(!json[this[i]]){      
            res.push(this[i]);      
            json[this[i]] = 1;      
        } else {
          console.log(`有重复的url：${this[i]}`)
          debugger
        }      
    }      
    return res;      
  },
  formatUrlData() {
    urlData = myAction.unique.apply(urlData)
  }
})

let mapUrlListIndex = 0

Object.assign(myAction, {
  //根据分页股票列表，生成单支股票的爬取url列表
  addUrlListToScript(url) {
    var script = document.createElement('script')
    script.src = url
    document.head.appendChild(script);
  },
  //根据url爬取数据，全部统计完数据后，打印分析结果
  // mapUrlList: async () => {
  //   myAction.addUrlListToScript(urlListData[mapUrlListIndex])
  //   await new Promise((resolve) => {
  //     window.callback = (res) => {
  //       mapUrlListIndex++
  //       console.log(res)
  //       urlData = [...urlData, ...res.data.diff.map(item => item.f2)]
  //       resolve(true)
  //     }
  //   })
  //   if (mapUrlListIndex < urlListData.length) {
  //     myAction.mapUrlList()
  //   } else {
  //     console.log(`结束!`)
  //   }
  // },
  async init() {
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
    myAction.initLog()
    myAction.formatUrlData()
    myAction.mapUrl()
  }
})

myAction.init()

//批量查询股票
//myAction.queryStockPrice()



//myAction.mapUrlFast()




if (false) {
  myAction.formatData()
  myAction.dealAll()
}







