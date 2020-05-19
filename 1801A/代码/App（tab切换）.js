import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
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

  handleNav(currentId) {
    this.setState({
      currentId
    })
  }

  render() {
    let { list, currentId } = this.state

    let listDom = []
    for (let i = 0; i < list.length; i++) {
      listDom.push(<div key={list[i].id} 
        className={currentId === list[i].id ? 'active' : ''} 
        onClick={() => this.handleNav(list[i].id)} >{list[i].title}</div>)
    }

    return (
      <div>
        {listDom}
      </div>
    )
  }
}


