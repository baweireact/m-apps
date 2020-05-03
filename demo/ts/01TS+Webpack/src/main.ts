import { Person } from './Person'

class Teacher extends Person {
  constructor(name: string) {
    super(name)
  }
  job() {
    this.say()
    console.log(`hello!大家好！我是${this.name},我的工作是讲课！`)
  }
}

let teacher = new Teacher('徐同保')
teacher.job()