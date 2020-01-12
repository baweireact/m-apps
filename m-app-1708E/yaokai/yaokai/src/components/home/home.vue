<template>
    <div class="box">
        <header>
            <span><img src="../../assets/image/background.png" alt=""></span>
            <p><i><img src="../../assets/image/fangdajing.png" alt=""></i><input type="text" placeholder="输入搜索关键字"></p>
        </header>
        <main>
            <div class="list-nav">
                <dl @click="to_pt">
                    <dd><img src="../../assets/image/pintuan.png" alt=""></dd>
                    <dt>我要拼团</dt>
                </dl>
                <dl>
                    <dd><img src="../../assets/image/qiandao.png" alt=""></dd>
                    <dt>我要签到</dt>
                </dl>
                <dl>
                    <dd><img src="../../assets/image/fenlei.png" alt=""></dd>
                    <dt>产品分类</dt>
                </dl>
                <dl @click="to_zx">
                    <dd><img src="../../assets/image/zixun.png" alt=""></dd>
                    <dt>行业资讯</dt>
                </dl>
            </div>
            <div class="text">
                <p><em>新闻</em><em>简报</em></p><span>|</span><a>最新</a><span> 产品最新上线</span>
            </div>
            <div class="image">
                <div class="img-left">
                    <img src="../../assets/image/pintuan-back.png" alt="">
                    <p>一起来拼团</p>
                    <span>优惠多多</span>
                </div>
                <div class="img-right">
                    <div class="top" @click="to_ms">
                        <img src="../../assets/image/miaosha.jpg" alt="">
                        <p>秒杀专区</p>
                        <span>整点秒杀火热销售</span>
                    </div>
                    <div class="bottom">
                        <img src="../../assets/image/zhuanfa.png" alt="">
                        <p>好友转发</p>
                        <span>转发好友一起享受优惠</span>
                    </div>
                </div>
            </div>
            <div class="limit_time">
                <div class="time">
                    <p><span><img src="../../assets/image/limit-time.png" alt=""></span>今日比拼</p>
                    <div class="daojishi">
                        <p>剩余时间</p><span>05</span>:<span>58</span>:<span>45</span>
                    </div>
                </div>
                <div class="limit-list">
                    <dl v-for="(item,index) in limiti_list" @click="to_detail()">
                        <dd><img :src="item.img" alt=""></dd>
                        <dt>
                            <p>{{item.title}}</p>
                            <p><span>￥{{item.old_price}}</span><em>包邮</em></p>
                            <div class="new">
                                <p>￥{{item.new_price}}</p><span><img src="../../assets/image/vip.png" alt=""></span><em>已售出{{item.sales}}套</em><a href="javascript:;"><img src="../../assets/image/list-shop.png" alt=""></a>
                            </div>
                        </dt>
                    </dl>
                </div>
            </div>
            <div class="big-img">
                <img src="../../assets/image/tuijian.png" alt="">
            </div>
            <div class="list">
                <dl>
                    <dd><img src="../../assets/image/pengyouquan.png" alt=""></dd>
                    <dt>
                        <p>高级运动手表</p>
                        <span class="jieshao">
                            <em>平台精选</em><em>48小时发货</em>
                        </span>
                        <span class="chushou">已出售88件</span>
                        <div class="price">
                            <span class="old">￥1500</span>
                            <span class="new">￥1466</span>
                            <div class="zhuanfa">
                                <p>赚￥50.00</p>
                                <a href="javascript:;">立即转发</a>
                            </div>
                        </div>
                    </dt>
                </dl>
                <dl>
                    <dd><img src="../../assets/image/pengyouquan.png" alt=""></dd>
                    <dt>
                        <p>高级运动手表</p>
                        <span class="jieshao">
                            <em>平台精选</em><em>48小时发货</em>
                        </span>
                        <span class="chushou">已出售88件</span>
                        <div class="price">
                            <span class="old">￥1500</span>
                            <span class="new">￥1466</span>
                            <div class="zhuanfa">
                                <p>赚￥50.00</p>
                                <a href="javascript:;">立即转发</a>
                            </div>
                        </div>
                    </dt>
                </dl>
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
import Footer from "../../../components/footer.vue"
export default {
    props:{

    },
    components:{
        Footer
    },
    data(){
        return {
            limiti_list:[{
                id:0,
                img:"../../assets/image/pengyouquan.png",
                title:"唯美景色",
                old_price:560,
                new_price:499,
                sales:1256
            },{
                id:1,
                img:"https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%94%AF%E7%BE%8E%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=9&spn=0&di=8060&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=646928830%2C185137177&os=1798453232%2C2129248084&simid=0%2C0&adpicid=0&lpn=0&ln=1128&fr=&fmq=1578472989035_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=500&height=500&face=undefined&ist=&jit=&cg=&bdtype=11&oriquery=&objurl=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2Fb7fd5266d01609247ffa6facf282d9ffe7cd3431.jpeg%3Ftoken%3D22cf450cc75cd57e8263fa88e74bb7ff%26s%3D3AB86E858FD262CE86BD9E6303003079&fromurl=ippr_z2C%24qAzdH3FAzdH3Fkwt3twiw5_z%26e3Bkwt17_z%26e3Bv54AzdH3Ff%3Ft1%3D8mcnncmbddnc0bnndnc%26ou6%3Dfrt1j6%26u56%3Drv&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined",
                title:"唯美景色",
                old_price:560,
                new_price:499,
                sales:1256
            }]
        }
    },
    computed:{

    },
    methods:{
        to_pt:function(){
            console.log(111);
            this.$router.push({
                path:'/pintuan'
            })
        },
        to_ms:function(){
            this.$router.push({
                path:"/miaosha"
            })
        },
        to_detail:function(){
            this.$router.push({
                path:"/detail"
            })
        },
        to_zx:function(){
            this.$router.push({
                path:"/hyzx"
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
body{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
p{
    margin:0;
}
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 65px;
    header{
        width: 100%;
        span{
            display: inline-block;
            width: 100%;
            img{
                width: 100%;
            }
        }
        p{
            position: absolute;
            top: 16px;
            left: 34px;
            width: 80%;
            height: 27px;
            opacity: 0.8;
            border-radius: 15px;
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(255, 255, 255, 0);
            display: flex;
            align-items: center;
            i{
                display: inline-block;
                width: 20px;
                height: 20px;
                margin: 0 8px 0 13px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            input{
                color: rgba(176, 176, 176, 1);
                font-size: 12px;
                text-align: left;
                font-family: PingFangSC-regular;
                border:none;
                outline:none
            }
        }
    }
    main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(247, 244, 244, 1);
        .list-nav{
            width: 90%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0);
            margin-top: -45px;
            background: #fff;
            dl{
                width: 20%;
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                dd{
                    width: 60px;
                    height: 60px;
                    margin: 0;
                    padding: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dt{
                    color: rgba(121, 113, 113, 1);
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                }
            }
        }
        .text{
            width: 100%;
            display: flex;
            align-items: center;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border-top: 1px solid rgba(221, 221, 221, 1);
            border-bottom: 1px solid rgba(221, 221, 221, 1);
            padding: 10px 0;
            margin-top: 7px;
            p{
                margin:0 18px 0 23px;
                em{
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    font-weight: bolder;
                }
                em:nth-child(1){
                    color: rgba(51, 153, 255, 1);
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                } 
            }
            a{
                border-radius: 10px;
                background-color: rgba(255, 255, 255, 0);
                text-align: center;
                border: 1px solid rgba(255, 0, 0, 1);
                color: rgba(255, 0, 0, 1);
                font-size: 12px;
                text-align: left;
                font-family: PingFangSC-regular;
                margin: 0 10px 0 8px;
                padding: 0 12px;
            }
            .text span:nth-child(4){
                color: rgba(134, 130, 130, 1);
                font-size: 14px;
                text-align: left;
                font-family: PingFangSC-regular;
            }
        }
        .image{
            width: 80%;
            border-radius: 5px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0);
            display: flex;
            justify-content: space-around;
            margin-top:15px;
            background: #fff;
            padding: 5px 8px;
            .img-left{
                width: 30%;
                position: relative;
                border-radius: 5px;
                overflow: hidden;
                img{
                    width: 100%;
                }
                p{
                    position: absolute;
                    top:16px;
                    left:3px;
                    color: rgba(255, 255, 255, 1);
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    margin: 0;
                }
                span{
                    position: absolute;
                    top:35px;
                    left:3px;
                    color: rgba(232, 227, 227, 1);
                    font-size: 10px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                }
            }
            .img-right{
                flex:1;
                border-radius: 5px;
                overflow: hidden;
                .top{
                    width: 100%;
                    position: relative;
                    margin-left: 9px;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    p{
                        position: absolute;
                        top:10px;
                        left:23px;
                        color: rgba(255, 255, 255, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                    }
                    span{
                        position: absolute;
                        top:30px;
                        left:23px;
                        color: rgba(232, 227, 227, 1);
                        font-size: 10px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                    }
                }
                .bottom{
                    width: 100%;
                    position: relative;
                    margin-left: 9px;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    p{
                        position: absolute;
                        top:10px;
                        left:23px;
                        color: rgba(255, 255, 255, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                    }
                    span{
                        position: absolute;
                        top:30px;
                        left:23px;
                        color: rgba(232, 227, 227, 1);
                        font-size: 10px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                    }
                }
            }
        }
        .limit_time{
            width: 80%;
            background: #fff;
            padding: 5px 5px;
            margin-top:7px;
            .time{
                width: 100%;
                display: flex;
                justify-content: space-between;
                p{
                    display: flex;
                    align-items: center;
                    color: rgba(121, 113, 113, 1);
                    font-size: 14px;
                    text-align: left;
                    font-family: PingFangSC-regular;
                    span{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        margin-right:5px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .daojishi{
                    display: flex;
                    align-items: center;
                    color:rgba(6, 6, 6, 1);
                    p{
                        width: 30px;
                        color: rgba(16, 16, 16, 1);
                        font-size: 12px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        font-weight: bolder;
                    }
                    span{
                        background-color: rgba(6, 6, 6, 1);
                        text-align: center;
                        border: 1px solid rgba(255, 255, 255, 0);
                        color: #fff;
                        margin: 0 1px;
                    }
                }
            }
            .limit-list{
                width: 100%;
                dl{
                    width: 100%;
                    display: flex;
                    margin: 15px 0;
                    dd{
                        width: 30%;
                        margin: 0;
                        img{
                            width: 100%;
                        }
                    }
                    dt{
                        flex:1;
                        margin-left:12px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        p:nth-child(1){
                            color: rgba(16, 16, 16, 1);
                            font-size: 14px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                        }
                        p:nth-child(2){
                            span{
                                color: rgba(255, 0, 0, 1);
                                font-size: 14px;
                                text-align: left;
                                font-family: PingFangSC-regular;
                            }
                            em{
                                border-radius: 5px;
                                background-color: rgba(247, 110, 110, 1);
                                text-align: center;
                                border: 1px solid rgba(255, 255, 255, 0);
                                color: rgba(255, 255, 255, 1);
                                font-size: 8px;
                                text-align: left;
                                font-family: PingFangSC-regular;
                                font-style:normal;
                                padding: 0 4px;
                                margin-left: 12px;
                            }
                        }
                        .new{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            p{
                                color: rgba(16, 16, 16, 1);
                                font-size: 8px;
                                text-align: left;
                                font-family: PingFangSC-regular;
                            }
                            span{
                                display: inline-block;
                                width: 25px;
                                img{
                                    width: 100%;
                                }
                            }
                            em{
                                display: inline-block;
                                width: 80px;
                                color: rgba(153, 153, 153, 1);
                                font-size: 8px;
                                text-align: left;
                                font-family: PingFangSC-regular;
                                font-size: normal;
                            }
                            a{
                                width: 30px;
                                height: 30px;
                                background-color: rgba(255, 255, 255, 0);
                                text-align: center;
                                border: 1px solid rgba(255, 0, 0, 1);
                                border-radius: 50%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-left: 25px;
                                img{
                                    width: 80%;
                                }
                            }
                        }
                    }
                }
            }
        }
        .big-img{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .list{
            width: 80%;
            background: #fff;
            padding: 5px 10px;
            box-sizing: border-box;
            dl{
                width: 100%;
                display: flex;
                margin-top: 7px;
                dd{
                    width: 70px;
                    height: 70px;
                    margin: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dt{
                    flex:1;
                    margin-left:14px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    p{
                        color: rgba(16, 16, 16, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        font-weight: bolder;
                        margin-bottom: 3px;
                    }
                    .jieshao{
                        em{
                            line-height: 20px;
                            border-radius: 2px;
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0);
                            background-color: rgba(247, 110, 110, 1);
                            font-style: normal;
                            color: rgba(255, 255, 255, 1);
                            font-size: 12px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                            padding: 5px;
                            box-sizing: border-box;
                        }
                        em:nth-child(2){
                            background-color: rgba(247, 231, 231, 1);
                            color: rgba(253, 94, 94, 1);
                            font-size: 7px;
                            margin-left:5px;
                        }
                    }
                    .chushou{
                        color: rgba(238, 89, 89, 1);
                        font-size: 8px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        margin-top: 6px;
                    }
                    .price{
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .old{
                            color: rgba(255, 0, 0, 1);
                            font-size: 14px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                        }
                        .new{
                            color: rgba(91, 91, 91, 1);
                            font-size: 8px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                            text-decoration:line-through;
                            margin-left:5px;
                        }
                        .zhuanfa{
                            p{
                                color: rgba(236, 130, 130, 1);
                                font-size: 6px;
                                text-align: left;
                                font-family: PingFangSC-regular;
                            }
                            a{
                                line-height: 20px;
                                border-radius: 2px;
                                background-color: rgba(247, 110, 110, 1);
                                border: 1px solid rgba(255, 255, 255, 0);
                                text-decoration:none;
                                color: rgba(255, 255, 255, 1);
                                font-size: 8px;
                                font-family: PingFangSC-regular;
                                padding: 4px 6px;
                                box-sizing: border-box;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>