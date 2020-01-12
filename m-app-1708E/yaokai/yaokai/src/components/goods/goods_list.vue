<template>
    <div class="box">
        <header>
            <i class="icon"><img src="../../assets/image/xiangzuo.png" alt=""></i>
            <p><i class="icon"><img src="../../assets/image/fangdajing.png" alt=""></i><input type="text" placeholder="输入搜索关键字"></p>
            <i class="icon"></i>
        </header>
        <main>
            <div class="nav">
                <p v-for="(item,index) in nav" @click="tab(index)" :class="{active:num==index}">{{item}}</p>
            </div>
            <div class="list">
                <dl>
                    <dd><img src="../../assets/image/zixun.png" alt=""></dd>
                    <dt>
                        <p>冬季加厚</p>
                        <span>￥23.00<em>￥34.00</em><a href="javascript:;"><img src="../../assets/image/list-shop.png" alt=""></a></span>
                    </dt>
                </dl>
                <dl>
                    <dd><img src="../../assets/image/zixun.png" alt=""></dd>
                    <dt>
                        <p>冬季加厚</p>
                        <span>￥23.00<em>￥34.00</em><a href="javascript:;"><img src="../../assets/image/list-shop.png" alt=""></a></span>
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
            num:0,
            nav:["常用分类","价格","销量","新品上市"]
        }
    },
    computed:{

    },
    methods:{
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
        .icon{
            width: 20px;
            height: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            width: 70%;
            display: flex;
            line-height: 20px;
            border-radius: 15px;
            background-color: rgba(255, 255, 255, 1);
            text-align: center;
            border: 1px solid rgba(244, 1, 1, 1);
            padding: 5px 0;
            box-sizing: border-box;
            i{
                width: 20px;
                height: 20px;
                margin: 0 17px;
                img{
                    width: 100%;
                }
            }
            input{
                width: 75%;
                height: 90%;
                border:none;
                outline:none;
            }
        }
    }
    main{
        width: 100%;
        .nav{
            width: 100%;
            display: flex;
            margin-top: 21px;
            align-items: center;
            justify-content: space-around;
            p{
                margin: 0;
            }
            .active{
                color:red;
            }
        }
        .list{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            dl{
                width: 45%;
                display: flex;
                flex-direction: column;
                align-items: center;
                dd{
                    width: 60%;
                    margin: 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dt{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    p{
                        color: rgba(16, 16, 16, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        padding-left: 15px;
                        margin: 10px 0 8px 0;
                    }
                    span{
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        color: rgba(255, 0, 0, 1);
                        font-size: 14px;
                        text-align: left;
                        font-family: PingFangSC-regular;
                        em{
                            color: rgba(157, 157, 157, 1);
                            font-size: 12px;
                            text-align: left;
                            font-family: PingFangSC-regular;
                            text-decoration: line-through;
                        }
                        a{
                            display: inline-block;
                            width: 22px;
                            height: 22px;
                            border:1px solid red;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            img{
                                width: 80%;
                                height: 80%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>