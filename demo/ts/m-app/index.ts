const Component = (obj: IComponent) => (target: any) =>{
  Object.assign(target.prototype, obj)
}

interface IComponent {
  components: object
}

@Component({
  components: {
    Header: '组件'
  }
})
class Home {

}

let home = new Home()

//@ts-ignore
console.log(home.components)







