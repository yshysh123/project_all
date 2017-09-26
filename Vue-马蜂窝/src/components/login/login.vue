<template>
	<div id="login">
		<div class="changelogin">
			<ul>
				<li class="login_active">普通登陆</li>
				<li>短信验证码登陆</li>
			</ul>
		</div>
		<div class="login_inputs">
			<el-input v-model="input1" placeholder="请输入账号"></el-input>
			<el-input type="password" v-model="input2" placeholder="请输入密码"></el-input>
		</div>
		<div class="err">{{error}}</div>
		<div class="login_button">
			<el-button type="warning" @click="click">登陆</el-button>
			<el-button :plain="true" type="warning" @click="zhuce">快速注册</el-button>
		</div>
		<div class="hd">
			<span>使用第三方帐号登录</span>
		</div>
		<ul class="login_ul">
			<li>
				<div></div>
				<p>新浪微博</p>
			</li>
			<li>
				<div></div>
				<p>QQ登陆</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted(){
			localStorage.removeItem('login');
		},
		data(){
			return {
				input1:'',
				input2:'',
				error:''
			}
		},
		methods:{
			click(){
				let arr = this.$store.state.loginmessage;
				arr.forEach((e,i)=>{
					if(e.passname==this.input1){
						if(e.password==this.input2){
							this.error = ''
							this.$store.state.loginnum = i;
							this.$router.push({path: '/'})
						}else{
							this.error = '请输入正确的密码'
						}
					}else{
						this.error = '请输入正确的用户名'
					}
				})
				if(this.input1&&this.input2){
					let login = {
						name:this.input1,
						password:this.input2
					}
					localStorage.setItem('login',JSON.stringify(login))
					
				}
			},
			zhuce(){
				this.$router.push({path: '/zhuce'})
			}
		}	
	}
</script>

<style>
	#login{
		font-size: 0.6rem;
	}
	#login .changelogin{
		padding: 0.3rem;
		line-height: 1.5rem;
	}
	#login .changelogin ul{
		overflow: hidden;
	}
	#login .changelogin ul .login_active{
		border-top:2px solid #ffba33;
		background-color:#fff;
		color:#ffba33;
	}
	#login .changelogin ul li{
		float: left;
		width: 8rem;
		text-align: center;
		border-top:2px solid #dadada;
		color:#999;
		background-color:#fafafa;
	}
	#login .login_inputs{
		width: 90%;
		margin: 1rem auto 0;
	}
	#login .login_inputs .el-input__inner{
		margin-bottom: 0.2rem;
		height: 1.8rem;
	}
	#login .err{
		height: 1rem;
		line-height: 1rem;
		color: red;
		text-align: center;
	}
	#login .login_button .el-button {
		width: 90%;
		margin-left: 0.9rem;
		margin-bottom: 0.5rem;
	}
	#login .hd{
		margin-top: 1rem;
		border-top:1px solid #d8d8d8;
		height: 0.5rem;
		position: relative;
	}
	#login .hd span{
		color:#ccc;
		background-color:#fff;
		position:absolute;
		top: -0.3rem;
		left: 50%;
		margin-left:-2.6rem;
		display:inline-block;
	}
	#login .login_ul{
		margin-top: 2rem;
		overflow: hidden;
		padding-left: 2rem;
	}
	#login .login_ul li{
		float: left;
		width: 40%;
		height: 3rem;
		background: #f3f3f3;
		border:1px solid #e6e5e5;
		border-radius: 0.1rem;
	}
	#login .login_ul li:nth-of-type(1){
		margin-right: 1rem;
	}
	#login .login_ul li div{
		background: url(connect_ico.png) no-repeat;
		background-size: 6rem 2rem;
		height: 70%;
		width: 30%;
		margin:0 auto;
	}
	#login .login_ul li:last-child div{
		background-position: -2rem;
	}
	#login .login_ul li p{
		width: 50%;
		margin:0 auto;
		height: 30%;
		text-align: center;
	}
</style>