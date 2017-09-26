<template>
	<div class="content">
		<swipe class="my-swipe">
			<swipe-item class="slide1" v-for="pic in pics"><img :src="pic"></swipe-item>
		</swipe>
		<ul class="navs clearfix">
			<li v-for="(item,index) in items">
				<router-link :to="'/'+items2[index]">
					<i></i>
					<p>{{item}}</p>
				</router-link>   	
			</li>
		</ul>
		<div class="title">&gt;&nbsp;&nbsp;&nbsp;推荐攻略&nbsp;&nbsp;&nbsp;&lt;</div>
		<div class="backtotop" @touchend="backtotop">
			<img src="static/imgs/backtop.png"/>
		</div>
	    <div class="newsList">
	    	<ul>
	    		<scroller style="top: 23.5rem;"
		            :on-refresh="refresh"
		            :on-infinite="infinite"
	            >
		            <li v-for="item in index">
						<router-link :to="'/article/'+item.id">
							<h2>{{item.title}}</h2>
							<div class="listcontent clearfix">
								<img :src="item.image" alt="" />
								<p>{{item.detail}}</p>
								<div class="showname">
									<span>{{item.view}}浏览</span>
									<span>{{item.name}}</span>
									<span><img :src="item.pic"></span>
								</div>
							</div>
		                </router-link>
		            </li>
		        </scroller>
	        </ul>
	    </div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueScroller from 'vue-scroller'
	Vue.use(VueScroller)
	import {indexData} from '../../data/index.js'
	require('vue-swipe/dist/vue-swipe.css')
	import { Swipe, SwipeItem } from 'vue-swipe';
	import $ from 'jquery';
	
	export default {
		components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
		data(){
			return{
				index:[],
				items:['找攻略','看游记','问达人','结伴','酒店','旅行商城','机票','当地玩乐'],
				items2:['raiders','travels','master','go','hotel','shopping','plane','play'],
				pics:[
					'https://c1-q.mafengwo.net/s10/M00/AC/1B/wKgBZ1mJZB-AOqgmAAdXRqLQb5A62.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90',
					'https://b1-q.mafengwo.net/s10/M00/48/93/wKgBZ1mIPbmAcyrUAAdfXh-g2a498.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90',
					'https://a1-q.mafengwo.net/s10/M00/4F/8F/wKgBZ1mC5Y6AFu3EAAfJIXHt5QM08.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
				]
			}
		},
		mounted(){
			document.getElementsByTagName('body')[0].scrollTop = 0;
			this.fetchData();
			this.top = 0;
      		this.bottom = 4;
//    		$.ajax({
//	            url: "http://mockjs", //请求的url地址
//	            dataType: "json", //返回格式为json
//	            async: true, //请求是否异步，默认为异步，这也是ajax重要特性
//	            data: {}, //参数值
//	            type: "GET", //请求方式
//	            beforeSend: function() {
//	                //请求前的处理
//	                console.log('start');
//	            },
//	            success: function(data) {
//	                //请求成功时处理
//	                console.log(data);
//	            },
//	            complete: function() {
//	                //请求完成的处理
//	                console.log('end');
//	            },
//	            error: function(err) {
//	                //请求出错处理
//	                console.log(err);
//	            }
//	        });
        },
        methods:{
			fetchData(){
                var _this=this;
                this.index = indexData.slice(0,5);
			},
			refresh(done) {
		        setTimeout(() => {
		          	this.index.sort(()=>{
		          		return Math.random() >= 0.5 ? 1 : -1;
		          	})
          			done()
		        }, 1500)
		    },
		    infinite(done){
		        setTimeout(() => {
		        	if(this.bottom>indexData.length){
		        		done(true)
		        	}
		        	else{
		        		var start = this.bottom + 1
			          	for (var i = start; i < start + 5; i++) {
			            	if(i==indexData.length){
			            		break
			            	}
			            	this.index.push(indexData[i]);
			          	}
			        	this.bottom = this.bottom + 5
	          			done()
		        	}
		        }, 1500)
		    },
		    backtotop(){
		    	let num = document.body.scrollTop;
		    	let timer = setInterval(()=>{
		    		num-=40;
		    		document.getElementsByTagName('body')[0].scrollTop = num;
		    		if(num<=0){
		    			clearInterval(timer)
		    		}
		    	},20)
		    	
//		    	document.getElementById('body_scroll').scrollTop = 0;
		    }
		}
	}
