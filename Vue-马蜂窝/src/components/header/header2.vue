<template>
	<div id="head2">
		<ul>
			<li @click="goback"><img src="static/imgs/back.png"/></li>
			<li><input type="text" placeholder="搜索目的地/攻略/游记"/></li>
			<li @click="!flag && text()">
				<div id="dl2">登陆</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.test()
		},
		data(){
			return {
				flag:this.$store.state.login
			}
		},
		watch: {
          "$route": "test"
       	},
		methods:{
			goback(){
				window.history.go(-1)
			},
			text(){
				if(this.flag){
					document.getElementById('dl2').innerHTML = '登录';
					localStorage.removeItem('login');
					this.$store.state.login = false;
				}
				else{
					this.$router.push({path: '/login'})
				}
			},
			test(){
				let login = JSON.parse(window.localStorage.getItem('login'))
				if(login){
					this.$store.state.login = true;
					document.getElementById('dl2').innerHTML = '注销';
				}else{
					this.$store.state.login = false;
					document.getElementById('dl2').innerHTML = '登录';
				}
			}
		}
	}
</script>

<style>
#head2 ul{
	height: 2.5rem;
	overflow: hidden;
}
#head2 ul li{
	float: left;
	height: 100%;
}
#head2 ul li:first-of-type img{
	margin-left: 1rem;
	margin-top: 0.6rem;
	height: 40%;
	width: 0.7rem;
	margin-right: 1.4rem;
}
#head2 ul li input{
	font-size: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 1rem;
	height: 1.25rem;
	width: 10.5rem;
	margin-top: 0.5rem;
	text-indent: 0.5rem;
	background: #f3f3f3;
}
#head2 ul li div{
	line-height: 2.5rem;
	margin-left: 1rem;
	color: #ffa800;
	font-size: 0.8rem;
}
</style>