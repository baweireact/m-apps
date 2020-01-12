<template>
    <div class="box">
        <header>
            <i class="icon" @click="back()"><img src="../../assets/image/xiangzuo.png" alt=""></i>
            <p>商品详情</p>
            <i class="icon"></i>
        </header>
        <main>
            <dl>
                <dd><img src="../../assets/image/detail_img.png" alt=""></dd>
                <dt>
                    <p>￥500.00 <em>￥550.00</em><i><img src="../../assets/image/zhuanfa_icon.png" alt=""></i></p>
                    <span>最新款高科技材料制造而成的，冬天再也不用怕冷了现在购买销售优惠好礼！</span>
                </dt>
            </dl>
            <div class="preferential">
                <p>优惠券:</p>
                <span>满300减30</span>
                <i><img src="../../assets/image/xiangyou.png" alt=""></i>
            </div>
            <div class="specifications">
                <p>已选：<span>加绒版</span></p>
                <i><img src="../../assets/image/xiangyou.png" alt=""></i>
            </div>
            <div class="evaluation">
                <div class="header">
                    <p>用户评价(999)</p>
                    <i><img src="../../assets/image/xiangyou.png" alt=""></i>
                </div>
                <div class="pingjia">
                    <ul>
                        <li>
                            <dl>
                                <dd><img src="../../assets/image/shopping.png" alt=""></dd>
                                <dt>雨轩的爱</dt>
                            </dl>
                            <span></span>
                        </li>
                        <li>2020-01-10</li>
                        <li>不错哦！！！</li>
                    </ul>
                </div>
            </div>
            <div class="text">
                <span>——————</span>商品详情<span>——————</span>
            </div>
            <div class="huansj">
                <img src="../../assets/image/huansj.png" alt="">
            </div>
            <div class="detail_big_img">
                <img src="../../assets/image/detail_big_img.png" alt="">
            </div>
        </main>
        <footer>
            <dl>
                <dd><img src="../../assets/image/wdeshouchangweixuanzhong.png" alt=""></dd>
                <dt>收藏</dt>
            </dl>
            <dl>
                <dd><img src="../../assets/image/gouwuche.png" alt=""></dd>
                <dt>购物车</dt>
            </dl>
            <button>加入购物车</button>
            <button>购买</button>
        </footer>
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
        back:function(){
            this.$router.go(-1)
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
    header{
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        line-height: 20px;
        background-color: rgba(247, 247, 247, 0.8);
        position: fixed;
        top:0;
        background: #fff;
        .icon{
            width: 20px;
            height: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            text-align: center;
        }
    }
    main{
        background: #f2f2f2;
        width: 100%;
        margin-bottom: 57px;
        margin-top: 45px;
        dl{
            width: 100%;
            margin: 0;
            background: #fff;
            dd{
                width: 100%;
                margin: 0;
                img{
                    width: 100%;
                }
            }
            dt{
                width: 100%;
                padding: 0 25px;
                box-sizing: border-box;
                p{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: rgba(255, 0, 0, 1);
                    font-size: 24px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    em{
                        color: rgba(113, 111, 111, 1);
                        font-size: 13px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        text-decoration: line-through;
                        display: inline-block;
                        width: 60%;
                    }
                    i{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                span{
                    color: rgba(16, 16, 16, 1);
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                }
            }
        }
        .preferential{
            width: 100%;
            display: flex;
            align-items: center;
            border-top: 1px solid #ccc;
            background: #fff;
            justify-content: space-between;
            padding: 0 25px;
            box-sizing: border-box;
            p{
                color: rgba(179, 179, 179, 1);
                font-size: 13px;
                text-align: left;
                font-family: PingFangSC-regular;
            }
            span{
                background-image: url("../../assets/image/juan.png");
                background-size: 100% 100%;
                width: 85px;
                height: 24px;
                display: inline-block;
                padding-left: 25px;
                margin-left: -147px;
            }
            i{
                display: inline-block;
                width: 20px;
                height: 20px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .specifications{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 25px;
            background: #fff;
            margin: 8px 0;
            box-sizing: border-box;
            p{
                color: rgba(179, 179, 179, 1);
                font-size: 13px;
                text-align: left;
                font-family: PingFangSC-regular;
                span{
                    color: rgba(179, 179, 179, 1);
                    font-size: 13px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    font-weight: bolder;
                    color:#000;

                }
            }
            i{
                display: inline-block;
                width: 20px;
                height: 20px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .evaluation{
            width: 100%;
            padding:0 25px;
            box-sizing: border-box;
            background: #fff;
            .header{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #eee;
                p{
                    color: rgba(179, 179, 179, 1);
                    font-size: 13px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                }
                i{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .pingjia{
            width: 100%;
            margin-bottom: -5px;
            ul{
                width: 100%;
                margin:0 -40px;
                li{
                    color: rgba(179, 176, 176, 1);
                    font-size: 10px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    margin: 5px 0;
                    dl{
                        display: flex;
                        align-items: center;
                        dd{
                            width: 30px;
                            height: 30px;
                            img{
                                width: 100%;
                                height: 100%; 
                            }
                        }
                    }
                    &:nth-child(3){
                        color:#000;
                    }
                }
            }
        }
        .text{
            width: 100%;
            text-align: center;
            background: #fff;
            padding-top:35px;
            padding-bottom: 15px;
            span{
                color:rgb(187,187,187)
            }
        }
        .huansj,.detail_big_img{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    footer{
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        bottom:0;
        background: #fff;
        dl{
            display: flex;
            flex-direction: column;
            align-items: center;
            dd{
                width: 20px;
                height: 20px;
                margin: 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            dt{
                color: rgba(16, 16, 16, 1);
                font-size: 10px;
                text-align: left;
                font-family: PingFangSC-regular;
                margin-top: 5px;
            }
        }
        button{
            width: 100px;
            height: 40px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            text-align: left;
            font-family: PingFangSC-regular;
            text-align: center;
            outline: none;
            &:nth-child(3){
                background: #ff8484;
                border-top-left-radius: 73px;
                border-bottom-left-radius: 73px;
            }
            &:nth-child(4){
                background: red;
                margin-left: -38px;
                border-top-right-radius: 73px;
                border-bottom-right-radius: 73px;
            }
        }
    }
}
</style>