import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {
  render() {
    //对象的解构
    let { name = 'zhanwei', onClick = () => {}, className = "" } = this.props
    return (
      <span 
        className={`icon iconfont icon-${name} ${className}`}
        onClick={() => onClick()}></span>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string,  //限制name属性为字符串类型
  onClick: PropTypes.func,  //onClick必须是函数
  className: PropTypes.string, //显示className属性必须为字符
}
