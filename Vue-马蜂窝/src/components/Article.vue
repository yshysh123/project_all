<template>
	<div id="artile">
		<div class="artile_content">
			<h3 class="artile_title">{{articleData.title}}</h3>
			<div class="time"><p>{{articleData.time | normalTime}}</p></div>
			<div class="artile_header"><h2><img :src="articleData.author_face" alt=""/></h2></div>
		    <div class="text-box" v-html="articleData.title_word"></div>
		    <div class="cont">
				<h3>{{articleData.content1_title}}</h3>
				<div><img :src="articleData.pic1"></div>
				<div>{{articleData.content1}}</div>
				<div><img :src="articleData.pic2"></div>
				<div>{{articleData.content2}}</div>
				<div><img :src="articleData.pic3"></div>
				<div>{{articleData.content3}}</div>
				<h3>{{articleData.content2_title}}</h3>
				<div><img :src="articleData.pic4"></div>
				<div>{{articleData.content4}}</div>
				<div><img :src="articleData.pic5"></div>
				<div>{{articleData.content5}}</div>
				<div><img :src="articleData.pic6"></div>
				<div>{{articleData.content6}}</div>
		    </div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import {articleData} from '../data/article.js'
	Vue.filter("normalTime", function(value) {
	  if (value) {
	    let oDate = new Date();
	    oDate.setTime(value);

	    let y = oDate.getFullYear();
	    let m = oDate.getMonth() + 1;
	    let d = oDate.getDate();

	    let h = oDate.getHours();
	    let mm = oDate.getMinutes();
	    let s = oDate.getSeconds();

	    return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
	  }
	})

	export default{
		mounted(){
			this.fetchData(this.$route.params.id-1);
			document.getElementsByTagName('body')[0].scrollTop = 0;
		},
		data(){
			return {
				articleData:{}
			}
		},
		watch:{
			$route(to){
				var reg=/article\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
                var _this=this;
				this.articleData = articleData[id];
			}
		}
	}
</script>

<style>
@import '../assets/css/article.css'
</style>
