import React, { Component } from 'react';
import ContrilItem from './ContrilItem.js';
class Input extends Component {
    static defaultProps={
        onChange:function(){},
        InitValue:'某某某',// 默认值
        placeHolder:'请输入姓名',  // 水印字
        Label: '性别',  //  表单项文本
        IsRequire:true,
    }
    state={
        errorMsg:""
    }
    componentDidMount(){
        this.props.onChange('name',this.props.InitValue,false);
    }
    render() {
        let {onChange,InitValue,placeHolder,Label}=this.props;
        return (
            <div>
                <>
                    <label>{Label}</label>:
                    <input placeholder={placeHolder}
                    defaultValue={InitValue}
                    onChange={
                        (e)=>{
                            let flag=false;
                            if(e.target.value===""){
                                if(this.props.IsRequire){
                                    flag=true;
                                    this.setState({
                                        errorMsg:"不能为空",
                                    })
                                }
                            }
                            else{
                                if(this.state.errorMsg){
                                    this.setState({
                                        errorMsg:""
                                    })
                                }
                            }
                            onChange('name',e.target.value,flag)
                        }
                    }
                     type="text"/>
                     <span style={{color:'red'}}>{this.state.errorMsg}</span>
                </>
            </div>
        );
    }
}

export default ContrilItem({
    InitValue:'某某某',// 默认值
    placeHolder:'请输入姓名',  // 水印字
    Label: '性别',  //  表单项文本
    IsRequire:true,
})(Input);