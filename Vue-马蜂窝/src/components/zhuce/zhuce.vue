<template>
	<div id="zhuce">
		<div class="login_inputs">
			<div>账号:</div><el-input v-model="input1" placeholder="请输入账号"></el-input>
			<div>密码:</div><el-input type="password" v-model="input2" placeholder="请输入密码"></el-input>
			<div>昵称:</div><el-input v-model="input3" placeholder="请输入昵称"></el-input>
			<div>性别:</div>
			<p>
				<el-radio class="radio" v-model="input4" label="1">男</el-radio>
	  			<el-radio class="radio" v-model="input4" label="2">女</el-radio>
  			</p>
			<div>出生日期:</div>
			<el-date-picker
		      v-model="input5"
		      type="date"
		      placeholder="选择出生日期"
		    >
		    </el-date-picker>
			<div>手机号:</div><el-input v-model="input6" placeholder="请输入手机号"></el-input>
			<div>兴趣:</div><el-input v-model="input7" placeholder="请输入兴趣:用 “/” 分割"></el-input>
			<div>想去旅游的地方:</div><el-input v-model="input8" placeholder="请输入想去的地方:用 “/” 分割"></el-input>
		</div>
		<div class="err">{{error}}</div>
		<div class="login_button">
			<el-button type="warning" @click="click">注册</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			
		},
		data(){
			return {
				radio: '1',
				input1:'',
				input2:'',
				input3:'',
				input4:'',
				input5:'',
				input6:'',
				input7:'',
				input8:'',
				error:''
			}
		},
		methods:{
			click(){
				if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5&&this.input6&&this.input7&&this.input8){
					this.error = '';
					let arr = this.$store.state.loginmessage;
					let hobby = this.input7.split('/');
					let traval = this.input8.split('/');
					function Two(val){
						return Number(val)>10 ? ''+val:'0'+val
					}
					let date = this.input5.getFullYear()+'-'+Two(this.input5.getMonth()+1)+'-'+Two(this.input5.getDate());
					arr.forEach((e,i)=>{
						if(e.passname!==this.input1){
							let person = {
								name:this.input3,
				        		passname:this.input1,
				        		password:this.input2,
				        		sex:this.input4,
				        		brith:date,
				        		phone:this.input6,
				        		hobby:hobby,
				        		place:traval,
							}
							this.$store.state.loginmessage.push(person)
							this.$router.push({path: '/login'})
						}
					})
				}else{
					this.error = '请填写内容'
				}
			}
		}	
	}
</script>

<style>
	#zhuce{
		font-size: 0.6rem;
	}
	#zhuce .changelogin{
		padding: 0.3rem;
		line-height: 1.5rem;
	}
	#zhuce .changelogin ul{
		overflow: hidden;
	}
	#zhuce .changelogin ul .login_active{
		border-top:2px solid #ffba33;
		background-color:#fff;
		color:#ffba33;
	}
	#zhuce .changelogin ul li{
		float: left;
		width: 8rem;
		text-align: center;
		border-top:2px solid #dadada;
		color:#999;
		background-color:#fafafa;
	}
	#zhuce .login_inputs{
		width: 80%;
		margin: 0.5rem auto 0;
	}
	#zhuce .login_inputs .el-input__inner{
		margin-bottom: 0.2rem;
		height: 1.8rem;
	}
	#zhuce .login_inputs p{
		height: 1.8rem;
		line-height: 1.8rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		text-indent: 0.2rem;
	}
	#zhuce .login_inputs div{
		line-height: 1rem;
	}
	#zhuce .err{
		height: 1rem;
		line-height: 1rem;
		color: red;
		text-align: center;
	}
	#zhuce .login_button .el-button {
		width: 90%;
		margin-left: 0.9rem;
		margin-bottom: 0.5rem;
	}
</style>