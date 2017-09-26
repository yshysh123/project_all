<template>
	<div id="shopping">
		<div class="shop_nav">
			<ul>
				<li @click="backtomain">首页</li>
				<li @click="backtogonglue">目的地</li>
				<li @click="backtoyouji">游记</li>
				<li @click="backtohotel">酒店</li>
			</ul>
		</div>
		<div class="shop_temai">
			<ul>
				<li>自由行<br>特卖</li>
				<li class="lb">
					<div v-for="item in shopping1" class="lb_fun">
						<span>{{item.title}}</span>
						<span>{{item.body}}</span>
						<span>¥{{item.price}}起/人</span>
					</div>
				</li>
				<li>更多</li>
			</ul>
		</div>
		<div class="shop_list">
			<ul>
				<li class="first_list">
					<ul>
						<li>旅游度假</li>
						<li @click="plane_hotel">机酒套餐</li>
						<li>
							<router-link :to="'/plane'" style='color:#fff'>
								<div >国内机票</div>
							</router-link>
							<div @click="banzizhu">跟团游</div>
						</li>
						<li>
							<router-link :to="'/hotel'" style='color:#fff'>
								<div>订酒店</div>
							</router-link>
							<router-link :to="'/Cruise'" style='color:#fff'>
								<div>游轮</div>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="second_list">
					<ul>
						<li>当地玩乐</li>
						<li @click="onedayplay">一日游</li>
						<li>
							<router-link :to="'/moredayplay'" style='color:#fff'>
								<div>多日游</div>
							</router-link>
							<router-link :to="'/HotelCombo'" style='color:#fff'>
								<div>酒店套餐</div>
							</router-link>
						</li>
						<li>
							<router-link :to="'/Scenicspotticket'" style='color:#fff'>
								<div>景点门票</div>
							</router-link>
							<router-link :to="'/Localexperience'" style='color:#fff'>
								<div>当地体验</div>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="third_list">
					<ul>
						<li>出行必备</li>
						<li>
							<div  @click="qianzheng">签证</div>
						</li>
						<li>
							<router-link :to="'/WIFI'" style='color:#fff'>
								<div>WIFI</div>
							</router-link>
							<router-link :to="'/Transfer'" style='color:#fff'>
								<div>接送机</div>
							</router-link>
						</li>
						<li>
							<router-link :to="'/PHONECARD'" style='color:#fff'>
								<div>电话卡</div>
							</router-link>
							<router-link :to="'/Transportationcard'" style='color:#fff'>
								<div>交通卡</div>
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="shop_title1">
			>常驻运营区<
		</div>
		<div class="shop_con1">
			<ul>
				<li>
					<div><span>日本</span><span>机票</span></div>
					<img src="https://n4-q.mafengwo.net/s10/M00/D3/2A/wKgBZ1kZHAKABz5AAAEPTBOcWuY86.jpeg?imageMogr2%2Fthumbnail%2F%21670x340r%2Fgravity%2FCenter%2Fcrop%2F%21670x340%2Fquality%2F90"/>
					<p>上海直飞冲绳5天往返含税机票(代办签证+免资产证明+多航司选择)</p>
					<div><span>¥1799</span><span>去抢购</span></div>
				</li>
				<li>
					<div>
						<div>
							<p>新人礼包</p>
							<p>首次下单可领</p>
						</div>
						<div></div>
					</div>
					<div>
						<div>
							<p>限时特价</p>
							<p>每日尾货抢不停</p>
						</div>
						<div></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="shop_title2">
			>爆款特卖<
		</div>
		<div class="shop_con2">
			<div class="scrollview">
				<ul>
					<li v-for="item in shopping2">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span>/起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="shop_title3">
			<img src="https://p2-q.mafengwo.net/s10/M00/09/E0/wKgBZ1mK11aAPTUpAAG_lgpove4359.png?imageMogr2%2Fthumbnail%2F%21750x210r%2Fgravity%2FCenter%2Fcrop%2F%21750x210%2Fquality%2F90" />
		</div>
		<div class="shop_con3">
			<div class="scrollview">
				<ul>
					<li v-for="item in shopping3">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span>/起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="shop_title4">
			<img src="https://b3-q.mafengwo.net/s8/M00/3D/B0/wKgBpVU5sFKADn9ZAAU2Y9xlTRg773.png?imageMogr2%2Fthumbnail%2F%21750x210r%2Fgravity%2FCenter%2Fcrop%2F%21750x210%2Fquality%2F90" />
		</div>
		<div class="shop_con4">
			<div class="scrollview">
				<ul>
					<li v-for="item in shopping4">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span>/起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="shop_title5">
			<img src="https://n3-q.mafengwo.net/s6/M00/F8/EE/wKgB4lM-MMyACutSAAiDXY7Zo-Y92.jpeg?imageMogr2%2Fthumbnail%2F%21750x210r%2Fgravity%2FCenter%2Fcrop%2F%21750x210%2Fquality%2F90" />
		</div>
		<div class="shop_con5">
			<div class="scrollview">
				<ul>
					<li v-for="item in shopping5">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span>/起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="shop_title6">
			>大家都在买<
		</div>
		<div class="shop_con6">
			<ul>
				<li v-for="item in shopping6">
					<div><span>{{item.title}}</span><span>{{item.name}}</span></div>
					<img :src="item.pic">
					<p>{{item.content}}</p>
					<div><span>{{item.price}}</span>/人</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {shopping1,shopping2,shopping3,shopping4,shopping5,shopping6} from '../../data/shopping.js'
	export default{
		mounted(){
            document.getElementsByTagName('body')[0].scrollTop = 0;
            this.fetchData();
            let lb = document.getElementsByClassName('lb')[0];
            let num = 0;
            var _this = this;
            this.timer = setInterval(function(){
            	lb.style.top = num*(-1.95) +'rem';
            	num++;
            	if(num>_this.shopping1.length){
            		num=0;
            		lb.style.top = 0 ;
            	}
            },3000)
		},
		beforeDestroy(){
			clearInterval(this.timer)
		},
		data(){
			return {
                shopping1:[],
                shopping2:[],
                shopping3:[],
                shopping4:[],
                shopping5:[],
                shopping6:[],
                timer:null
			}
		},
		methods:{
			fetchData(){
                this.shopping1 = shopping1;
                this.shopping2 = shopping2;
                this.shopping3 = shopping3;
                this.shopping4 = shopping4;
                this.shopping5 = shopping5;
                this.shopping6 = shopping6;
          	},
          	plane_hotel(){
          		this.$router.push({path: '/planehotel'})
          	},
          	banzizhu(){
          		this.$router.push({path: '/semiselfhelp'})
          	},
          	qianzheng(){
          		this.$router.push({path: '/visa'})
          	},
          	onedayplay(){
          		this.$router.push({path: '/onedayplay'})
          	},
          	backtomain(){
          		this.$router.push({path: '/'})
          	},
          	backtogonglue(){
          		this.$router.push({path: '/raiders'})
          	},
          	backtoyouji(){
          		this.$router.push({path: '/travels'})
          	},
          	backtohotel(){
          		this.$router.push({path: '/hotel'})
          	}
		}
	}
