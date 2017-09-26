<template>
	<div id="raiders">
		<div class="title">
			<div class="title_head">
				| 8月 | 2017 | 蜂首纪念
				<span class="timerili" @click="changerili">蜂首日历</span>
			</div>
			<swipe class="my-swipe">
				<swipe-item class="slide1" v-for="(pic,index) in title">
					<img :src="pic.pic">
					<div class="swipediv">{{pic.title}}<br>{{pic.title2}}</div>
				</swipe-item>
			</swipe>
			<ul>
				<li v-for="(item,index) in titlesmall"><img :src="item"></li>
			</ul>
		</div>
		<div class="raiders_content">
			<div class="title2">&gt;&nbsp;&nbsp;&nbsp;热门游记&nbsp;&nbsp;&nbsp;&lt;</div>
			<ul>
				<li v-for="item in raiders">
					<router-link :to="'/raiders/'+item.id">
						<img :src="item.pic" class="raiders_img1">
						<div class="raiders_time"><span>{{item.timebig}}</span>{{item.timesmall}}</div>
						<div class="raiders_title">{{item.title}}</div>
						<img :src="item.pichead" class="raiders_img2">
						<div class="zzc"></div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {raiders} from '../../data/raiders.js'
	require('vue-swipe/dist/vue-swipe.css')
	import { Swipe, SwipeItem } from 'vue-swipe';
	export default{
		components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
		mounted(){
            document.getElementsByTagName('body')[0].scrollTop = 0;
            this.fetchData();
		},
		data(){
			return {
                raiders:[],
                title:[
                	{
                		pic:'https://c4-q.mafengwo.net/s10/M00/D7/C9/wKgBZ1mKrDSAThllAAP9A2QVUho07.jpeg?imageMogr2%2Fthumbnail%2F%21604x360r%2Fgravity%2FCenter%2Fcrop%2F%21604x360%2Fquality%2F90',
                		title:'至北向南，单人单骑穿越西夏..',
                		title2:'我是Rex-Bang.我在宁夏'
                	},
                	{
                		pic:'https://b1-q.mafengwo.net/s10/M00/AC/0D/wKgBZ1mJZBSAFZXpAAWxHsm_qI876.jpeg?imageMogr2%2Fthumbnail%2F%21604x360r%2Fgravity%2FCenter%2Fcrop%2F%21604x360%2Fquality%2F90',
                		title:'两个背包一个娃，28天穿越奥斯..',
                		title2:'我是贩暖.我在土耳其'
                	},
                	{
                		pic:'https://b1-q.mafengwo.net/s10/M00/B7/82/wKgBZ1mMBLiAcN1CAAKRM75eKjk77.jpeg?imageMogr2%2Fthumbnail%2F%21604x360r%2Fgravity%2FCenter%2Fcrop%2F%21604x360%2Fquality%2F90',
                		title:'吃货的呐喊：北京欢迎你！总有..',
                		title2:'我是柴花的花.我在北京'
                	},
                	{
                		pic:'https://c1-q.mafengwo.net/s10/M00/47/68/wKgBZ1mIPaaABvw4AAQnkN6CH8k64.jpeg?imageMogr2%2Fthumbnail%2F%21604x360r%2Fgravity%2FCenter%2Fcrop%2F%21604x360%2Fquality%2F90',
                		title:'巴厘岛：浪漫不息，亲情不止..',
                		title2:'我是YangYangiiiiii.我在巴厘岛'
                	},
                	{
                		pic:'https://n1-q.mafengwo.net/s10/M00/DF/58/wKgBZ1mNXCCAenCyAAYXQ_L77JQ13.jpeg?imageMogr2%2Fthumbnail%2F%21604x360r%2Fgravity%2FCenter%2Fcrop%2F%21604x360%2Fquality%2F90',
                		title:'老挝：一个埋有8000多万颗未爆..',
                		title2:'我是形色小葱.我在老挝'
                	}
                ],
                titlesmall:[
                	'https://c4-q.mafengwo.net/s10/M00/D7/C9/wKgBZ1mKrDSAThllAAP9A2QVUho07.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90',
                	'https://b1-q.mafengwo.net/s10/M00/AC/0D/wKgBZ1mJZBSAFZXpAAWxHsm_qI876.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90',
                	'https://b1-q.mafengwo.net/s10/M00/B7/82/wKgBZ1mMBLiAcN1CAAKRM75eKjk77.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90',
                	'https://c1-q.mafengwo.net/s10/M00/47/68/wKgBZ1mIPaaABvw4AAQnkN6CH8k64.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90',
                	'https://n1-q.mafengwo.net/s10/M00/DF/58/wKgBZ1mNXCCAenCyAAYXQ_L77JQ13.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90'
                	
                ]
			}
		},
		methods:{
			fetchData(){
                this.raiders = raiders;
          	},
          	changerili(){
          		this.$router.push({path: '/rili/2017'})
          	}
		}
	}
