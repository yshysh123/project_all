<template>
	<div id="wendacon">
		<div class="wendacon_title">
			<div>{{questionContent.title}}</div>
			<div>{{questionContent.titlecontent}}</div>
			<div><span>{{questionContent.quesname}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{questionContent.questime}}</span></div>
			<div>{{questionContent.city}} · {{questionContent.num}}浏览 · {{questionContent.answer}}回答</div>
			<img :src="questionContent.quesimg"/>
		</div>
		<div class="wendacon_content">
			<h2>共有{{questionContent.answer}}回答</h2>
			<ul>
				<li class="wenda_li">
					<div class="wendacon_content_title">
						<img :src="questionContent.answeronepic">
						<span>{{questionContent.answeronename}}</span>
						<span>Lv.{{questionContent.answeronelevel}}</span>
					</div>
					<div v-for="item in questionContent.answeronecontent" class="wendacon_content_neirong">
						<div v-html="item.c"></div>
						<img :src="item.p">
					</div>
					<div class="wendacon_content_goon" @click="goon(0,$event)">继续阅读</div>
					<div class="wendacon_content_footer">
						<span></span>
						<span>{{questionContent.answeronegood}} · </span>
						<span>{{questionContent.answeronepinglun}}评论</span>
						<span>共字</span>
					</div>
				</li>
				<li class="wenda_li">
					<div class="wendacon_content_title">
						<img :src="questionContent.answertwopic">
						<span>{{questionContent.answertwoname}}</span>
						<span>{{questionContent.answertwolevel}}</span>
					</div>
					<div v-for="item in questionContent.answertwocontent"  class="wendacon_content_neirong">
						<div v-html="item.c"></div>
						<img :src="item.p">
					</div>
					<div class="wendacon_content_goon" @click="goon(1,$event)">继续阅读</div>
					<div class="wendacon_content_footer">
						<span></span>
						<span>{{questionContent.answertwogood}} · </span>
						<span>{{questionContent.answertwopinglun}}评论</span>
						<span>共字</span>
					</div>
				</li>
				<li class="wenda_li">
					<div class="wendacon_content_title">
						<img :src="questionContent.answerthreepic">
						<span>{{questionContent.answerthreename}}</span>
						<span>{{questionContent.answerthreelevel}}</span>
					</div>
					<div v-for="item in questionContent.answerthreecontent"  class="wendacon_content_neirong">
						<div v-html="item.c"></div>
						<img :src="item.p">
					</div>
					<div class="wendacon_content_goon" @click="goon(2,$event)">继续阅读</div>
					<div class="wendacon_content_footer">
						<span></span>
						<span>{{questionContent.answerthreegood}} · </span>
						<span>{{questionContent.answerthreepinglun}}评论</span>
						<span>共字</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {questionContent} from '../../data/questionContent.js'
	export default{
		mounted(){
			this.fetchData(this.$route.params.id-1);
			document.getElementsByTagName('body')[0].scrollTop = 0;
			let con = document.getElementsByTagName('li');
			for(var i=0;i<con.length;i++){
				con[i].style.maxHeight = '20rem'
			}
		},
		data(){
			return {
				questionContent:{},
				totle:0
			}
		},
		methods:{
			fetchData(id){
                var _this=this;
				this.questionContent = questionContent[id];
			},
			goon(index,ev){
				ev.target.style.display = 'none';
				let con = document.getElementsByClassName('wenda_li');
				con[index].style.maxHeight = ''
			}
		}
	}
</script>

<style>
#wendacon {
  background: #fafafa;
  font-family: "微软雅黑";
  letter-spacing: 0.04rem;
}
#wendacon .wendacon_title {
  background: #fffef0;
  padding: 0.8rem 0.4rem;
  position: relative;
}
#wendacon .wendacon_title div:first-child {
  font-size: 0.72rem;
  line-height: 1.2rem;
  margin-bottom: 0.4rem;
}
#wendacon .wendacon_title div:nth-child(2) {
  font-size: 0.64rem;
  line-height: 0.8rem;
  margin-bottom: 0.4rem;
}
#wendacon .wendacon_title img {
  position: absolute;
  left: 0.4rem;
  bottom: 2.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
}
#wendacon .wendacon_title div:nth-child(3) {
  margin-left: 1.4rem;
  padding-top: 0.3rem;
  font-size: 0.56rem;
  line-height: 0.8rem;
  margin-bottom: 1rem;
}
#wendacon .wendacon_title div:nth-child(4) {
  font-size: 0.56rem;
  line-height: 0.8rem;
}
#wendacon .wendacon_content {
  margin-top: 0.2rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}
#wendacon .wendacon_content h2 {
  font-weight: 100;
  padding-left: 0.4rem;
  line-height: 1.2rem;
  font-size: 0.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 0.02rem solid #cccccc;
}
#wendacon .wendacon_content ul {
  background: #fafafa;
}
#wendacon .wendacon_content ul li {
  background: #fff;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-bottom: 0.4rem;
  box-shadow: 0 0.02rem 0.04rem 0.02rem #cccccc;
  overflow: hidden;
  position: relative;
}
#wendacon .wendacon_content .wendacon_content_title {
  margin-bottom: 0.4rem;
}
#wendacon .wendacon_content .wendacon_content_title img {
  margin-right: 0.4rem;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  vertical-align: middle;
}
#wendacon .wendacon_content .wendacon_content_title span {
  font-size: 0.56rem;
  margin-right: 0.4rem;
}
#wendacon .wendacon_content .wendacon_content_title span:last-child {
  color: #ff9d00;
}
#wendacon .wendacon_content .wendacon_content_neirong {
  height: auto;
  font-size: 0.64rem;
  line-height: 1.4rem;
}
#wendacon .wendacon_content .wendacon_content_neirong img {
  width: 100%;
}
#wendacon .wendacon_content .wendacon_content_goon {
  position: absolute;
  height: 1.6rem;
  bottom: 1.6rem;
  left: 0;
  background: #fff;
  width: 100%;
  text-align: center;
  line-height: 1.6rem;
  font-size: 0.8rem;
  color: #ff9e02;
  opacity: 0.9;
}
#wendacon .wendacon_content .wendacon_content_footer {
  position: absolute;
  height: 1.6rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  line-height: 1.6rem;
  font-size: 0.56rem;
}
#wendacon .wendacon_content .wendacon_content_footer span:first-child {
  background: url('icon_sprite.png') no-repeat;
  background-size: 4rem;
  background-position: 0 -1.5rem;
  display: inline-block;
  height: 1.2rem;
  width: 1.2rem;
  vertical-align: middle;
}
#wendacon .wendacon_content .wendacon_content_footer span:nth-child(2) {
  color: #ff9e02;
}
#wendacon .wendacon_content .wendacon_content_footer span:nth-child(3) {
  color: #c0c0c0;
}
#wendacon .wendacon_content .wendacon_content_footer span:nth-child(4) {
  position: absolute;
  right: 3rem;
  color: #c0c0c0;
}
</style>