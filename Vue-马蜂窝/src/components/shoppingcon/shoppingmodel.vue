<template>
	<div id="plane_hotel">
		<div v-show="paixu" class="xuanze">
			<ul>
				<li @click="zhpx">综合排序</li>
				<li @click="xlyx">销量优先</li>
				<li @click="lowhigh">价格从低到高</li>
				<li @click="highlow">价格从高到低</li>
			</ul>
		</div>
		<div v-show="chufadi" class="xuanze">
			<ul>
				<li v-for="(item,index) in place" @click="changecity(index)">
					{{item}}
				</li>
			</ul>
		</div>
		<div v-show="shaixuan" class="xuanze"></div>
		<div class="plane_hotel_title">
			<ul>
				<li @click="sort_data">{{changeValue1}}</li>
				<li @click="departure">{{changeCity1}}</li>
				<li @click="screen">筛选</li>
			</ul>
		</div>
		<div class="backtotop" @click="backtotop">
			<img src="static/imgs/backtop.png"/>
		</div>
		<div class="plane_hotel_content">
			<ul>
				<scroller style="top: 4.5rem;"
		            :on-refresh="refresh"
		            :on-infinite="infinite"
	            >
					<li v-for="item in plhotel">
						<div><span>{{item.place}}</span><span>{{item.fs}}</span></div>
						<img :src="item.pic">
						<ul>
							<li v-for="item2 in item.goods">{{item2}}</li>
						</ul>
						<p>{{item.content}}</p>
						<div><span>¥{{item.price}}</span> 起/人<span>{{item.youhui}}</span><span>已售{{item.sell}}</span></div>
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
	export default{
		props: ['father'],
		mounted(){
			this.updateData();
		},
		data(){
			return {
				fa:1,
				changeValue1:'综合排序 ☟',
				changeCity1:'出发地 ☟',
				plhotelnew:[],
				plhotelcity:[],
				plhotel:[],
				paixu:false,
				chufadi:false,
				shaixuan:false,
				place:['不限','北京','上海','天津','杭州','广州','香港','深圳','澳门','成都','重庆','南京','其他'],
				placeCity:''
			}
		},
		methods:{
			updateData(){
				setTimeout(()=>{
					document.getElementsByTagName('body')[0].scrollTop = 0;
		            this.plhotelnew =  JSON.parse(JSON.stringify(this.father));
		            this.plhotel = this.plhotelnew.slice(0,5);
		            this.top = 0;
		      		this.bottom = 4;
				})
			},
           	zhpx(){
           		this.changeValue1 = '综合排序';
           		this.plhotel = this.father.slice(0,this.bottom);
           		this.paixu = false;
           	},
           	xlyx(){
           		this.changeValue1 = '销量优先';
           		this.plhotelnew.sort((a,b)=>{
           			return b.sell-a.sell;
           		})
           		this.plhotel = this.plhotelnew.slice(0,this.bottom);
           		this.paixu = false;
           	},
           	highlow(){
           		this.changeValue1 = '价格从高到低';
           		this.plhotelnew.sort((a,b)=>{
           			return b.price-a.price;
           		})
           		this.plhotel = this.plhotelnew.slice(0,this.bottom);
           		this.paixu = false;
           	},
           	lowhigh(){
           		this.changeValue1 = '价格从低到高';
           		this.plhotelnew.sort((a,b)=>{
           			return a.price-b.price;
           		})
           		this.plhotel = this.plhotelnew.slice(0,this.bottom);
           		this.paixu = false;
           	},
           	changecity(index){
           		this.plhotelcity = [];
           		if(index){
           			this.changeCity1 = this.place[index];
           			this.placeCity = this.place[index];
           			this.plhotelnew.forEach(e=>{
	           			if(e.chufa === this.place[index]){
	           				this.plhotelcity.push(e)
	           			}
	           		})
           			this.plhotel = this.plhotelcity;
           			this.chufadi = false;
           		}else{
           			this.changeCity1 = '不限';
           			this.placeCity = '不限';
           			this.plhotel = this.plhotelnew.slice(0,this.bottom);
           			this.chufadi = false;
           		}
           	},
           	refresh(done) {
		        setTimeout(() => {
		          	this.plhotel.sort(()=>{
		          		return Math.random() >= 0.5 ? 1 : -1;
		          	})
          			done()
		        }, 1500)
		    },
		    infinite(done){
		    	if(this.placeCity==='不限'||this.placeCity===''){
		    		setTimeout(() => {
			        	if(this.bottom>this.father.length){
			        		done(true)
			        	}
			        	else{
			        		var start = this.bottom + 1
				          	for (var i = start; i < start + 5; i++) {
				            	if(i==this.father.length){
				            		break
				            	}
				            	this.plhotel.push(this.plhotelnew[i]);
				          	}
				        	this.bottom = this.bottom + 5
		          			done()
			        	}
			        }, 1500)
		    	}else{
		    		done(true)
		    	}
		    },
		    backtotop(){
		    	document.getElementsByTagName('body')[0].scrollTop = 0;
//		    	document.getElementById('body_scroll').scrollTop = 0;
		    },
           	sort_data(){
           		this.paixu = !this.paixu;
           		this.chufadi = false;
           		this.shaixuan = false;
           	},
           	departure(){
           		this.chufadi = !this.chufadi;
           		this.paixu = false;
           		this.shaixuan = false;
           	},
           	screen(){
           		this.chufadi = false;
           		this.paixu = false;
           		this.shaixuan = !this.shaixuan;
           	}
		}
	}
