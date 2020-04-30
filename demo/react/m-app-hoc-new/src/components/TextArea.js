import React, { Component } from 'react';
import ContrilItem from './ContrilItem.js';
class TextArea extends Component {
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
        this.props.onChange('desc',this.props.InitValue,false);
    }
    render() {
        let {onChange,Label,placeHolder,InitValue}=this.props;
        return (
            <div>
                <>
                    <label>{Label}</label>
                    <textarea
                        defaultValue={InitValue}
                        placeholder={placeHolder}
                        onChange={
                            (e)=>{
                                let flag=false;
                                if(this.props.IsRequire){
                                    if(e.target.value===''){
                                        flag=true;
                                        this.setState({
                                            errorMsg:'不能为空'
                                        })
                                    }
                                    else{
                                        if(this.props.errorMsg!==""){
                                            this.setState({
                                                errorMsg:"",
                                            })
                                        }
                                    }
                                }
                                onChange('desc',e.target.value,flag)
                            }
                        }
                        cols="30" rows="10"
                    ></textarea>
                    <span style={{color:'red'}}>
                        {this.state.errorMsg}
                    </span>
                </>
            </div>
        );
    }
}
let mine= ContrilItem({
    InitValue:'我叫xxx,今年xxx岁',// 默认值
    placeHolder:'请输入个人信息',  // 水印字
    Label: '个人简介',  //  表单项文本
    IsRequire:true,
});
export default mine(TextArea);