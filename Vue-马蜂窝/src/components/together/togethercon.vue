<template>
	<div id="together_con">
		<div class="together_con_title">
			<img :src="togetherContent.pic" class="img1">
			<div class="together_con_title_title">{{togetherContent.title}}</div>
			<div class="together_con_title_name">{{togetherContent.name}}</div>
			<img :src="togetherContent.touxiang" class="img2">
			<div class="together_con_title_time">{{togetherContent.time}}</div>
			<div class="together_con_title_right"><span>关注:{{follow}}</span><br><span>报名:{{enroll}}</span><br><span>回复:{{message}}</span></div>
		</div>
		<div class="together_con_nav">
			<div>出行时间&nbsp;&nbsp;{{togetherContent.time}}</div>
			<div>联系方式&nbsp;&nbsp;{{togetherContent.contect}}</div>
			<div>出行天数&nbsp;&nbsp;{{togetherContent.days}}天</div>
		</div>
		<div class="together_con_content">
			<div v-html="togetherContent.content">
			</div>
			<div @touchstart="baoming">{{bm}}</div>
			<div>已报名{{enroll}}人</div>
			<ul>
				<li v-for="(item,index) in togetherContent.enroll"><img :src="item"></li>
			</ul>
			<div>已关注{{follow}}人</div>
			<ul>
				<li v-for="(item,index) in togetherContent.follow"><img :src="item"></li>
			</ul>
		</div>
		<div class="bg"></div>
		<div class="together_con_message">
			<div>留言 （{{message}}条）</div>
			<textarea v-model="msg"></textarea>
			<div @touchstart="liuyan">发表留言</div>
		</div>
		<div class="together_con_huifu">
			<ul>
				<li v-for="item in togetherContent.message">
					<div class="huifu_title">
						<div>{{item.name}}&nbsp;&nbsp;&nbsp;{{item.time}}</div>
						<div>Lv{{item.level}}</div>
						<div>回复</div>
						<img :src="item.pic">
					</div>
					<div class="huifu_content">{{item.word}}</div>
				</li>
			</ul>
		</div>
		<div class="bg"></div>
		<div class="together_con_footer">
			<div>关注</div>
			<div @touchstart="baoming">{{bm}}</div>
		</div>
	</div>
</template>
<script>
	import {togetherContent} from '../../data/togetherContent.js'
	export default{
		mounted(){
			this.fetchData(this.$route.params.id-1);
			document.getElementsByTagName('body')[0].scrollTop = 0;
		},
		data(){
			return {
				togetherContent:{},
				follow:0,
				enroll:0,
				message:0,
				onOff:true,
				bm:'我要报名',
				msg:''
			}
		},
		methods:{
			fetchData(id){
                var _this=this;
				this.togetherContent = togetherContent[id];
				this.follow = this.togetherContent.follow.length;
				this.enroll = this.togetherContent.enroll.length;
				this.message = this.togetherContent.message.length;
			},
			baoming(){
				if(this.$store.state.login){
					if(this.onOff){
						this.onOff = false;
						this.togetherContent.enroll.unshift(this.$store.state.loginmessage[0].pic);
						this.bm = '取消报名';
						this.$message({
				        	message: '报名成功',
				          	type: 'success'
				        });
					}else{
						this.onOff = true;
						this.togetherContent.enroll.shift();
						this.bm = '我要报名';
						this.$message({
				          message: '取消报名',
				          type: 'warning'
				        });
					}
				}else{
					this.$router.push({path: '/login'})
				}
			},
			liuyan(){
				function Two(val){
					return Number(val)>10 ? ''+val:'0'+val
				}
				let dateNow = new Date;
				let date = dateNow.getFullYear()+'-'+Two(dateNow.getMonth()+1)+'-'+Two(dateNow.getDate())+' '+Two(dateNow.getHours())+':'+Two(dateNow.getMinutes())+':'+Two(dateNow.getSeconds());
				if(this.$store.state.login){
					if(this.msg){
						let msgnew = {
							name:this.$store.state.loginmessage[0].name,
							pic:this.$store.state.loginmessage[0].pic,
							time:date,
							level:1,
							word:this.msg
						}
						this.togetherContent.message.unshift(msgnew);
						this.msg = '';
						this.$message({
				        	message: '留言成功',
				          	type: 'success'
				        });
					}
				}
				else{
					this.$router.push({path: '/login'})
				}
			}
		}
	}
</script>

<style>
@import '../../assets/css/article.css'
</style>