<template>
    <div class="box">
        <header>
            <em><img src="../../../assets/image/xiangzuo.png" alt=""></em>
            <p>激活</p>
            <em></em>
        </header>
        <main>
            <p>填写朋友邀请码<br/>即可激活登录</p>
            <span>
                <input type="text" placeholder="邀请码">
            </span>
            <button>点击激活</button>
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
            color: rgba(16, 16, 16, 1);
            font-size: 20px;
            text-align: center;
            font-family: PingFangSC-regular; 
            margin-top: 40px;
            line-height: 40px;
        }
        button{
            width: 75%;
            height: 45px;
            border: none;
            outline: none;
            border-radius: 5px 5px 5px 5px;
            background-color: rgba(255, 15, 15, 1);
            text-align: center;
            border: 1px solid rgba(5, 5, 5, 0.08);
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            font-family: PingFangSC-regular;
            margin-top: 26px;
        }
        span{
            display: inline-block;
            width: 75%;
            height: 45px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(242, 123, 123, 1);
            input{
                width: 20%;
                height: 90%;
                border:none;
                outline: none;
            }
        }
    }
}
</style>