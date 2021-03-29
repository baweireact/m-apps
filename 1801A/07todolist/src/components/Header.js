import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    title: ''
  }

  //受控组件回调函数
  handleInput(e) {
    this.setState({
      title: e.target.value
    })
  }

  //监听回车事件
  handleEnter(e) {
    //点击回车按钮是keyCode=13，13是回车键的ASCII码
    if (e.keyCode === 13) {
      //子组件和父组件通讯
      this.props.onAdd(this.state.title)
      this.setState({
        title: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.title} 
          onChange={(e) => this.handleInput(e)} 
          onKeyUp={(e) => this.handleEnter(e)}
          placeholder="请输入要做的事情"></input>
      </div>
    )
  }
}
