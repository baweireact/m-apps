import { createDecorator } from 'vue-class-component'

// export const Log = (name: string) => () => createDecorator((options: any, key) => {
//   console.log(options, key)
//   const oldMethod = options.methods[key]

//   options.methods[key] = function wrapperMethod(...args: any) {
//     console.log(`日志: ${key}(`, ...args, ')', name)
//     oldMethod.apply(this, args)
//   }
// })

export const Log = createDecorator((options:any, key:string) => {
  // Keep the original method for later.
  const originalMethod = options.methods[key]

  // Wrap the method with the logging logic.
  options.methods[key] = function wrapperMethod(...args:any) {
    // Print a log.
    console.log(`Invoked: ${key}(`, ...args, ')')

    // Invoke the original method.
    originalMethod.apply(this, args)
  }
})