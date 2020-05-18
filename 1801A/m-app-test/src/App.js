import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    //状态
    this.state = {
      list: [
        {
          id: 0,
          title: '武侠'
        },
        {
          id: 1,
          title: '都市'
        },
        {
          id: 2,
          title: '科幻'
        }
      ],
      currentId: 0
    }
  }

  //修改currentId
  handleNav(currentId) {
    this.setState({
      currentId
    })
  }

  render() {
    //结构状态
    let { list, currentId } = this.state

    //map渲染列表，tab切换
    let listDom = list.map(item => {
      return (
        <div className={`m-nav-item ${ item.id === currentId ? 'active' : '' }`} 
          onClick={ () => this.handleNav(item.id) } key={item.id}>
          {item.title}
        </div>
      )
    })

    return (
      <div>
        {listDom}
      </div>
    )
  }
}
