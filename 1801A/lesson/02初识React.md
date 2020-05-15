## 初识React

### 课程目标

1. React简介
2. 脚手架
3. hello world
4. JSX语法

### 知识点

#### 1.VSCode插件

ES7 React/Redux/GraphQL/React-Native snippets

快捷方式：
创建类组件: rcc
创建函数数据：raface
  
#### 2.添加样式

```js
import React from 'react'

const Home = () => {
  return (
    <div className="m-title">
      hello world!
    </div>
  )
}

export default Home
```


#### 3.hello world

类组件：
```js
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        hello world!
      </div>
    )
  }
}
```

函数组件：
```js
import React from 'react'

const Home = () => {
  return (
    <div>
      hello world!
    </div>
  )
}

export default Home

```

#### 4.JSX语法

React发明了JSX，利用HTML语法来创建虚拟DOM。

React的核心机制之一就是可以在内存中创建虚拟的DOM元素。以此来减少对实际DOM的操作从而提升性能。

JSX 即Javascript XML，它是对JavaScript 语法扩展。

我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中。

在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。

### 授课思路

![](./images/01初识React.png)    

### 案例作业

1.阅读官网  
2.使用脚手架创建项目  
3.编写hello world页面  
4.预习加加减减  

