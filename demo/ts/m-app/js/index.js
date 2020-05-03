"use strict";
//泛型类
class ArrayList {
    constructor() {
        this.array = [];
    }
    add(item) {
        this.array.push(item);
        this.size = this.array.length;
    }
    //共用一套逻辑
    print() {
        console.log(`全部数据:${this.array.join(' ')}`);
    }
}
//创建对象时才明确类型
let numberList = new ArrayList();
numberList.add(1); //如果是错误类型，会报错
numberList.add(2);
console.log(numberList.size);
numberList.print();
let strList = new ArrayList();
strList.add('xu');
strList.add('徐');
strList.add('hello');
console.log(strList.size);
strList.print();