</script>

<style>
#plane_hotel{
	overflow: hidden;
}
.xuanze{
	position: absolute;
	top: 4.5rem;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	background: #fff;
}
#plane_hotel .xuanze ul{
	padding: 1rem;
}
#plane_hotel .xuanze ul li{
	height: 2rem;
	border-bottom: 1px solid #ccc;
	font-size: 0.7rem;
	line-height: 2rem;
}
#plane_hotel .plane_hotel_title{
	height: 2rem;
	background: #f7f7f7;
	font-size: 0.6rem;
}
#plane_hotel .plane_hotel_title ul{
	overflow: hidden;
}
#plane_hotel .plane_hotel_title li{
	float: left;
	width: 33%;
	text-align: center;
	line-height: 2rem;
}
#plane_hotel .plane_hotel_content li {
  padding: 0.8rem;
  height: 5rem;
  padding-bottom: 0.8rem;
  padding-top: 0.4rem;
  position: relative;
  border-bottom: 0.02rem solid #cccccc;
}
#plane_hotel .plane_hotel_content li div:first-of-type{
  position: absolute;
  left: 0.8rem;
  top: 0.4rem;
  height: 1rem;
  line-height: 1rem;
  background: #9b59b6;
  color: #fff;
  text-align: center;
  z-index: 2;
}
#plane_hotel .plane_hotel_content li div:first-of-type span:first-of-type{
	display: inline-block;
	border: 1px solid #fff;
	padding-left: 0.2rem;
	padding-right: 0.2rem;
}
#plane_hotel .plane_hotel_content li div:first-of-type span:last-of-type{
	padding-left: 0.2rem;
	padding-right: 0.2rem;
	display: inline-block;
	border: 1px solid #9b59b6;
	color:#9b59b6;
	background: #fff;
}
#plane_hotel .plane_hotel_content li img {
  width: 6.4rem;
  height: 5rem;
  position: absolute;
  left: 0.8rem;
  top: 0.4rem;
  box-shadow: 0.06rem 0.06rem 0.06rem #cccccc;
}
#plane_hotel .plane_hotel_content li ul {
  width: 40rem;
  margin-left: 6.8rem;
  margin-top: 3rem;
  overflow: hidden;
  font-size: 0.4rem;
}
#plane_hotel .plane_hotel_content li ul li {
  padding: 0;
  float: left;
  border: 0.02rem solid #cccccc;
  border-radius: 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  margin-right: 0.2rem;
}
#plane_hotel .plane_hotel_content li p {
  	font-size: 0.72rem;
  	position: absolute;
  	width: 50%;
  	top: 0.4rem;
  	right: 0.8rem;
  	white-space: normal;
  	display: -webkit-box;
  	-webkit-line-clamp: 3;
  	-webkit-box-orient: vertical;
  	overflow: hidden;
  	text-overflow: ellipsis;
}
#plane_hotel .plane_hotel_content li div:last-of-type {
  	position: absolute;
  	width: 50%;
  	bottom: 0.6rem;
  	right: 0.8rem;
  	color: #999;
  	font-size: 0.5rem;
}
#plane_hotel .plane_hotel_content li div:last-of-type span:first-of-type {
  	font-size:0.8rem;
  	color: #ff7800;
  	display: inline-block;
}
#plane_hotel .plane_hotel_content li div:last-of-type span:nth-of-type(2){
  	color: #2a73ff;
  	margin-left: 0.1rem;
  	border-radius: 0.1rem;
  	display: inline-block;
  	width: 1.8rem;
}
#plane_hotel .plane_hotel_content li div:last-of-type span:last-of-type {
  	display: inline-block;
}
#plane_hotel .backtotop{
	height: 2rem;
	width: 2rem;
	position: fixed;
	right: 0.5rem;
	bottom: 0.5rem;
	z-index: 100;
}
#plane_hotel .backtotop img{
	height: 100%;
	width: 100%;
}
</style>