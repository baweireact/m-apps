<template>
    <div class="box">
        <header>
           <p class="icon" @click="toHome"><img src="../../../assets/image/xiangzuo.png" alt=""></p>
           <span>秒杀活动</span>
           <p></p>
        </header>
        <main>
            <div class="banner"><img src="../../../assets/image/ms-banner.png" alt=""></div>
            <div class="tab">
                <ul>
                    <li v-for="(item,index) in time" @click="tab(index)" :class="{active:num==index}">
                        <p>{{item.time}}</p>                        
                        <span>{{item.state}}</span>
                    </li>
                </ul>
            </div>
            <p class="daojishi">距离结束仅剩<span>00</span>:<span>10</span>:<span>10</span></p>
            <div class="list">
                <dl>
                    <dd><img src="../../../assets/image/qiandao.png" alt=""></dd>
                    <dt>
                        <p>冬季加厚毛衣</p>
                        <span>限时价<em>￥10.00</em></span>
                        <div class="qiang">
                            <span>仅剩40件</span>
                            <button>马上抢</button>
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
            num:0,
            time:[{
                time:"07:00",
                state:"已结束"
            },{
                time:"07:00",
                state:"已结束"
            },{
                time:"10:00",
                state:"抢购中"
            },{
                time:"12:00",
                state:"即将开始"
            },{
                time:"16:00",
                state:"即将开始"
            }]
        }
    },
    computed:{

    },
    methods:{
        toHome:function(){
            this.$router.push({
                path:"/home"
            })
        },
        tab:function(index){
            this.num=index
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
        margin: 0;
    }
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
        .banner{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .tab{
            width: 100%;
            ul{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: -40px;
                margin-top: -4px;
                li{
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(243,202,150,1);
                    padding: 15px 0;
                    box-sizing: border-box;
                    border-right:1px solid rgba(187,187,187,1);
                    &:last-child{
                        border:none;
                    }
                    p{
                        color: rgba(16, 16, 16, 1);
                        font-size: 16px;
                        text-align: left;
                        font-family: PingFangSC-bold;
                    }
                    span{
                        color: rgba(85, 85, 85, 1);
                        font-size: 12px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                    }
                }
                .active{
                    background: red;
                    p{
                        color:#fff;
                    }
                    span{
                        color:#fff;
                    }
                }
            }
        }
        .daojishi{
            width: 100%;
            color: rgba(16, 16, 16, 1);
            font-size: 14px;
            font-family: PingFangSC-regular;
            text-align: center;
            font-weight: bolder;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                background: rgb(246,231,228);
                font-weight: normal;
                margin-left:7px;
                color: rgb(299,152,173);
                padding: 1px;
            }
        }
        .list{
            width: 100%;
            dl{
                width: 100%;
                display: flex;
                align-items: center;
                padding: 0 15px;
                box-sizing: border-box;
                dd{
                    width: 90px;
                    height: 90px;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 70%;
                        height: 70%;
                    }
                }
                dt{
                    flex: 1;
                    p{
                        color: rgba(83, 83, 83, 1);
                        font-size: 16px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                    }
                    span{
                        margin:12px 0 8px;
                        color: rgba(83, 83, 83, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        em{
                            color: rgba(235, 82, 122, 1);
                            font-size: 16px;
                            text-align: left;
                            font-family: PingFangSC-bold;
                            font-style: normal;
                            margin-left: 4px;
                        }
                    }
                    .qiang{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        span{
                            display: inline-block;
                            width: 50%;
                            border-radius: 66px;
                            background-color: rgba(255, 255, 255, 0);
                            text-align: center;
                            border: 1px solid rgba(225, 130, 158, 1);
                            color: rgba(235, 82, 122, 1);
                            font-size: 11px;
                            font-family: PingFangSC-regular;
                            background: #f6e7e4;
                        }
                        button{
                            width: 65px;
                            line-height: 20px;
                            border-radius: 2px;
                            background-color: rgba(246, 39, 75, 1);
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0);
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
}
</style>