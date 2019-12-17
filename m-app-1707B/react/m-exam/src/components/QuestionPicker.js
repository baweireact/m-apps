import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPicker extends Component {
  //选择答案
  handleSelect(item, result) {
    let { yes, no } = this.props
    if (item === result) {
      this.props.onSetState(['yes'], yes + 1)
    } else {
      this.props.onSetState(['no'], no + 1)
    }
  }
  //渲染选项
  renderOptionList(result) {
    let { type } = this.props
    let optionList
    if (type === 'compare') {
      optionList = ['>', '=', '<', 'None']
    } else {
      optionList = []
      optionList.push(result)
      for (let i = 0; i < 3; i++) {
        optionList.push(parseInt(Math.random() * 100, 10))
      }
    }
    //乱序
    optionList.sort(() => {
      return Math.random() - 0.5
    })
    return optionList.map((item, index) => (
      <div key={index} onClick={this.handleSelect.bind(this, item, result)} className="m-option-item">{index + 1}) {item}</div>
    ))
  }
  //随机生成数字并计算结果
  nextQuestion() {
    let { type } = this.props
    let num1 = parseInt(Math.random() * 100, 10)
    let num2 = parseInt(Math.random() * 100, 10)
    let result, typeSign
    switch (type) {
      case 'add':
        result = num1 + num2
        typeSign = '+'
        break;
      case 'sub':
        result = num1 - num2
        typeSign = '-'
        break;
      case 'multi':
        result = num1 * num2
        typeSign = 'x'
        break;
      case 'compare':
        let temp = num1 - num2
        if (temp === 0) {
          result = '='
        } else if (temp > 0) {
          result = '>'
        } else {
          result = '<'
        }
        typeSign = '____'
        break;
      default:
        break;
    }

    return {
      num1,
      num2,
      typeSign,
      result,
    }
  }
  render() {
    let { num1, num2, typeSign, result } = this.nextQuestion()
    let optionListDom = this.renderOptionList(result)
    return (
      <div>
        <div>
          {num1} {typeSign} {num2} = ____ ?
        </div>
        {optionListDom}
      </div>
    )
  }
}

//相当于vuex里的computed计算属性
const mapStateToProps = (state) => {
  //state = state.toJS()  //把immutable对象转换为js对象
  return {
    yes: state.getIn(['yes']),
    no: state.getIn(['no'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //相当于vuex里提交mutation
    onSetState(key, value) {
      dispatch({ type: 'SET_STATE', key, value })
    },
    //相当于vuex里的提交action
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPicker)

