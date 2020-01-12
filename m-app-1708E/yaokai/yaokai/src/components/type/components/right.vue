<template>
    <div class="box">
        <div class="wrap">
            <p>常用分类</p>
            <div class="dl-list">
                <dl @click="to_goods_list()">
                    <dd><img src="../../../assets/image/my.png" alt=""></dd>
                    <dt>袜子</dt>
                </dl>
                <dl>
                    <dd><img src="../../../assets/image/my.png" alt=""></dd>
                    <dt>鞋子</dt>
                </dl>
                <dl>
                    <dd><img src="../../../assets/image/my.png" alt=""></dd>
                    <dt>内裤</dt>
                </dl>
            </div>
        </div>
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
        to_goods_list:function(){
            this.$router.push({
                path:'/goods_list'
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
    .wrap{
        width: 100%;
        p{
            margin: 10px 0 10px 10px;
        }
        .dl-list{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            dl{
                width: 33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin:10px 0;
                dd{
                    width: 50%;
                    margin-left: 1px;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>