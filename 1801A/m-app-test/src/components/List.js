import React, { Component } from 'react'


export default class List extends Component {

  //详情
  handleDetail(id) {
    console.log(id)
    this.props.history.push('/detail/' + id)
  }

  render() {
    return (
      <div>
        {/* 渲染两层的数组 */}
        {
          this.props.list.map(item => {
            return (
              <div key={item.id}>
                <div className="m-category-title">{item.title}</div>
                {
                  item.list.map(book => {
                    return (
                      <div key={book.id} onClick={() => this.handleDetail(book.id)}>{book.title}</div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}
