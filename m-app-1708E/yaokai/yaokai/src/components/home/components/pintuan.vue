<template>
    <div class="box">
        <header>
           <p class="icon" @click="toHome"><img src="../../../assets/image/xiangzuo.png" alt=""></p>
           <span>拼团活动</span>
           <p></p>
        </header>
        <main>
            <div class="list">
                <dl>
                    <dd><img src="../../../assets/image/type.png" alt=""></dd>
                    <dt>
                        <p>最新高领毛衣</p>
                        <span><em><img src="../../../assets/image/pt_icon.png" alt=""></em>5人团</span>
                        <div class="price">
                            <span>￥20.00</span><span>￥100.00</span>
                            <a href="javascript:;">去拼团 ></a>
                        </div>
                    </dt>
                </dl>
                <dl>
                    <dd><img src="../../../assets/image/type.png" alt=""></dd>
                    <dt>
                        <p>最新高领毛衣</p>
                        <span><em><img src="../../../assets/image/pt_icon.png" alt=""></em>5人团</span>
                        <div class="price">
                            <span>￥20.00</span><span>￥100.00</span>
                            <a href="javascript:;">去拼团 ></a>
                        </div>
                    </dt>
                </dl>
            </div>
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
        toHome:function () {
            this.$router.push({
                path:"/home"
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
    display: flex;
    flex-direction: column;
    header{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        align-items: center;
        .icon{
            width: 13px;
            height: 17px;
            margin: 0;
            img{
                width: 100%;
            }
        }
    }
    main{
        width: 100%;
        flex:1;
        background-image: url("../../../assets/image/pintuan-background.png");
        background-size: cover ;
        background-attachment:fixed;
        background-repeat:no-repeat;
        background-position:center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .list{
            width: 85%;
            padding-top: 122px;
            padding-bottom: 229px;
            dl{
                width: 100%;
                display: flex;
                background: #fff;
                align-items: center;
                padding: 5px 10px;
                box-sizing: border-box;
                line-height: 20px;
                border-radius: 5px;
                text-align: center;
                border: 1px solid rgba(255, 255, 255, 0);
                
                dd{
                    width: 80px;
                    height: 80px;
                    margin: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dt{
                    flex:1;
                    margin-left:5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    p{
                        color: rgba(16, 16, 16, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    span{
                        display: inline-block;
                        line-height: 20px;
                        border-radius: 5px;
                        background-color: rgba(255, 255, 255, 0);
                        text-align: center;
                        border: 1px solid rgba(255, 60, 60, 1);
                        color: rgba(16, 16, 16, 1);
                        font-size: 9px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        width: 67px;
                        display: flex;
                        align-items: center;
                        padding-right: 7px;
                        em{
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            background: rgb(253, 187, 187);
                            padding: 3px 6px;
                            margin-right: 3px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .price{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        span:nth-child(1){
                            color: rgba(16, 16, 16, 1);
                            font-size: 16px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                            border:none;
                        }
                        span:nth-child(2){
                            color: rgba(166, 158, 158, 1);
                            font-size: 12px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                            border:none;
                            text-decoration:line-through;
                            margin-left: 5px;
                        }
                        a{
                            border-radius: 5px;
                            background-color: rgba(255, 59, 69, 1);
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0);
                            color:#fff;
                            font-size: 14px;
                            text-decoration:none;
                            -webkit-tap-highlight-color: rgba(0,0,0,0);
                        }
                    }
                }
            }
        }
    }
}

</style>