</script>

<style>
#raiders .title {
  height: 16.6rem;
  background: url("fs-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
}
#raiders .title .title_head {
  height: 1.6rem;
  line-height: 1rem;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
}
#raiders .title ul {
  padding-left: 0.9rem;
  padding-top: 0.4rem;
}
#raiders .title ul li {
  float: left;
  height: 2.3rem;
  width: 2.3rem;
  margin-right: 0.3rem;
  border-radius: 0.2rem;
  box-shadow: 0.2rem 0.2rem 0.2rem #333333;
}
#raiders .title ul li img {
  border-radius: 0.2rem;
  height: 100%;
  width: 100%;
}
#raiders .raiders_content {
  padding: 0.4rem;
}
#raiders .raiders_content li {
  position: relative;
  margin-bottom: 0.4rem;
}
#raiders .raiders_content h3 {
  height: 0.8rem;
  line-height: 0.6rem;
  font-size: 0.64rem;
}
#raiders .raiders_content .raiders_img1 {
  width: 100%;
  height: 7rem;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.1rem #333333;
}
#raiders .raiders_content .raiders_time {
  position: absolute;
  top: 0.4rem;
  left: 0.6rem;
  font-size: 0.64rem;
  color: #fff;
  font-weight: 900;
  z-index: 2;
}
#raiders .raiders_content .raiders_time span {
  font-size: 1.1rem;
}
#raiders .raiders_content .raiders_title {
  font-size: 0.64rem;
  position: absolute;
  left: 0.6rem;
  top: 1.8rem;
  color: #fff;
  font-weight: 900;
  z-index: 2;
}
#raiders .raiders_content .raiders_img2 {
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  bottom: 0.6rem;
  left: 0.6rem;
  z-index: 2;
}
#raiders .raiders_content .zzc {
  border-radius: 0.2rem;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.4);
}
#raiders .my-swipe {
  	height: 12.5rem;
  	color: #000;
  	font-size: 0.6rem;
  	text-align: center;
  	border-radius: 0.4rem;
  	box-shadow:5px 5px 5px #333;
}
#raiders .my-swipe .swipediv{
	margin-top: 0.4rem;
	line-height: 1.1rem;
	font-size: 0.7rem;
	font-weight: 900;
	text-align: center;
}
#raiders .mint-swipe-items-wrap{
	border-radius: 0.4rem;
}
#raiders .mint-swipe-indicator.is-active{
	background: red;
}
#raiders .my-swipe img{
	width:100%;
	height: 70%;
}
#raiders .slide1 {
  background-color: #fff;
  color: #000;
}
#raiders .title2{
  font-size: 0.6rem;
  background-color:#f8f8f8;
  color:#999;
  text-align: center;
  line-height: 1.3rem;
  margin-bottom: 0.3rem;
}
.timerili{
	margin-left: 0.4rem;
	padding: 0.2rem;
	font-size: 0.6rem;
	color: #000;
	border: 2px solid #ccc;
	border-radius: 0.6rem;
}
</style>