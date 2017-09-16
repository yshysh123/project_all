<template>
	<div id="login">
		<div class="login_con">
			<el-form autoComplete="on" label-position="left" label-width="0px"
		      	class="card-box login-form">
		      	<h3 class="title">系统登录</h3>
		      	<el-form-item prop="email">
		        	<el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="邮箱"></el-input>
		      	</el-form-item>
		      	<el-form-item prop="password">
		        	<el-input name="password" type="password" @keyup.enter="handleLogin" v-model="loginForm.password" autoComplete="on"
		          	placeholder="密码"></el-input>
		      	</el-form-item>
		      	<el-form-item>
		        	<el-button type="primary" style="width:100%;" @click="handleLogin">
		          		登录
		        	</el-button>
		      	</el-form-item>
		      	<div class="error">{{error}}</div>
		      	<div class='tips'>admin 账号为:389636851@qq.com 密码：123456</div>
		      	<div class='tips'>程序猿 账号:2223282563@qq.com 密码：123456</div>
		      	<div class='tips'>游客 账号:88888888@qq.com 密码：123456</div>
		    </el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
      return {
        loginForm: {
          email: '389636851@qq.com',
          password: ''
        },
        loading: false,
        showDialog: false,
        error:''
      }
    },
	mounted(){
	},
	computed: {
	},
	methods: {
		handleLogin() {
        	let arr = this.$store.state.loginmessage;
			arr.forEach((e,i)=>{
				if(e.passname==this.loginForm.email){
					
					if(e.password==this.loginForm.password){
						this.error = ''
						this.$store.state.logintrue = e;
						let login = {
							name:e.passname,
							password:e.password,
							namenew:e.name,
							pic:e.pic,
							login:e.login
						}
						localStorage.setItem('loginHT',JSON.stringify(login))
						this.$router.push({path: '/body'})
					}else{
						this.error = '请输入正确的密码'
					}
				}else{
					this.error = '请输入正确的用户名'
				}
			})
//			if(this.loginForm.emails&&this.loginForm.password){
//				let login = {
//					name:this.input1,
//					password:this.input2
//				}
//				localStorage.setItem('loginHT',JSON.stringify(login))
//				
//			}
		}
	}
}
</script>

<style  rel="stylesheet/scss" lang="scss">
   .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
  }

  #login {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #2d3a4b;
    left: 0;
	top: 0;
	z-index: 10000;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #eeeeee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .error{
    	height: 40px;
    	line-height: 40px;
    	text-align: center;
    	margin-bottom: 20px;
    	color: #FF4949;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .forget-pwd {
      color: #fff;
    }
  }
</style>