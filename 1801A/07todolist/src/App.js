import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {
  state = {
    list: []
  }

  //向list数组里添加数据
  handleAdd(title) {
    //解构
    let { list } = this.state

    list.push({
      id: Date.now(),  //取当前时间的时间戳
      title: title,
      checked: false,  //不打勾
    })

    //更新list数组
    this.setState({
      list
    })
  }

  //点击复选框事件
  handleCheck(e, id) {
    let list = this.state.list
    //根据id查找下标
    let index = list.findIndex(item => item.id === id)
    //根据下标修改checked属性
    list[index].checked = e.target.checked

    //设置状态
    this.setState({
      list
    })
  }

  //删除
  handleDelete(id) {
    let list = this.state.list
    //找下标
    let index = list.findIndex(item => item.id === id)
    //删除
    list.splice(index, 1)

    //更新状态
    this.setState({
      list
    })
  }

  componentDidUpdate() {
    console.log('更新完')
    let list = this.state.list
    localStorage.setItem('list', JSON.stringify(list))
  }

  componentDidMount() {
    console.log('挂载完')
    let list = JSON.parse(localStorage.getItem('list')) || []
    this.setState({
      list
    })
  }

  render() {
    return (
      <div>
        <Header onAdd={(title) => this.handleAdd(title)}></Header>
        <List 
          title="正在进行" 
          checked={false} 
          list={this.state.list} 
          onCheck={(e, id) => this.handleCheck(e, id)}
          onDelete={(id) => this.handleDelete(id)}></List>
        <List 
          title="已经完成" 
          checked={true} 
          list={this.state.list} 
          onCheck={(e, id) => this.handleCheck(e, id)}
          onDelete={(id) => this.handleDelete(id)}></List>        
      </div>
    )
  }
}
