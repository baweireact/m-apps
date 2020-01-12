<template>
    <div class="box">
        <header>
           <p class="icon" @click="toHome"><img src="../../../assets/image/xiangzuo.png" alt=""></p>
           <span>资讯</span>
           <p></p>
        </header>
        <main>
            <div class="banner"><img src="../../../assets/image/zxbanner.png" alt=""></div>
            
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
        toHome:function(){
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
    align-items: center;
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
        width: 95%;
        .banner{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
}
</style>