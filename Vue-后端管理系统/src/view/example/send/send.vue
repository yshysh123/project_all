<template>
	<div id="send">
		<div class="sendcon">
			<el-row :gutter="20">
	            <el-col :span="12">
	                <div class="grid-content">
	                    	姓名</br>
	                    <el-input v-model="input1" placeholder="请输入内容"></el-input></br>
	                    	手机号</br>
	                    <el-input v-model="input2" placeholder="请输入内容"></el-input></br>
	                    	年龄</br>
	                    <el-input v-model="input3" placeholder="请输入内容"></el-input></br>
	                </div>
	            </el-col>
		        <el-col :span="12">
	                <div class="grid-content">
	                    	简介</br>
	                    <el-input v-model="input4" placeholder="请输入内容"></el-input></br>
	                    	星座</br>
	                    <el-input v-model="input5" placeholder="请输入内容"></el-input></br>
	                    	住址</br>
	                    <el-input v-model="input6" placeholder="请输入内容"></el-input></br>
		            </div>
		        </el-col>
		   	</el-row>
		   		照片上传
		   	<el-upload
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-change="change">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog v-model="dialogVisible" size="tiny">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
	        	自我介绍
	        <el-input
	            type="textarea"
	            :rows="2"
	            placeholder="请输入内容"
	            v-model="textarea1">
	        </el-input>
	        	掌握技能
	        <el-input
	            type="textarea"
	            :rows="2"
	            placeholder="请输入内容"
	            v-model="textarea2">
	        </el-input>
	        <div class="block">
	            <span class="wrapper">
	                <el-button type="success" @click="submitInfo">提交</el-button>
	                <el-button type="danger" @click="cancel">取消</el-button>
	            </span>
	        </div>
		</div>
		<div class="showcon">
			<ul>
				<li>
					<span>姓名</span>
					<span>简介</span>
					<span>手机号</span>
					<span>星座</span>
					<span>年龄</span>
					<span>住址</span>
					<span>头像</span>
					<span>介绍</span>
					<span>技能</span>
				</li>
				<li v-for="(item,index) in arrxuanran">
					<span>{{item.name}}</span>
					<span>{{item.jianjie}}</span>
					<span>{{item.phone}}</span>
					<span>{{item.xingzuo}}</span>
					<span>{{item.age}}</span>
					<span>{{item.add}}</span>
					<span><img :src="item.img"/></span>
					<span>{{item.jieshao}}</span>
					<span>{{item.jineng}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'jianshu',
	  	data () {
	  		return{
	  			dialogImageUrl: '',
        		dialogVisible: false,
        		input1:'',
        		input2:'',
        		input3:'',
        		input4:'',
        		input5:'',
        		input6:'',
        		textarea1:'',
        		textarea2:'',
        		img:'',
        		arr:[],
        		arrxuanran:[]
	  		}
	  	},
  		mounted(){
  			if(localStorage.getItem('sendmessage')){
  				this.arrxuanran = JSON.parse(localStorage.getItem('sendmessage'))
  				this.arr = JSON.parse(localStorage.getItem('sendmessage'))
  			}
		},
		methods:{
			compute(){
  				this.arrxuanran = JSON.parse(localStorage.getItem('sendmessage'))
			},
	        cancel(){
	            var send = document.getElementById('send');
	            var inputs  = send.getElementsByTagName('input');
	            var textareas  = send.getElementsByTagName('textarea');
	            for(var i=0;i<inputs.length;i++){
	                inputs[i].value = '';
	            }
	            for(var i=0;i<textareas.length;i++){
	                textareas[i].value = '';
	            }
	            this.$message.error('取消发帖');
	        },
	        change(file,fileList){
	        	this.img = file.url;
	        },
	        submitInfo(){
	        	if(this.input1&&this.input2&&this.input3&&this.input4&&this.input5&&this.input6&&this.textarea1&&this.textarea2&&this.img){
		        	this.$message({
			          message: '恭喜你，发帖成功',
			          type: 'success'
			        });
		        	let json = {};
		        	json.name = this.input1;
		        	json.jianjie = this.input2;
		        	json.phone = this.input3;
		        	json.xingzuo = this.input4;
		        	json.age = this.input5;
		        	json.add = this.input6;
		        	json.jieshao = this.textarea1;
		        	json.jineng = this.textarea2;
		        	json.img = this.img;
		        	this.arr.push(json)
		        	localStorage.setItem('sendmessage',JSON.stringify(this.arr));
		        	this.compute();
		        	var send = document.getElementById('send');
		            var inputs  = send.getElementsByTagName('input');
		            var textareas  = send.getElementsByTagName('textarea');
		            for(var i=0;i<inputs.length;i++){
		                inputs[i].value = '';
		            }
		            for(var i=0;i<textareas.length;i++){
		                textareas[i].value = '';
		            }
	        	}else{
	        		this.$message.error('请输入全部内容');
	        	}
	        }
	    }
	}
</script>

<style>
	#send{
		margin-left: 180px;
	}
	#send .sendcon{
		width: 800px;
		margin: 20px auto;
	}
	#send .block{
		width: 150px;
		margin: 0 auto;
	}
	#send .showcon{
		font-size: 18px;
		text-align: center;
		line-height: 50px;
		margin: 40px auto;
		width: 900px;
	}
	#send .showcon li{
		overflow: hidden;
	}
	#send .showcon li:first-of-type span{
		width: 100px;
		height: 30px;
		line-height: 30px;
	}
	#send .showcon span{
		float: left;
		display: block;
		border: 1px solid #ccc;
		box-sizing: border-box;
		width: 100px;
		height: 50px;
	}
	#send .showcon img{
		display: block;
		width: 100px;
		height: 50px;
	}
</style>