</script>

<style>
#shopping {
  font-size: 0.56rem;
  line-height: 1rem;
}
#shopping .shop_nav ul {
  overflow: hidden;
}
#shopping .shop_nav ul li {
  float: left;
  width: 25%;
  font-size: 0.76rem;
  text-align: center;
  line-height: 2.2rem;
  background: #ff9d00;
  color: #fff;
}
#shopping .shop_temai ul {
  overflow: hidden;
  border-bottom: 0.02rem solid #cccccc;
  height: 2rem;
  position: relative;
}
#shopping .shop_temai li {
  float: left;
  font-size: 0.64rem;
}
#shopping .shop_temai li:first-of-type {
  width: 2.6rem;
  text-align: center;
  border-right: 0.02rem solid #cccccc;
}
#shopping .shop_temai .lb {
  width: 11.2rem;
  overflow: hidden;
  transition: 1s;
  position: absolute;
  top: 0px;
  left: 65px;
}
#shopping .shop_temai .lb span:first-of-type {
  display: inline-block;
  border: 0.02rem solid #ff2828;
  border-radius: 0.1rem;
}
#shopping .shop_temai .lb span:last-of-type {
  display: inline-block;
  color: #ff6600;
}
#shopping .shop_temai li:last-of-type {
  position: absolute;
  right: 0;
  line-height: 2rem;
  width: 2.6rem;
  text-align: center;
  border-left: 0.02rem solid #cccccc;
}
#shopping .shop_list ul {
  overflow: hidden;
}
#shopping .shop_list li {
  height: 4rem;
  font-size: 0.68rem;
  float: left;
  text-align: center;
  margin: 0.12rem;
}
#shopping .shop_list .first_list li {
  background: #ff9911;
  color: #fff;
}
#shopping .shop_list .second_list li {
  background: #12cc90;
  color: #fff;
}
#shopping .shop_list .third_list li {
  background: #1fb1e0;
  color: #fff;
}
#shopping .shop_list li ul li div {
  border-bottom: 0.1rem solid #ffffff;
}
#shopping .shop_list li ul li:nth-of-type(1) {
  width: 1rem;
}
#shopping .shop_list li ul li:nth-of-type(2) {
  width: 4.8rem;
  line-height: 4rem;
}
#shopping .shop_list li ul li:nth-of-type(3) {
  width: 4.8rem;
  line-height: 2rem;
}
#shopping .shop_list li ul li:nth-of-type(4) {
  width: 4.8rem;
  line-height: 2rem;
}
.shop_title1,
#shopping .shop_title2,
#shopping .shop_title6 {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 0.76rem;
  background: #f7f7f7;
  color: #999;
}
#shopping .shop_con1 ul {
  overflow: hidden;
}
#shopping .shop_con1 ul li {
  float: left;
}
#shopping .shop_con1 ul li:nth-of-type(1) {
  width: 40%;
  padding: 0.4rem;
  position: relative;
  border-right: 0.02rem solid #cccccc;
}
#shopping .shop_con1 ul li:nth-of-type(1) div:first-of-type {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
}
#shopping .shop_con1 ul li:nth-of-type(1) div:first-of-type span:first-of-type {
  display: inline-block;
  width: 1.4rem;
  text-align: center;
  background: #9b59b6;
  color: #fff;
}
#shopping .shop_con1 ul li:nth-of-type(1) div:first-of-type span:last-of-type {
  display: inline-block;
  width: 1.4rem;
  text-align: center;
  color: #9b59b6;
  background: #fff;
}
#shopping .shop_con1 ul li:nth-of-type(2) {
  width: 50%;
  padding: 0.4rem;
}
#shopping .shop_con1 ul li:nth-of-type(2) div {
  height: 3.6rem;
}
#shopping .shop_con1 ul li:nth-of-type(2) div div {
  width: 50%;
  float: left;
  font-size: 0.56rem;
  line-height: 1.2rem;
}
#shopping .shop_con1 ul li:nth-of-type(2) div div:first-of-type {
  padding-top: 0.4rem;
  box-sizing: border-box;
}
#shopping .shop_con1 ul li:nth-of-type(2) div div:last-of-type {
  background: url('temai.png') no-repeat center center;
  background-size: 120%;
  background-position: 0 -5.6rem;
}
#shopping .shop_con1 ul li:nth-of-type(2) div:first-of-type div:last-of-type {
  background: url('temai.png') no-repeat center center;
  background-size: 120%;
  background-position: 0 -1rem;
}
#shopping .shop_con1 ul li:nth-of-type(1) img {
  width: 100%;
}
#shopping .shop_con1 ul li:nth-of-type(1) p {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-bottom: 0.6rem;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
#shopping .shop_con1 ul li:nth-of-type(1) div:last-of-type span:first-of-type {
  font-size: 0.92rem;
  display: inline-block;
  color: #ff7800;
}
#shopping .shop_con1 ul li:nth-of-type(1) div:last-of-type span:last-of-type {
  font-size: 0.6rem;
  line-height: 1.2rem;
  text-align: center;
  width: 2.4rem;
  display: inline-block;
  margin-left: 1rem;
  color: #fff;
  background: #f63c3c;
  font-weight: 900;
}
#shopping .shop_title3 img,
#shopping .shop_title4 img,
#shopping .shop_title5 img {
  width: 100%;
}
#shopping .shop_con2,
#shopping .shop_con3,
#shopping .shop_con4,
#shopping .shop_con5 {
  overflow: hidden;
  font-size: 0.56rem;
}
#shopping .scrollview {
  overflow-x: scroll;
}
#shopping .shop_con2 ul,
#shopping .shop_con3 ul,
#shopping .shop_con4 ul,
#shopping .shop_con5 ul {
  width: 60rem;
}
#shopping .shop_con2 ul li,
#shopping .shop_con3 ul li,
#shopping .shop_con4 ul li,
#shopping .shop_con5 ul li {
  border: 0.02rem solid #cccccc;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  width: 5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  float: left;
}
#shopping .shop_con2 ul li img,
#shopping .shop_con3 ul li img,
#shopping .shop_con4 ul li img,
#shopping .shop_con5 ul li img {
  width: 100%;
}
#shopping .shop_con2 ul li div,
#shopping .shop_con3 ul li div,
#shopping .shop_con4 ul li div,
#shopping .shop_con5 ul li div {
  text-align: center;
}
#shopping .shop_con2 ul li div span,
#shopping .shop_con3 ul li div span,
#shopping .shop_con4 ul li div span,
#shopping .shop_con5 ul li div span {
  color: #ff7800;
  font-weight: 900;
  font-size: 0.72rem;
}
#shopping .shop_con2 ul li p,
#shopping .shop_con3 ul li p,
#shopping .shop_con4 ul li p,
#shopping .shop_con5 ul li p {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-bottom: 0.6rem;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
#shopping .shop_con6 ul {
  overflow: hidden;
}
#shopping .shop_con6 ul li {
  float: left;
  width: 47%;
  margin: 0.2rem;
  position: relative;
  border: 0.02rem solid #cccccc;
}
#shopping .shop_con6 ul li img {
  width: 100%;
}
#shopping .shop_con6 ul li div:nth-of-type(1) {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
#shopping .shop_con6 ul li div:nth-of-type(1) span {
  display: inline-block;
  line-height: 1rem;
  text-align: center;
  width: 2.4rem;
}
#shopping .shop_con6 ul li div:nth-of-type(1) span:nth-of-type(1) {
  background: #9b59b6;
  color: #fff;
  border: 0.02rem solid #ffffff;
}
#shopping .shop_con6 ul li div:nth-of-type(1) span:nth-of-type(2) {
  background: #fff;
  color: #9b59b6;
  border: 0.02rem solid #9b59b6;
}
#shopping .shop_con6 ul li p {
  font-size: 0.76rem;
  line-height: 1rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-bottom: 0.4rem;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
#shopping .shop_con6 ul li div:nth-of-type(2) {
  text-align: center;
  font-size: 0.64rem;
}
#shopping .shop_con6 ul li div:nth-of-type(2) span {
  font-size: 0.84rem;
  color: #ff7800;
}
</style>