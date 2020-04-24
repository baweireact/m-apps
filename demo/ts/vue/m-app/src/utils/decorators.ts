import { createDecorator } from 'vue-class-component'

export const Log = createDecorator((options:any, key:string) => {
  // 备份原始方法
  const originalMethod = options.methods[key]

  // 添加日志逻辑
  options.methods[key] = function wrapperMethod(...args:any) {
    // 打印日志
    console.log(`日志: ${key}(`, ...args, ')')

    // 执行原始方法
    originalMethod.apply(this, args)
  }
})


export const LogPlus = (payload: string) => createDecorator((options:any, key:string) => {
  // 备份原始方法
  const originalMethod = options.methods[key]

  // 添加日志逻辑
  options.methods[key] = function wrapperMethod(...args:any) {
    // 打印日志
    console.log(`${payload}日志: ${key}(`, ...args, ')')

    // 执行原始方法
    originalMethod.apply(this, args)
  }
})
