import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './components/Sidebar'
import List from './components/List'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentId: 0,
      currentList: []
    }
  }

  handleNav(currentId) {
    let { list } = this.state
    let currentList = list.find(item => item.id === currentId).list
    this.setState({
      currentId,
      currentList
    })
  }

  componentDidMount() {
    // axios({
    //   url: '/api/list'
    // }).then(res => {
    //   if (res.data.code === 200) {
    //     this.setState({
    //       list: res.data.data,
    //       currentList: res.data.data[0].list
    //     })
    //   }
    // })

    axios({
      url: '/api/mock'
    }).then(res => {
      console.log(res.data)
      if (res.data.code === 200) {
        this.setState({
          list: res.data.data,
          currentList: res.data.data[0].list
        })
      }
    })
  }

  render() {
    let { list, currentId, currentList } = this.state
    return (
      <div className="m-wrap">
        <Sidebar list={list} currentId={currentId} onClick={(id) => this.handleNav(id)}></Sidebar>
        <List currentList={currentList}></List>
      </div>
    )
  }
}
