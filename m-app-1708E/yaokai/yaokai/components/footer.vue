<template>
    <footer>
		<router-link to="/home" tag="dl">
			<dd><img src="../src/assets/image/home.png" alt=""></dd>
			<dt>首页</dt>
		</router-link>
		<router-link to="/type" tag="dl">
			<dd><img src="../src/assets/image/type.png" alt=""></dd>
			<dt>分类</dt>
		</router-link>
		<router-link to="/shopping" tag="dl">
			<dd><img src="../src/assets/image/shopping.png" alt=""></dd>
			<dt>购物车</dt>
		</router-link>
		<router-link to="/my" tag="dl">
			<dd><img src="../src/assets/image/my.png" alt=""></dd>
			<dt>我的</dt>
		</router-link>
    </footer>
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
footer{
	width: 100%;
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	justify-content: space-around;
	align-items: center;
	background: #fff;
	dl{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;
		dd{
			width: 50%;
			margin:0;
			border-radius: 50%;
			overflow: hidden;
			img{
				width: 100%;
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
</style>