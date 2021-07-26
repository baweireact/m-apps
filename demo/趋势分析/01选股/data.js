let data = [
// {
//   code: 600001,   //股票代码
//   title: '持续上涨',  //趋势描述
//   price: 0,       //持股单价
//   count: 0,       //持股数量
//   totalPrice: 0,  //持股成本总价
//   currentPrice: 0, //当前价
//   earned: 0,      //盈利额
//   earnedPercent: 0,  //盈利百分比
//   stopReferenceEarned: 0, //盈利额止损参考
//   isClear: false,    //是否已清仓
//   isFirst: true,      //是否是刚建仓，从未加过仓
//   clearPrice: 0, //清仓价格
//   list: [50, 52, 55, 55.5, 56, 56.5, 60, 62, 64, 66, 67, 68, 70, 72, 75, 76, 77, 78, 80, 81, 82, 83, 85, 86, 88, 90, 91]
// },
// {
//   code: 600002,
//   title: '先涨后跌，然后持续下跌',
//   list: [50, 52, 55, 49.5, 50, 48, 45, 44, 43, 41]
// },
// {
//   code: 600003,
//   title: '持续下跌',
//   list: [50, 49, 48, 47, 46, 45, 44, 43, 42, 41]
// },
// {
//   code: 600004,
//   title: '先涨后跌，然后持续上涨',
//   list: [50, 52, 55, 57, 55, 52, 48, 45, 47, 51, 52, 55, 57, 58, 60, 62, 65, 68, 70]
// },
// {
//   code: 600005,
//   title: '横盘震荡',
//   list: [50, 52, 53, 52, 51, 50, 49, 48, 47, 50, 52, 54, 53, 52, 51, 49, 47, 50, 51]
// },
// {
//   code: 600006,
//   title: '低价位股',
//   list: [5.1, 5.2, 5.3, 5.2, 5.1, 5.3, 5.4, 5.5, 5.4, 5.6, 5.7, 5.8, 5.6, 5.7, 5.9, 6.1, 6.3, 6.5, 6.3]
// },
// {
//   code: 600006,
//   title: '高价位股',
//   list: [90, 92, 88, 90, 89, 95, 100, 98, 102, 106, 110, 115, 108, 105, 110, 114, 118, 122, 125]
//},
{
  code: '1',
  title: '测试',
  list: [50,48.24,51,53,53.4,54,52.6,50,49,47,49,47,45,44,43.6,42,40,38,41,42.15,45,46,47.2,50.52,55,57.1,59.28,61]
}     
]

//data = []



