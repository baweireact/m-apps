<template>
    <div class="box">
        <p><img src="../../assets/image/M-logo.png" alt=""></p>
        <button class="zfb">支付宝<span>一键登录</span></button>
        <button class="wx">微信<span>一键登录</span></button>
        <button class="tell" @click="to_tell()">手机号注册</button>
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
        to_tell:function(){
            this.$router.push({
                path:"/tell"
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
    height: 100%;
    background-image: url("../../assets/image/huanxingzc.png");
    background-size: 100% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin: 0;
        width: 100px;
        height: 100px;
        padding-top: 130px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    button{
        width: 80%;
        height: 45px;
        border: none;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        text-align: center;
        font-family: PingFangSC-regular;
        margin: 12px 0;
        outline: none;
        span{
            font-size: 16px;
            margin-left: 10px;
        }
    }
    .zfb{
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(65, 154, 254, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
        margin-top: 60px;
    }
    .wx{
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(125, 210, 63, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .tell{
        border-radius: 4px 4px 4px 4px;
        background-color: rgba(255, 255, 255, 0);
        text-align: center;
        border: 1px solid rgba(106, 106, 106, 1);
        color:#000;
        margin-bottom: 194px;
    }
}
</style>