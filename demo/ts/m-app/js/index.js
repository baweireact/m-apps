"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//类的装饰器，接收一个对象参数，对象参数可以包含一个components属性
//components属性的值表达要使用的组件
const Component = (obj) => (target) => {
    Object.assign(target.prototype, obj);
};
//类属性的装饰器，可以设置属性的默认值
const Prop = (obj) => (target, key) => {
    target[key] = obj.default;
};
//类方法的装饰器，类方法触发时，调用父组件传递过来的方法，参数是类方法的返回值
const Emit = (method) => (target, key, descriptor) => {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        let result = oldValue.apply(this, arguments);
        console.log(`触发父组件传递过来的方法：${method}(${JSON.stringify(result)})`);
    };
};
let Home = class Home {
    handleClick(id) {
        console.log('点击事件', this.name);
        return { id };
    }
};
__decorate([
    Prop({ default: 'zhanwei' })
], Home.prototype, "name", void 0);
__decorate([
    Emit('onClick')
], Home.prototype, "handleClick", null);
Home = __decorate([
    Component({
        components: {
            Header: '组件'
        }
    })
], Home);
let home = new Home();
//@ts-ignore
console.log(home.components);
console.log(home.name);
home.handleClick(1);
