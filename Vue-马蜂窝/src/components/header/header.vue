<template>
	<div id="head">
		<ul>
			<li @click="back"><img src="static/imgs/logo.png"/></li>
			<li>
				<input 
					type="text" 
					placeholder="搜索目的地/攻略/游记"
					v-model="value"
					@keyup.13="search()"
				/>
			</li>
			<li @click="!flag && text()" id="dl_fa">
				<!--<router-link :to="'/login'">-->
					<div id="dl">登录</div>
				<!--</router-link>-->   
			</li>
		</ul>
		<div id="if4_div">
			<iFrame width="100%" height="100%" seamless="seamless" frameborder="0" id="if4"></iFrame>
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.test()
		},
		watch: {
          "$route": "test"
       	},
		data(){
			return {
				value:'',
				flag:this.$store.state.login
			}
		},
		methods:{
			search(){
				document.getElementsByTagName('body')[0].style.height = '100vh';
				document.getElementsByTagName('body')[0].style.overflow = 'hidden';
				document.getElementById('if4_div').style.display ='block';
				document.getElementById('if4').src='https://m.mafengwo.cn/group/s.php?key='+this.value
				this.value = '';
			},
			back(){
				document.getElementsByTagName('body')[0].style.height = '';
				document.getElementsByTagName('body')[0].style.overflow = '';
				document.getElementById('if4_div').style.display ='none';
			},
			text(){
				if(this.flag){
					document.getElementById('dl').innerHTML = '登录';
					localStorage.removeItem('login');
					this.$store.state.login = false;
				}else{
					this.$router.push({path: '/login'})
				}
			},
			test(){
				let login = JSON.parse(window.localStorage.getItem('login'))
				if(login){
					this.$store.state.login = true;
					document.getElementById('dl').innerHTML = '注销';
				}else{
					this.$store.state.login = false;
					document.getElementById('dl').innerHTML = '登录';
				}
			}
		}
	}
</script>

<style>
#head ul{
	height: 2.5rem;
	overflow: hidden;
}
#head ul li{
	float: left;
	height: 100%;
}
#head ul li img{
	margin-left: 0.4rem;
	margin-top: 0.7rem;
	height: 40%;
	width: 4rem;
	margin-right: 1rem;
}
#head ul li input{
	font-size: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 1rem;
	height: 1.25rem;
	width: 8.5rem;
	margin-top: 0.5rem;
	text-indent: 0.5rem;
	background: #f3f3f3;
}
#head ul li div{
	line-height: 2.5rem;
	margin-left: 0.5rem;
	color: #ffa800;
	font-size: 0.8rem;
}
#if4_div{
	width: 100%;
	height: 95vh;
	position: relative;
    top: 0;
    left: 0;
    display: none;
    z-index: 100;
    overflow: hidden;
}
#if4{
	position: absolute;
	left: 0;
	top: -2rem;
}
</style>