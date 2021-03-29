import React, { Component } from 'react'
import List from '../../components/List'
import axios from 'axios'

export default class Home extends Component {

  state = {
    list: []
  }

  //挂载完声明周期，每次刷新都会走这个生命周期
  componentDidMount() {
    axios({
      url: '/api/list'
    }).then(res => {
      //判断状态码
      if (res.data.code === 200) {
        //存储状态
        this.setState({
          list: res.data.data
        })
      }
    })
  }

  render() {
    return (
      <div className="m-main">
        <List list={this.state.list}></List>
      </div>
    )
  }
}
