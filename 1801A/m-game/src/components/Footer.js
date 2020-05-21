import React, { Component } from 'react'

export default class Footer extends Component {
  state = {
    currentId: '',
    list: [
      {
        id: 0,
        title: '大',
        value: 1
      },
      {
        id: 1,
        title: '豹子',
        value: 2
      },
      {
        id: 2,
        title: '小',
        value: 0
      }
    ]
  }
  handleTouchStart(currentId) {
    this.setState({
      currentId
    })
  }

  handleTouchEnd() {
    this.setState({
      currentId: ''
    })
  }

  render() {
    return (
      <div className="m-footer">
        {
          this.state.list.map((item) => {
            return (
              <div key={item.id} className="m-footer-item">
                <span
                  className={"m-btn " + ( this.state.currentId === item.id ? 'active' : '')} 
                  onClick={() => this.props.onStart(item.value)} 
                  onTouchStart={() => this.handleTouchStart(item.id)}
                  onTouchEnd={() => this.handleTouchEnd()}>{item.title}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
