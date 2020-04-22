//断言
function getLenght(str: string | number) {
  if ((str as string).length) {
    return (<string>str).length
  } else {
    return str.toString().length
  }
}

console.log(getLenght('acc'))
console.log(getLenght(12))

class Light {
  constructor() {
    this.init()
  }
  init() {
    return this.light(3, '绿灯')
      .then(() => {
        return this.light(2, '红灯')
      })
      .then(() => {
        return this.light(1, '黄灯')
      })
      .then(() => {
        this.init()
      })
      .catch(() => {
        console.log('失败了')
      })
  }
  light(time: number, type: string) {
    return new Promise((resolve, reject) => {
      let timer = setInterval(() => {
        console.log(type, time)
        time--
        if (time === 0) {
          clearInterval(timer)
          resolve()
          //reject()
        }
      }, 1000)
    })
  }
}
 
let ligth = new Light()