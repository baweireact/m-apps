<template>
    <div class="box">
        <header>
            <i class="icon"><img src="../../assets/image/xiangzuo.png" alt=""></i>
            <p><i class="icon"><img src="../../assets/image/fangdajing.png" alt=""></i><input type="text" placeholder="输入搜索关键字"></p>
            <i class="icon"></i>
        </header>
        <main>
            <div class="left">
                <ul>
                    <li v-for="(item,index) in list" @click="text(index)" :class="{active:num==index}">{{item}}</li>
                </ul>
            </div>
            <Right />
        </main>
        <Footer />
    </div>
</template>
<script>
import Footer from "../../../components/footer.vue"
import Right from "./components/right.vue"
import Api from "../../libs/axios.js"
export default {
    props:{

    },
    components:{
        Footer,
        Right
    },
    data(){
        return {
            num:0,
            list:["为你推荐","毛衣","羽绒服","鞋子","热卖牛奶","多选茶具","良心购买"]
        }
    },
    computed:{

    },
    methods:{
        text:function(index){
            this.num=index;
        }
    },
    created(){
        //console.log(Api)
        Api.get("http://maque.chaidongqiang.cn/api/category").then(res=>{
            console.log(res);
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.box{
    width: 100%;
    height: 100;
    display: flex;
    flex-direction: column;
    ul{
        list-style: none;
    }
    width: 100%;
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
        flex:1;
        display: flex;

        .left{
            width: 170px;
            height: 100%;
            border:1px solid rgb(234,234,234);
            ul{
                margin-left: -40px;
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    margin: 10px;
                }
            }
        }
        .active{
            padding: 0 15px;
            background: red;
            border-radius: 36px;
            color:#fff;
        }
    }
}
</style>