</script>
<style>
.content .title{
  font-size: 0.6rem;
  background-color:#f8f8f8;
  color:#999;
  text-align: center;
  line-height: 1.3rem;
}
.content .my-swipe {
  height: 10.5rem;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
}
.content .my-swipe img{
	width:100%;
	height: 100%;
}
.content .mint-swipe-indicator{
	width:1.2rem;
	border-radius: 0;
	margin: 0;
	height: 0.2rem;
	background: #fff;
	opacity: 0.7;
}
.content .mint-swipe-indicator.is-active{
	background: #ffa630;
}
.content .mint-swipe-indicator:first-child{
	border-top-left-radius: 20%;
	border-bottom-left-radius: 20%;
}
.content .mint-swipe-indicator:last-child{
	border-top-right-radius: 20%;
	border-bottom-right-radius: 20%;
}
.content .slide1 {
  background-color: #0089dc;
  color: #fff;
}
.content .backtotop{
	height: 2rem;
	width: 2rem;
	position: fixed;
	right: 0.5rem;
	bottom: 0.5rem;
	z-index: 100;
}
.content .backtotop img{
	height: 100%;
	width: 100%;
}
.clearfix:after {
  content: ".";
  clear: both;
  overflow: hidden;
  visibility: hidden;
  display: block;
  height: 0;
}
.navs {
  height: 8rem;
  padding: 0.4rem;
}
.navs li {
  width: 25%;
  height: 4rem;
  float: left;
}
.navs li i {
  width: 2rem;
  margin-left: 0.8rem;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  display: inline-block;
  height: 2rem;
  background: url('i_nav3.png') no-repeat;
  background-size: 8.2rem;
}
.navs li:nth-of-type(2) i{
	background-position: 0rem -2.05rem;
}
.navs li:nth-of-type(3) i{
	background-position: -4.05rem -2.05rem;
}
.navs li:nth-of-type(4) i{
	background-position: -2.05rem -2.05rem;
}
.navs li:nth-of-type(5) i{
	background-position: -2.05rem 0;
}
.navs li:nth-of-type(6) i{
	background-position: -4.05rem 0;
}
.navs li:nth-of-type(7) i{
	background-position: -6.05rem 0;
}
.navs li:nth-of-type(8) i{
	background-position: -6.05rem -2.05rem;
}
.navs li p {
  width: 2.9rem;
  margin-left: 0.34rem;
  font-size: 0.6rem;
  text-align: center;
}
.content .newsList ul .listcontent {
  padding: 0 0.6rem 0.48rem 0.6rem;
  border-bottom: 0.1rem solid #fafafa;
}
.content .newsList ul li h2 {
  font-size: 0.72rem;
  font-weight: 100;
  color: #111;
  line-height: 1.04rem;
  text-overflow: ellipsis;
  padding: 0.48rem 0.6rem 0.48rem 0.6rem;
}
.content .newsList ul li p {
  	height: 2.0rem;
  	font-size: 0.6rem;
  	line-height: 0.76rem;
  	padding: 0.2rem;
  	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
  	float: left;
  	width: 8.4rem;
  	margin-left: 0.2rem;
  	font-size: 0.4rem;
}
.content .newsList ul li img {
  height: 4rem;
  width: 6.4rem;
  display: block;
  float: left;
  border-radius: 0.25rem;
  box-shadow: 0.1rem 0.1rem 0.1rem #ccc;
}
.content .newsList .showname{
	
	float: left;
	padding: 0.2rem;
	padding-top: 0.5rem;
	margin-left: 0.2rem;
	width: 8.4rem;
}
.content .newsList .showname span{
	display: inline-block;
}
.content .newsList .showname img{
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
}
.content .newsList .showname span:first-of-type{
	float: left;
	padding-top: 0.2rem;
}
.content .newsList .showname span:nth-of-type(2){
	float: left;
	margin-left: 1.4rem;
	padding-top: 0.2rem;
}
.content .newsList .showname span:last-of-type{
	float: right;
}
</style>