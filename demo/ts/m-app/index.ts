//类的装饰器，接收一个对象参数，对象参数可以包含一个components属性
//components属性的值表达要使用的组件
const Component = (obj: IComponent) => (target: any) => {
  Object.assign(target.prototype, obj)
}

//类属性的装饰器，可以设置属性的默认值
const Prop = (obj: IProp) => (target: any, key: string) => {
  target[key] = obj.default
}

//类方法的装饰器，类方法触发时，调用父组件传递过来的方法，参数是类方法的返回值
const Emit = (method: string) => (target: any, key: string, descriptor: any) => {
  let oldValue = descriptor.value

  descriptor.value = function() {
    let result = oldValue.apply(this, arguments)
    console.log(`触发父组件传递过来的方法：${method}(${JSON.stringify(result)})`)
  }
}

interface IComponent {
  components?: object
}

interface IProp {
  default: any
}

@Component({
  components: {
    Header: '组件'
  }
})
class Home {
  @Prop({ default: 'zhanwei' }) 
  name!: string

  @Emit('onClick')
  handleClick(id: number) {
    console.log('点击事件', this.name)
    return { id }
  }
}

let home = new Home()

//@ts-ignore
console.log(home.components)

console.log(home.name)

home.handleClick(1)