let urlData = [
  // //1.三安光电
  // "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600703&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588580618099",
  // //2.红塔证券
  // "http://85.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601236&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663341446",
  // //3.中信建投
  // "http://55.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601066&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588900785833",
  // //4.鱼跃医疗
  // "http://12.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002223&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588666530037",
  // //5.云南白药
  // "http://76.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000538&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663058445",
  // //6.隆基股份
  // "http://83.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601012&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662679511",
  // //7.广联达
  // "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002410&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588576042360",
  // //8.三一重工
  // "http://5.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600031&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088804125",
  // //9.海螺水泥
  // "http://79.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600585&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899776662",
  // //10.山东黄金
  // "http://28.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600547&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899863363",
  // //11.复兴医药
  // "http://43.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600196&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588899941521",
  // //12.国泰君安
  // "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601211&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088066857",
  // //13.纳思达
  // "http://4.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002180&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588924674422",
  // //14.洛阳钼业
  // "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.603993&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088116460",
  // //15.保利地产
  // "http://81.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600048&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088173026",
  // //16.中国中铁
  // "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601390&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089571755",  
  // //17.恒瑞医药
  // "http://23.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600276&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088964187",
  // //18.中国铁建
  // "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601186&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088696931",
  // //19.农业银行
  // "http://44.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601288&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089214966",
  // //20.海尔智家
  // "http://72.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600690&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588900711040",
  // //21.中国国旅
  // "http://39.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601888&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087521589",
  // //22.中国联通
  // "http://60.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600050&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088538102",
  // //23.伊利股份
  // "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600887&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087872158",
  // //24.新华保险
  // "http://95.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601336&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089388498",
   
  

  // //1.中信证券
  // "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600030&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663458022",
  // //2.招商银行
  // "http://25.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600036&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663208779",
  // //3.华泰证券
  // "http://68.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601688&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087654001",
  // //4.民生银行
  // "http://86.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600016&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088379374",
  // //5.中国银行
  // "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601988&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088475555",
  // //6.中国太保
  // "http://11.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601601&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089969842",
  // //7.中国神华
  // "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601088&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088637481",
  // //8.中国建筑
  // "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601668&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089325245",
  // //9.交通银行
  // "http://91.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601328&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089136409",
  // //10.工业富联
  // "http://40.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601138&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089087905",
  // //11.万华化学
  // "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600309&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087339396",
  // //12.工商银行
  // "http://8.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601398&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089519404",
  // //13.中国国航
  // "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601111&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088256813",
  // //14.上海机场
  // "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600009&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588663715991",
  // //15.中国中车
  // "http://57.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601766&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088853782",
  // //16.建设银行
  // "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601939&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088431122",
  // //17.海通证券
  // "http://92.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600837&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087406773",
  // //18.中国重工
  // "http://33.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601989&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089473446",
  // //19.兴业银行
  // "http://39.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601166&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087927823",
  // //20.华夏幸福
  // "http://20.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600340&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087994060",
  // //21.中国石化
  // "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600028&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089268894",
  // //22.浦发银行
  // "http://78.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.600000&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088911549",
  // //23.格力电器
  // "http://2.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000651&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1588662835295",
  // //24.光大银行
  // "http://27.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601818&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589088334053",
  // //25.中国石油
  // "http://33.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601857&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589089019815",
  // //26.中国人寿
  // "http://22.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601628&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087583929",
  // //27.中国平安
  // "http://30.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601318&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087730276",
  // //28.中国人保
  // "http://18.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=1.601319&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589087470867",

  // // 沪深300
  // // 天七锂业
  // "http://10.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002466&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347205470",
  // //平安银行
  // "http://61.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000001&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347402460",
  // //万科A
  // "http://77.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000002&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347455616",
  // //中兴通讯
  // "http://36.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000063&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347506292",
  // //华侨城A
  // "http://41.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000069&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589353815409",
  // //TCL科技
  // "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000100&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589353886113",
  // //中联重科
  // "http://3.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000157&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589353961105",
  // //申万宏源
  // "http://66.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000166&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354029581",
  // //美的集团
  // "http://50.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000333&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354086914",
  // //潍柴动力
  // "http://14.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000338&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354140598",
  // //东旭光电
  // "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000413&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354207185",
  // //渤海租赁
  // "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000415&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354257098",
  // //东阿阿胶
  // "http://73.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000423&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354411301",
  // //徐工机械
  // "http://87.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000425&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354476605",
  // //泸州老窖
  // "http://82.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000568&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354577531",
  // //长安汽车
  // "http://30.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000625&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354630617",
  // //天茂集团
  // "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000627&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354687813",
  // //攀钢钒钛
  // "http://89.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000629&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354743924",
  // //铜陵有色
  // "http://34.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000630&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589354802650",
  // //金科股份
  // "http://36.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000656&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589357849904",
  // //阳光城
  // "http://9.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000671&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589357978723",
  // //恒逸石化
  // "http://29.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000703&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358028314",
  // //河钢股份
  // "http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000709&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358091772",
  // //美锦能源
  // "http://62.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000723&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358141119",
  // //京东方A
  // "http://13.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000725&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358194636",
  // //国元证券
  // "http://74.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000728&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358241764",
  // //中航飞机
  // "http://45.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000768&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358289563",
  // //广发证券
  // "http://53.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000776&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358346749",
  // //长江证券
  // "http://27.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000783&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358410982",
  // //北新建材
  // "http://91.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000786&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589358456895",
  // //新希望
  // "http://51.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000876&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420531487",
  // //双汇发展
  // "http://4.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000895&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420585586",
  // //鞍钢股份
  // "http://81.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000898&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420654518",
  // //紫光股份
  // "http://26.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000938&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420709785",
  // //中南建投
  // "http://77.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000961&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420819613",
  // //华东医药
  // "http://83.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.000963&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420879430",
  // //招商蛇口
  // "http://63.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.001979&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589420961587",
  // //新和成
  // "http://6.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002001&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589421058643",
  // //华兰生物
  // "http://82.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002007&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589421113211",
  // //大族激光
  // "http://47.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002008&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589421172119",
  // //传化智联
  // "http://19.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002010&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424044806",
  // //苏宁易购
  // "http://97.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002024&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424128781",
  // //分众传媒
  // "http://31.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002027&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424181923",
  // //苏泊尔
  // "http://54.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002032&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424250603",
  // //美年健康
  // "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002044&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589347105066",
  // //三花智控
  // "http://86.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002050&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589424373815",  
  // //金螳螂
  // "http://28.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002081&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589445991311",
  // //韵达股份
  // "http://1.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002120&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446044715",
  // //宁波银行
  // "http://72.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002142&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446090274",
  // //荣盛发展
  // "http://54.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002146&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446171178",
  // //石基信息
  // "http://42.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002153&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=158944622371",
  // //中航光电
  // "http://96.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002179&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446271710",
  // //金凤科技
  // "http://68.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002202&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446325416",
  // //科大讯飞
  // "http://75.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002230&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446373151",
  // //大华股份
  // "http://82.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002236&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446424117",
  // //歌尔股份
  // "http://46.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002241&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446568427",
  // //上海莱士
  // "http://94.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002252&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446624152",
  // //东方雨虹
  // "http://32.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002271&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446687786",
  // //信立泰
  // "http://38.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002294&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446746229",
  // //海大集团
  // "http://12.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002311&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446820404",
  // //顺丰控股
  // "http://67.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002352&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446871085",
  // //延安必康
  // "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002411&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589446923465",
  // //海康威视
  // "http://16.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002415&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448386041",
  // //科伦药业
  // "http://35.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002422&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448438166",
  // //欧菲光
  // "http://31.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002456&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448504576",
  // //赣锋锂业
  // "http://80.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002460&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448558384",
  // //天齐锂业
  // "http://58.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002466&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448611217",
  // //申通快递
  // "http://59.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002468&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448698151",
  // //立讯精密
  // "http://88.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002475&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448748243",
  // //荣盛石化
  // "http://65.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002493&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448808578",
  // //老板电器
  // "http://45.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002508&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448873460",
  // //三七互娱
  // "http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002555&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448922316",
  // //巨人网络
  // "http://20.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002558&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448975491",

  //"http://17.push2his.eastmoney.com/api/qt/stock/kline/get?cb=callback&secid=0.002556&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt=101&fqt=0&end=20500101&lmt=120&_=1589448975491",
  //"002558",
  //"000596",
  //"000938",
  //"002475"
]


