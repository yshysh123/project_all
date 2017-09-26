<template>
	<div id='city'>
		<div class="city_headerimg">
			<img :src="city_new.citypic"/>
			<div>{{city_new.cityname}}</div>
			<div>{{city_new.num}}张照片</div>
		</div>
		<div class="city_gonglue">
			<h2>旅游攻略</h2>
			<p>{{city_new.citygonglue}}</p>
			<ul>
				<li>内容速览:</li>
				<li v-for="item in city_new.citynr">{{item}}</li>
			</ul>
			<div class="more">阅读更多</div>
		</div>
		<div class="backtotop" @touchend="backtotop">
			<img src="static/imgs/backtop.png"/>
		</div>
		<div class="city_tuijian">
			<ul>
				<li v-for="item in city_new.tuijian">
					<h4>{{item.title}}</h4>
					<p>{{item.sell}}</p>
				</li>
			</ul>
		</div>
		<div class="wanfa">
			<h2>玩法路线</h2>
			<div>
				<div class="scrollview">
					<ul>
						<li v-for="item in city_new.wanfa">
							<h3>{{item.title}}</h3>
							<img :src="item.pic"/>
							<p><span>{{item.todo}}</span> 蜂蜂会选择该路线</p>
							<p>{{item.place}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_content1">
			<h2>自由行攻略</h2>
			<ul>
				<li v-for="item in city_new.ziyouxing">
					<img :src="item.pic"/>
					<div class="right">
						<div>{{item.title}}</div>
						<ul>
							<li v-for="item2 in item.content">
								{{item2}}
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<div class="more">查看更多</div>
		</div>
		<div class="city_content2">
			<h2>最热景点</h2>
			<ul>
				<li v-for="item in city_new.jingdian">
					<img :src="item.pic"/>
					<h3>{{item.place}}</h3>
					<p><span>{{item.dp}}</span> 条点评</p>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_content2">
			<h2>美食推荐</h2>
			<ul>
				<li v-for="item in city_new.foods">
					<img :src="item.pic"/>
					<h3>{{item.place}}</h3>
					<p><span>{{item.dp}}</span> 条点评</p>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_content2">
			<h2>购物推荐</h2>
			<ul>
				<li v-for="item in city_new.shopping">
					<img :src="item.pic"/>
					<h3>{{item.place}}</h3>
					<p><span>{{item.dp}}</span> 条点评</p>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_hotel">
			<h2>酒店攻略</h2>
			<img :src="city_new.hotelpic"/>
			<ul>
				<li v-for="(item,index) in city_new.hotel">
					<h4><span>{{(index+1)}}</span>{{item.title}}</h4>
					<p>{{item.nav}}</p>
					<p>{{item.content}}</p>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_content3">
			<h2>机+酒</h2>
			<ul>
				<li v-for="item in city_new.plane">
					<img :src="item.pic"/>
					<div class="right">
						<div>{{item.title}}</div>
						<p>¥{{item.price}}</p>
					</div>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_content3">
			<h2>当地游</h2>
			<ul>
				<li v-for="item in city_new.play">
					<img :src="item.pic"/>
					<div class="right">
						<div>{{item.title}}</div>
						<p>¥{{item.price}}</p>
					</div>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_content4">
			<h2>旅游保险</h2>
			<ul>
				<li v-for="item in city_new.baoxian">
					<img :src="item.pic"/>
					<div class="right">
						<div>{{item.title}}</div>
						<p><span>{{item.price}}</span>起/成人</p>
						<p>已售:<span>{{item.sell}}</span></p>
					</div>
				</li>
			</ul>
			<div class="more">查看更多</div>
		</div>
		<div class="city_youji">
			<h2>热门游记</h2>
			<ul>
				<li v-for="item in city_new.youji">
					<img :src="item.pic" class="raiders_img1"/>
					<div class="raiders_time">
						<span>{{item.day}}</span><span>{{item.day2}}</span><span>{{item.view}}</span>
					</div>
					<div class="raiders_title">{{item.content}}</div>
					<div><img :src="item.picuser" class="raiders_img2"/></div>
					<div class="zzc"></div>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_qusition">
			<h2>问答</h2>
			<ul>
				<li v-for="item in city_new.wenda">
					<h3>{{item.title}}</h3>
					<div>
						<img :src="item.pic"/>
						<p>{{item.content}}</p>
					</div>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>
		<div class="city_tral">
			<h2>行程</h2>
			<ul>
				<li v-for="item in city_new.xingcheng">
					<img :src="item.pic"/>
					<div class="imgtitle"><span>推荐</span><span>{{item.day}}日</span></div>
					<div class="right">
						<h3>{{item.title}}</h3>
						<p>{{item.content}}</p>
						<p>{{item.view}}</p>
					</div>
				</li>
			</ul>
			<div class="more">查看全部</div>
		</div>	
	</div>
</template>

<script>
	import {city} from '../../data/city/city.js'
	export default{
		mounted(){
			this.fullPath = this.$route.fullPath.split('/')[2]
            document.getElementsByTagName('body')[0].scrollTop = 0;
            this.fetchData();
		},
		data(){
			return {
                city_new:[],
                fullPath:''
			}
		},
		methods:{
			fetchData(){
				city.forEach(e=>{
					if(e.cityengname===this.fullPath){
						this.city_new = e;
					}
				})
          	},
          	backtotop(){
		    	let num = document.body.scrollTop;
		    	let timer = setInterval(()=>{
		    		num-=100;
		    		document.getElementsByTagName('body')[0].scrollTop = num;
		    		if(num<=0){
		    			clearInterval(timer)
		    		}
		    	},20)
		    }
		}
	}
</script>

<style>
	#city{
		font-size: 0.8rem;
		line-height: 1.4rem;
	}
	#city .more{
		border: 1px solid #ff9d00;
		color: #ff9d00;
		border-radius: 2px;
		width: 6rem;
		margin: 0 auto;
		margin-top: 1rem;
		margin-bottom: 0.6rem;
		text-align: center;
		height: 1.8rem;
		line-height: 1.8rem;
	}
	#city .city_headerimg{
		position: relative;
		color: #fff;
	}
	#city .city_headerimg img{
		width: 100%;
	}
	#city .city_headerimg div:nth-of-type(1){
		position: absolute;
		left: 0.5rem;
		bottom: 2rem;
		font-weight: 900;
		font-size: 1.2rem;
	}
	#city .city_headerimg div:nth-of-type(2){
		position: absolute;
		font-weight: 900;
		left: 0.5rem;
		bottom: 1rem;
	}
	#city .city_gonglue{
		padding: 0.5rem;
		border-bottom: 0.4rem solid #f0f0f0;
	}
	#city .city_gonglue h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_gonglue p{
		font-size: 0.8rem;
		line-height: 1.2rem;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 3;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_gonglue ul{
		overflow: hidden;
		margin-top: 0.4rem;	
	}
	#city .city_gonglue ul li{
		float: left;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
		color: #ff9d00;
	}
	#city .city_gonglue ul li:first-of-type{
		margin-left: 0;
		color: #999;
	}
	#city .city_tuijian{
		border-bottom: 0.4rem solid #f0f0f0;
	}
	#city .city_tuijian ul{
		overflow: hidden;
	}
	#city .city_tuijian ul li{
		float: left;
		width: 33%;
		border-bottom: 1px solid #e5e5e5;
		border-right: 1px solid #e5e5e5;
	}
	#city .city_tuijian ul li:nth-of-type(3),#city .city_tuijian ul li:nth-of-type(6),#city .city_tuijian ul li:nth-of-type(9),#city .city_tuijian ul li:nth-of-type(12){
		border-right: 0;
	}
	#city .city_tuijian ul li h4{
		font-size: 0.6rem;
		font-weight: 100;
		text-align: center;
		line-height:1.2rem;
		padding-top: 0.3rem;
	}
	#city .city_tuijian ul li p{
		text-align: center;
		font-size: 0.5rem;
		line-height: 0.8rem;
		padding-bottom: 0.5rem;
		color: #999;
	}
	#city .scrollview {
	  overflow-x: scroll;
	}
	#city .wanfa {
		padding: 0.4rem;
		border-bottom: 0.4rem solid #f0f0f0;
	}
	#city .wanfa h2{
		padding-top: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .wanfa h3{
		font-size: 0.7rem;
		font-weight: 100;
	}
	#city .wanfa ul{
	  	width: 100rem;
	}
	#city .wanfa ul li{
	  	margin-top: 0.4rem;
	  	margin-bottom: 0.4rem;
	  	width: 14rem;
	  	margin-left: 0.2rem;
	  	margin-right: 0.2rem;
	  	float: left;
	}
	#city .wanfa ul li img{
	  	width: 100%;
	}
	#city .wanfa ul li p span{
	  	color: #ff7800;
	  	font-weight: 900;
	  	font-size: 1rem;
	}
	#city .wanfa ul li p{
	  	font-size: 0.7rem;
	  	padding-right: 0.4rem;
	  	white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_content1{
		padding: 0.4rem;
		border-bottom: 0.4rem solid #f0f0f0;
	}
	#city .city_content1 h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_content1 ul li{
		overflow: hidden;
		margin-bottom: 0.4rem;
	}
	#city .city_content1 ul li img{
		width: 40%;
		float: left;
		margin-right: 0.5rem;
	}
	#city .city_content1 ul li .right{
		width: 55%;
		float: left;
		font-size: 0.6rem;
		line-height: 1rem;
		
	}
	#city .city_content1 ul li .right div{
		margin-bottom: 0.5rem;
	}
	#city .city_content1 ul li .right ul li{
		font-size: 0.4rem;
		color: #999;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_content2{
		padding: 0.4rem;
		border-bottom: 0.4rem solid #f0f0f0;
	}
	#city .city_content2 h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_content2 ul{
		overflow: hidden;
	}
	#city .city_content2 li{
		float: left;
		width: 47%;
		padding: 0.2rem;
	}
	#city .city_content2 li img{
		width: 100%;
	}
	#city .city_content2 li h3{
		font-size: 0.7rem;
		text-align: center;
		line-height: 1rem;
		font-weight: 100;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_content2 li p{
		text-align: center;
		line-height: 1.4rem;
		font-size: 0.6rem;
	}
	#city .city_content2 li span{
		color: #ff9d00;
	}
	#city .city_hotel{
		border-bottom: 0.4rem solid #f0f0f0;
	}
	#city .city_hotel h2{
		padding-top: 0.4rem;
		padding-left: 0.4rem;
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		font-weight: 100;
	}
	#city .city_hotel img{
		width: 100%;
	}
	#city .city_hotel ul li{
		padding: 0.4rem;
	}
	#city .city_hotel ul li h4{
		font-weight: 100;
	}
	#city .city_hotel ul li p:nth-of-type(1){
		font-size: 0.6rem;
		padding-left: 1rem;
	}
	#city .city_hotel ul li h4 span{
		display: inline-block;
		width: 1.2rem;
		text-align: center;
		height: 0.8rem;
		line-height: 0.8rem;
		color: #fff;
		border-radius: 0.2rem;
		background: #ff9d00;
		margin-right: 0.5rem;
	}
	#city .city_hotel ul li p:nth-of-type(2){
		line-height: 1.2rem;
		padding-left: 1rem;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 3;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_content3{
		border-bottom: 0.4rem solid #f0f0f0;
		padding: 0.4rem;
	}
	#city .city_content3 h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_content3 ul li{
		overflow: hidden;
		margin-bottom: 0.4rem;
	}
	#city .city_content3 ul li img{
		width: 40%;
		float: left;
		margin-right: 0.5rem;
	}
	#city .city_content3 ul li .right{
		width: 55%;
		float: left;
		font-size: 0.8rem;
		line-height: 1rem;
	}
	#city .city_content3 ul li .right div{
		margin-bottom: 0.5rem;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 3;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_content3 ul li .right p{
		margin-top: 0.8rem;
		font-size: 1rem;
		color: #f60;
	}
	#city .city_content4{
		border-bottom: 0.4rem solid #f0f0f0;
		padding: 0.4rem;
	}
	#city .city_content4 h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_content4 ul li img{
		width: 40%;
		float: left;
		margin-right: 0.5rem;
	}
	#city .city_content4 ul li{
		overflow: hidden;
	}
	#city .city_content4 ul li .right{
		width: 55%;
		float: left;
		font-size: 0.8rem;
		line-height: 1rem;
	}
	#city .city_content4 ul li .right div{
		margin-bottom: 0.8rem;
	}
	#city .city_content4 ul li .right p{
		margin-bottom: 0.6rem;
		font-size: 0.6rem;
	}
	#city .city_content4 ul li .right p span{
		font-size: 1rem;
		color: #f60;
	}
	#city .city_content4 ul li .right p:nth-of-type(2) span{
		font-size: 0.6rem;
		color: #f60;
	}
	#city .city_youji{
		border-bottom: 0.4rem solid #f0f0f0;
		padding: 0.4rem;
	}
	#city .city_youji h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_youji li {
	  position: relative;
	  margin-bottom: 0.4rem;
	}
	#city .city_youji h3 {
	  height: 0.8rem;
	  line-height: 0.6rem;
	  font-size: 0.64rem;
	}
	#city .city_youji .raiders_img1 {
	  width: 100%;
	  height: 7rem;
	  border-radius: 0.2rem;
	  box-shadow: 0.1rem 0.1rem 0.1rem #333333;
	}
	#city .city_youji .raiders_time {
	  position: absolute;
	  top: 0.4rem;
	  left: 0.6rem;
	  font-size: 0.64rem;
	  color: #fff;
	  font-weight: 900;
	  z-index: 2;
	}
	#city .city_youji .raiders_time span {
	  font-size: 1.1rem;
	}
	#city .city_youji .raiders_time span:nth-of-type(2){
		font-size: 0.6rem;
	}
	#city .city_youji .raiders_time span:nth-of-type(3){
		font-size: 0.6rem;
		margin-left: 1rem;
	}
	#city .city_youji .raiders_title {
		font-size: 0.8rem;
	  	position: absolute;
	  	left: 0.6rem;
	  	top: 1.8rem;
	  	color: #fff;
	  	font-weight: 900;
	  	z-index: 2;
	  	white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_youji .raiders_img2 {
	  position: absolute;
	  height: 2rem;
	  width: 2rem;
	  border-radius: 50%;
	  bottom: 0.6rem;
	  left: 0.6rem;
	  z-index: 2;
	}
	#city .city_youji .zzc {
	  border-radius: 0.2rem;
	  height: 95%;
	  width: 100%;
	  position: absolute;
	  left: 0;
	  top: 0;
	  background: rgba(51, 51, 51, 0.4);
	}
	#city .city_qusition{
		border-bottom: 0.4rem solid #f0f0f0;
		padding: 0.4rem;
	}
	#city .city_qusition h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_qusition ul li h3{
		font-size: 0.8rem;
		font-weight: 100;
		margin-bottom: 0.5rem;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_qusition ul li{
		border-bottom: 1px solid #ccc;
	}
	#city .city_qusition ul li:nth-of-type(2){
		border: 0;
		margin-top: 0.4rem;
	}
	#city .city_qusition ul li div{
		overflow: hidden;
		line-height: 1rem;
		margin-bottom: 0.8rem;
		font-size: 0.7rem;
	}
	#city .city_qusition ul li div img{
		width: 8%;
		float: left;
		border-radius: 50%;
		margin-right: 2%;
	}
	#city .city_qusition ul li div p{
		width: 90%;
		float: left;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 2;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_tral{
		padding: 0.4rem;
	}
	#city .city_tral h2{
		padding-bottom: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.2rem;
		font-weight: 100;
	}
	#city .city_tral ul li{
		overflow: hidden;
		margin-bottom: 0.4rem;
		position: relative;
	}
	#city .city_tral ul li img{
		width: 40%;
		float: left;
		margin-right: 0.5rem;
	}
	#city .city_tral .imgtitle{
		position: absolute;
		left: 0;
		top: -0.2rem;
	}
	#city .city_tral .imgtitle span:nth-of-type(1){
		display: inline-block;
		background: #ff7373;
		color: #fff;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		font-size: 0.4rem;
		text-align: center;
		height: 1.2rem;
		line-height: 1.2rem;
	}
	#city .city_tral .imgtitle span:nth-of-type(2){
		display: inline-block;
		background: #ff9d00;
		color: #fff;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		font-size: 0.4rem;
		text-align: center;
		height: 1.2rem;
		line-height: 1.2rem;
	}
	#city .city_tral ul li .right{
		width: 55%;
		float: left;
		font-size: 0.8rem;
		line-height: 1rem;
	}
	#city .city_tral ul li .right h3{
		font-size: 0.7rem;
		font-weight: 100;
		white-space: normal;
	  	display: -webkit-box;
	  	-webkit-line-clamp: 1;
	  	-webkit-box-orient: vertical;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	}
	#city .city_tral ul li .right div{
		margin-bottom: 0.5rem;
	}
	#city .city_tral ul li .right p:nth-of-type(1){
		margin-top: 0.4rem;
		font-size: 0.65rem;
	}
	#city .city_tral ul li .right p:nth-of-type(2){
		margin-top: 1rem;
		font-size: 0.6rem;
		color: #666;
	}
	#city .backtotop{
		height: 2rem;
		width: 2rem;
		position: fixed;
		right: 0.5rem;
		bottom: 0.5rem;
		z-index: 100;
	}
	#city .backtotop img{
		height: 100%;
		width: 100%;
	}
</style>