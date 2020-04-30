import React from 'react';

function ContrilItem(option){//高阶组件为柯里化形式
    return (WrapComponent)=>{
        return (props)=>{
            return (
                <>
                    {
                        React.createElement(WrapComponent,
                            Object.assign({},props||{},option))
                    }  {/*WrapComponent参数的正确传递*/}
                </>
            )
        }
    }/*Options的正确设置 */
}
export default ContrilItem;//正确封装controlItem高阶组件