let urlListData = [
  //沪深300
  //按股票代码排序，1~5页
  // "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=1&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045724",
  // "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=2&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045422",
  // "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=3&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045891",
  // "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=4&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045910",
  // "http://92.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=5&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1589461045924",
  
  // //6~10页
  // "http://35.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=6&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590652699448",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=7&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802143",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=8&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802151",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=9&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802160",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=10&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802170",

  // //11~15页
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=11&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802536",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=12&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802548",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=13&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802558",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=14&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802771",
  // "http://15.push2.eastmoney.com/api/qt/clist/get?cb=callback&pn=15&pz=20&po=0&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f12&fs=b:BK0500+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45&_=1590656802780",

  //沪深300成分股，修改pz=300数值，可以调整爬取的数据量
  //"http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=300&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid=f62&fs=b:BK0500&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53056043&cb=callback&_=1591681315175",
  
  // "http://push2.eastmoney.com/api/qt/clist/get?pn=2&pz=50&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid=f62&fs=b:BK0500&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53056472&cb=callback&_=1591694162410",
  // "http://push2.eastmoney.com/api/qt/clist/get?pn=3&pz=50&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid=f62&fs=b:BK0500&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53056500&cb=callback&_=1591695006872",
  // "http://push2.eastmoney.com/api/qt/clist/get?pn=4&pz=50&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid=f62&fs=b:BK0500&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53056501&cb=callback&_=1591695040647",
  // "http://push2.eastmoney.com/api/qt/clist/get?pn=5&pz=50&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid=f62&fs=b:BK0500&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53056502&cb=callback&_=1591695088491",
  // "http://push2.eastmoney.com/api/qt/clist/get?pn=6&pz=50&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid=f62&fs=b:BK0500&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53056504&cb=callback&_=1591695143804",


  //沪深所有股票
  "http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=4000&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid0=f4001&fid=f62&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2,m:0+t:7+f:!2,m:1+t:3+f:!2&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53058491&cb=callback&_=1591754732878",
  //"http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=88&po=1&np=1&ut=b2884a393a59ad64002292a3e90d46a5&fltt=2&invt=2&fid0=f4001&fid=f62&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2,m:0+t:7+f:!2,m:1+t:3+f:!2&stat=1&fields=f12,f14,f2,f3,f62,f184,f66,f69,f72,f75,f78,f81,f84,f87,f204,f205,f124&rt=53059583&cb=callback&_=1591787505519",
]

