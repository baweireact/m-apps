import React, { Component } from 'react';
import Input from './Input.js';//正确封装Input组件
import Select from './Select.js';//正确封装Select组件
import TextArea from './TextArea.js';//正确封装TextArea组件
class Home extends Component {
    state={
        distext:"",
        sex:"女",
        desc:"",
        name:"",
        error:false,
    }//正确使用传参方式展示数据
    onChange=(key,value,error)=>{
        console.log(error);
        this.setState({
            [key]:value,
            error:error,
        })
    }
    render() {
        return (
            <div>
                <div className="top">{/*正确编写Top容器模块 */}
                    <Input onChange={this.onChange}/>
                    <Select onChange={this.onChange}></Select>
                    <TextArea onChange={this.onChange}></TextArea>
                    <button onClick={
                        ()=>{
                            console.log(this.state.error)
                            if(this.state.error){
                                alert("数据填写不完整");
                                return ;
                            }
                            let distext=(
                                <>
                                    <p>name:{this.state.name}</p>
                                    <p>sex:{this.state.sex}</p>
                                    <p>desc:{this.state.desc}</p>
                                </>
                            )
                            this.setState({
                                distext:distext
                            })
                        }
                    }
                    >提交</button>
                </div>
                <div className="bottom">{/*正确编写Bottom容器模块并展示提交数据 */}
                    <span>展示文本:{this.state.distext}</span>
                </div>
            </div>
        );
    }
}

export default Home;