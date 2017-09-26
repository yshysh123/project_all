<template>
	<div id="raiderscon">
		<div class="raiderscon_title">
			<img :src="raidersContent.titleimg"/>
			<div>{{raidersContent.title}}</div>
		</div>
		<div class="raiderscon_nav">
			<div class="raiderscon_nav_top">
				<img :src="raidersContent.headpic">
				<div class="raiderscon_nav_top1">{{raidersContent.name}}&nbsp;&nbsp;&nbsp;Lv{{raidersContent.level}}</div>
				<div class="raiderscon_nav_top2">{{raidersContent.time}}&nbsp;&nbsp;&nbsp;{{raidersContent.view}}&nbsp;&nbsp;&nbsp;{{raidersContent.reply}}</div>
				<div class="raiderscon_nav_top3">{{raidersContent.place}}</div>
			</div>
			<div class="raiderscon_nav_btm">
				<div class="raiderscon_nav_btm1">出发时间：{{raidersContent.time}}</div>
				<div class="raiderscon_nav_btm2">人物：{{raidersContent.people}}</div>
				<div class="raiderscon_nav_btm3">人均费用：{{raidersContent.prise}}</div>
				<div class="raiderscon_nav_btm4">出行天数：{{raidersContent.day}}</div>
			</div>
		</div>
		<div class="raiderscon_content">
			<div class="raiderscon_content_title">{{raidersContent.head}}</div>
			<div v-for="item in raidersContent.content">
				<div v-html="item.message" class="raiderscon_content_div"></div>
				<img :src="item.img">
			</div>
		</div>
	</div>
</template>
<script>
	import {raidersContent} from '../../data/raidersContent.js'
	export default{
		mounted(){
			this.fetchData(this.$route.params.id-1);
			document.getElementsByTagName('body')[0].scrollTop = 0;
		},
		data(){
			return {
				raidersContent:{}
			}
		},
		methods:{
			fetchData(id){
                var _this=this;
				this.raidersContent = raidersContent[id];
			}
		}
	}
</script>

<style>
@import '../../assets/css/article.css'
</style>