let stockPriceQueryList = [



  "序号： 719 云南能投 (002053)  最新价: 7.25 涨幅：6.15% 主力: 198.62万 10日前：6.99 持股10日: 1.43% 本金最低价跌幅：-3% 单日最低价跌幅:-1.15% 连续收盘价跌幅：-0.57%",
  "序号： 141 信立泰 (002294)  最新价: 23.04 涨幅：6.27% 主力: 3058.37万 10日前：20.38 持股10日: 8.93% 本金最低价跌幅：-2.7% 单日最低价跌幅:-1.47% 连续收盘价跌幅：-2.27%",
  "序号： 650 ST创兴 (600193)  最新价: 4.41 涨幅：5% 主力: 265.39万 10日前：3.98 持股10日: 5.78% 本金最低价跌幅：-2.26% 单日最低价跌幅:-1.76% 连续收盘价跌幅：-1.77%",
  "序号： 689 常青股份 (603768)  最新价: 11.81 涨幅：2.16% 主力: 227.79万 10日前：11.17 持股10日: 5.37% 本金最低价跌幅：-3.13% 单日最低价跌幅:-1.88% 连续收盘价跌幅：-0.09%",
  "序号： 258 航天电器 (002025)  最新价: 28.56 涨幅：4.08% 主力: 1452.62万 10日前：28.05 持股10日: 1.5% 本金最低价跌幅：-4.1% 单日最低价跌幅:-1.97% 连续收盘价跌幅：-1.02%",
  "序号： 189 马应龙 (600993)  最新价: 18.62 涨幅：3.1% 主力: 2208.67万 10日前：17.42 持股10日: 5.91% 本金最低价跌幅：-4.25% 单日最低价跌幅:-2.09% 连续收盘价跌幅：-3.96%",
  "序号： 291 润都股份 (002923)  最新价: 19.49 涨幅：5.69% 主力: 1256.7万 10日前：17.46 持股10日: 9.62% 本金最低价跌幅：-2.52% 单日最低价跌幅:-2.15% 连续收盘价跌幅：-0.86%",
  "序号： 132 德展健康 (000813)  最新价: 6.12 涨幅：5.7% 主力: 3383.58万 10日前：5.37 持股10日: 9.31% 本金最低价跌幅：-2.79% 单日最低价跌幅:-2.33% 连续收盘价跌幅：-1.97%",
  "序号： 190 海翔药业 (002099)  最新价: 7.64 涨幅：2.83% 主力: 2178.24万 10日前：6.88 持股10日: 9.3% 本金最低价跌幅：-1.89% 单日最低价跌幅:-2.36% 连续收盘价跌幅：-0.44%",
  "序号： 2332 深圳华强 (000062)  最新价: 13.5 涨幅：4.81% 主力: -198.08万 10日前：12.30 持股10日: 7.32% 本金最低价跌幅：-2.52% 单日最低价跌幅:-2.46% 连续收盘价跌幅：-0.08%",
  "序号： 2150 ST厦华 (600870)  最新价: 3.41 涨幅：4.92% 主力: -143.54万 10日前：3.00 持股10日: 9.33% 本金最低价跌幅：-1.33% 单日最低价跌幅:-2.48% 连续收盘价跌幅：-1.24%",
  "序号： 3898 海格通信 (002465)  最新价: 13.6 涨幅：1.57% 主力: -15567.81万 10日前：12.33 持股10日: 8.6% 本金最低价跌幅：-2.84% 单日最低价跌幅:-2.50% 连续收盘价跌幅：-0.96%",
  "序号： 173 齐心集团 (002301)  最新价: 17.03 涨幅：4.93% 主力: 2495.77万 10日前：16.05 持股10日: 5.86% 本金最低价跌幅：-4.67% 单日最低价跌幅:-2.60% 连续收盘价跌幅：-0.56%",
  "序号： 995 ST南化 (600301)  最新价: 7.05 涨幅：2.92% 主力: 63.06万 10日前：6.63 持股10日: 4.52% 本金最低价跌幅：-4.37% 单日最低价跌幅:-2.61% 连续收盘价跌幅：-1.82%",
  "序号： 924 北方股份 (600262)  最新价: 18.27 涨幅：3.81% 主力: 83.62万 10日前：16.74 持股10日: 7.47% 本金最低价跌幅：-0.9% 单日最低价跌幅:-2.64% 连续收盘价跌幅：-0.29%",
  "序号： 615 好太太 (603848)  最新价: 14.84 涨幅：2.7% 主力: 311.66万 10日前：14.10 持股10日: 4.33% 本金最低价跌幅：-3.55% 单日最低价跌幅:-2.91% 连续收盘价跌幅：-2.14%",
  "序号： 430 欧普照明 (603515)  最新价: 27.77 涨幅：4.12% 主力: 647.37万 10日前：25.93 持股10日: 6.21% 本金最低价跌幅：-2.74% 单日最低价跌幅:-2.96% 连续收盘价跌幅：-0.89%",
  "序号： 130 北汽蓝谷 (600733)  最新价: 6.65 涨幅：3.58% 主力: 3395.82万 10日前：6.02 持股10日: 7.48% 本金最低价跌幅：-3.16% 单日最低价跌幅:-2.96% 连续收盘价跌幅：-0.16%",
  "序号： 55 七一二 (603712)  最新价: 34.29 涨幅：7.83% 主力: 7672.4万 10日前：29.46 持股10日: 11.34% 本金最低价跌幅：-3.09% 单日最低价跌幅:-2.99% 连续收盘价跌幅：-0.50%",
  "序号： 257 东方雨虹 (002271)  最新价: 41.4 涨幅：1.55% 主力: 1462.62万 10日前：39.01 持股10日: 5.82% 本金最低价跌幅：-4.49% 单日最低价跌幅:-3.00% 连续收盘价跌幅：-1.46%",
  "序号： 517 沙河股份 (000014)  最新价: 9.59 涨幅：4.24% 主力: 440.53万 10日前：8.81 持股10日: 7.83% 本金最低价跌幅：-1.59% 单日最低价跌幅:-3.04% 连续收盘价跌幅：-1.81%",
  "序号： 1827 国检集团 (603060)  最新价: 26.7 涨幅：0.41% 主力: -70.42万 10日前：23.08 持股10日: 15.21% 本金最低价跌幅：-3.16% 单日最低价跌幅:-3.16% 连续收盘价跌幅：-2.60%",
  "序号： 342 *ST湘电 (600416)  最新价: 14.39 涨幅：5.04% 主力: 964.24万 10日前：12.36 持股10日: 12.38% 本金最低价跌幅：-4.53% 单日最低价跌幅:-3.19% 连续收盘价跌幅：-3.59%",
  "序号： 240 福莱特 (601865)  最新价: 15.7 涨幅：3.29% 主力: 1613.4万 10日前：13.43 持股10日: 16.01% 本金最低价跌幅：-3.57% 单日最低价跌幅:-3.31% 连续收盘价跌幅：-1.53%",
  "序号： 224 电魂网络 (603258)  最新价: 43.18 涨幅：1.15% 主力: 1709.98万 10日前：39.55 持股10日: 8.14% 本金最低价跌幅：-3.84% 单日最低价跌幅:-3.37% 连续收盘价跌幅：-2.38%",
  "序号： 9 三七互娱 (002555)  最新价: 40.22 涨幅：4.93% 主力: 21717.39万 10日前：35.09 持股10日: 12.94% 本金最低价跌幅：-6.87% 单日最低价跌幅:-3.68% 连续收盘价跌幅：-5.79%",
  "序号： 89 航天机电 (600151)  最新价: 5.25 涨幅：6.06% 主力: 4812.28万 10日前：4.87 持股10日: 4.31% 本金最低价跌幅：-1.64% 单日最低价跌幅:-3.78% 连续收盘价跌幅：-3.38%",
  "序号： 2918 延长化建 (600248)  最新价: 4.57 涨幅：1.78% 主力: -492.63万 10日前：3.92 持股10日: 16.33% 本金最低价跌幅：-0.77% 单日最低价跌幅:-3.79% 连续收盘价跌幅：-0.76%",
  "序号： 167 嘉欣丝绸 (002404)  最新价: 6.52 涨幅：3.16% 主力: 2619.27万 10日前：6.06 持股10日: 7.43% 本金最低价跌幅：-1.98% 单日最低价跌幅:-4.04% 连续收盘价跌幅：-1.45%",
  "序号： 3436 亚玛顿 (002623)  最新价: 43.21 涨幅：2.42% 主力: -1332.44万 10日前：38.79 持股10日: 8.77% 本金最低价跌幅：-7.19% 单日最低价跌幅:-4.20% 连续收盘价跌幅：-5.91%",
  "序号： 148 周大生 (002867)  最新价: 22.45 涨幅：6.35% 主力: 2941.73万 10日前：20.79 持股10日: 2.45% 本金最低价跌幅：-4.04% 单日最低价跌幅:-4.36% 连续收盘价跌幅：-0.15%",
  "序号： 3773 飞龙股份 (002536)  最新价: 6.92 涨幅：3.59% 主力: -4408.62万 10日前：6.10 持股10日: 9.51% 本金最低价跌幅：-4.92% 单日最低价跌幅:-4.47% 连续收盘价跌幅：-0.65%",
  "序号： 14 华鑫股份 (600621)  最新价: 19.42 涨幅：6.94% 主力: 19420.38万 10日前：17.51 持股10日: 10.91% 本金最低价跌幅：-4.34% 单日最低价跌幅:-4.51% 连续收盘价跌幅：-0.06%",
  "序号： 2511 和科达 (002816)  最新价: 32.57 涨幅：1.18% 主力: -254.6万 10日前：29.67 持股10日: 8.53% 本金最低价跌幅：-4.75% 单日最低价跌幅:-4.75% 连续收盘价跌幅：-0.16%",
  "序号： 352 亚士创能 (603378)  最新价: 45.81 涨幅：4.92% 主力: 907.15万 10日前：40.97 持股10日: 9.54% 本金最低价跌幅：-4.81% 单日最低价跌幅:-4.81% 连续收盘价跌幅：-0.81%",
  "序号： 975 *ST友谊 (000679)  最新价: 3.9 涨幅：4.56% 主力: 68.35万 10日前：3.32 持股10日: 15.06% 本金最低价跌幅：-0.6% 单日最低价跌幅:-4.92% 连续收盘价跌幅：-1.98%",
  "序号： 1115 ST长投 (600119)  最新价: 7.38 涨幅：3.22% 主力: 31.67万 10日前：5.86 持股10日: 22.7% 本金最低价跌幅：-0.51% 单日最低价跌幅:-4.93% 连续收盘价跌幅：-4.48%",
  "序号： 2194 伯特利 (603596)  最新价: 33.85 涨幅：4.48% 主力: -154.87万 10日前：29.41 持股10日: 12.89% 本金最低价跌幅：-2.82% 单日最低价跌幅:-5.00% 连续收盘价跌幅：-1.56%",
  "序号： 3385 润达医疗 (603108)  最新价: 13.45 涨幅：4.83% 主力: -1195.97万 10日前：12.15 持股10日: 10.29% 本金最低价跌幅：-2.47% 单日最低价跌幅:-5.26% 连续收盘价跌幅：-2.14%",
  "序号： 123 南极电商 (002127)  最新价: 20.15 涨幅：5.72% 主力: 3516.28万 10日前：19.65 持股10日: 2.14% 本金最低价跌幅：-7.63% 单日最低价跌幅:-5.55% 连续收盘价跌幅：-0.57%",
  "序号： 332 百利科技 (603959)  最新价: 8.76 涨幅：6.83% 主力: 1030.56万 10日前：7.18 持股10日: 17.13% 本金最低价跌幅：-5.15% 单日最低价跌幅:-5.66% 连续收盘价跌幅：-8.05%",
  "序号： 51 蓝帆医疗 (002382)  最新价: 28.28 涨幅：9.02% 主力: 8221.97万 10日前：24.50 持股10日: 10.2% 本金最低价跌幅：-5.88% 单日最低价跌幅:-5.88% 连续收盘价跌幅：-0.82%",
  "序号： 3864 朗姿股份 (002612)  最新价: 12.88 涨幅：5.57% 主力: -9734.72万 10日前：7.87 持股10日: 55.02% 本金最低价跌幅：-3.05% 单日最低价跌幅:-7.46% 连续收盘价跌幅：0%",
  "序号： 230 众信旅游 (002707)  最新价: 7.22 涨幅：4.79% 主力: 1659.28万 10日前：6.82 持股10日: 5.57% 本金最低价跌幅：-13.78% 单日最低价跌幅:-9.97% 连续收盘价跌幅：-1.38%",
  "序号： 3649 海德股份 (000567)  最新价: 16.45 涨幅：6.89% 主力: -2470.53万 10日前：12.58 持股10日: 23.13% 本金最低价跌幅：-1.75% 单日最低价跌幅:-10.01% 连续收盘价跌幅：-1.43%"  


]





