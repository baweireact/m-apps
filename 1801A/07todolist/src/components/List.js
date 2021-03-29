import React, { Component } from 'react'

export default class List extends Component {
  render() {
    //过滤list数组
    let list = this.props.list.filter(item => item.checked === this.props.checked)

    return (
      <div>
        <div>{this.props.title + "(" + list.length + ')'}</div>
        <div>
          {
            //渲染列表
            list.map(item => {
              return (
                <div key={item.id} className="m-list-item">
                  <label className="m-list-info">
                    <input checked={item.checked} onChange={(e) => this.props.onCheck(e, item.id)} type="checkbox"></input>
                    {item.title}
                  </label>
                  <button className="m-delete" onClick={() => this.props.onDelete(item.id)}>删除</button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
