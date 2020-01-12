<template>
    <div class="box">
        <header>
            <em @click="back_home"><img src="../../../assets/image/xiangzuo.png" alt=""></em>
            <p>手机号注册</p>
            <em></em>
        </header>
        <main>
            <p>
                <span>手机号</span>
                <input type="text" placeholder="请输入手机号">
                <button>点击获取</button>
            </p>
            <p>
                <span>验证码</span>
                <input type="text">
            </p>
            <p>
                <span>邀请码</span>
                <input type="text">
            </p>
            <button class="zc">点击注册</button>
        </main>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        back_home:function(){
            this.$router.push({
                path:"/login_home"
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.box{
    width: 100%;
    p{
        margin:0;
    }
    header{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        font-size: 20px;
        font-family: PingFangSC-regular;
        background: rgba(247,247,247,0.8);
        border-bottom:1px solid #D5D2D2;
        p{
            color: rgba(0, 0, 0, 1);
            font-size: 17px;
            text-align: center;
            font-family: Helvetica-regular;
        }
        em{
            display: inline-block;
            width: 20px;
            height: 20px;
            img{
                width: 100%;
                height: 100%;
            } 
        }
    }
    main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            width: 100%;
            height: 60px;
            border-bottom:1px solid #D5D2D2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                margin-left: 10px;
            }
            button{
                width: 80px;
                height: 50%;
                border-radius: 4px;
                color: rgba(16, 16, 16, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 1px solid rgba(176, 176, 176, 1);
                background: #fff;
                outline: none;
                margin-right:10px;
            }
            input{
                width: 50%;
                height: 80%;
                border: none;
                outline: none;
            }
            &:nth-child(2),&:nth-child(3){
                input{
                    width: 77%;
                }
            }
        }
        .zc{
            width: 90%;
            height: 45px;
            color: #fff;
            background: red;
            border: none;
            outline: none;
            font-size: 18px;
            border-radius: 4px;
            font-family: Microsoft Yahei;
            border: 1px solid rgba(176, 176, 176, 1);
            margin-top: 166px;
        }
    }
}
</style>