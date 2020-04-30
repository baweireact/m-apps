import React, { Component } from 'react';
import ContrilItem from './ContrilItem.js';
class Select extends Component {
    static defaultProps={
        onChange:function(){},
        InitValue:'某某某',// 默认值
        placeHolder:'请输入姓名',  // 水印字
        Label: '性别',  //  表单项文本
        IsRequire:true,
    }
    componentDidMount(){
        this.props.onChange('sex',this.props.InitValue,false);
    }
    render() {
        let {onChange,InitValue,Label}=this.props;
        return (
            <div>
                <>
                    <label>{Label}</label>
                    <select defaultValue={InitValue}
                        onChange={
                            (e)=>{
                                onChange('sex',e.target.value,false)
                            }
                        }
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </>
            </div>
        );
    }
}
export default ContrilItem({
    InitValue:'女',// 默认值
    Label: '性别',  //  表单项文本
    IsRequire:true,
})(Select);