<template>
	<div id="play">
		<div class="shop_nav">
			<swipe class="my-swipe">
				<swipe-item class="slide1" v-for="pic in title">
					<img :src="pic">
				</swipe-item>
			</swipe>
		</div>
		<div class="play_list">
			<ul>
				<li v-for="item in playlist" @click="changeplay(item)">
					<img :src="item.img">
					<div>{{item.title}}</div>
				</li>
			</ul>
		</div>
		<div style="height: 0.7rem;background: #FAFAFA;"></div>
		<div class="play_hotcontent">
            <ul class="hotcontent_title">
                <li v-for="(item,index) in place" @click="choosehot(index)" class="hotcontent_active">{{item.name}}</li> 
            </ul>
            <ul class="play_hotcontent_nr">
                <li v-for="(item,index) in playxuanran.place">
                    <div class="hotcontent_nr_div">{{item}}</div>
                </li> 
            </ul>
       	</div>
		<div class="play_title1">
			> 自由行攻略 <
		</div>
		<div class="play_title2">
			<img src="https://p3-q.mafengwo.net/s9/M00/F7/8F/wKgBs1gNrCCAMkzBAATRf3oFaWY20.jpeg?imageMogr2%2Fthumbnail%2F%21670x340r%2Fgravity%2FCenter%2Fcrop%2F%21670x340%2Fquality%2F90" />
		</div>
		<div class="play_con1">
			<div class="scrollview">
				<ul>
					<li v-for="item in play1">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span> 起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="play_title3">
			<img src="https://c3-q.mafengwo.net/s8/M00/02/7A/wKgBpVUk3u-AYDLxAA885W7aqSA86.jpeg?imageMogr2%2Fthumbnail%2F%21480x172r%2Fgravity%2FCenter%2Fcrop%2F%21480x172%2Fquality%2F90" />
		</div>
		<div class="play_con2">
			<div class="scrollview">
				<ul>
					<li v-for="item in play3">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span> 起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="play_title4">
			<img src="https://c4-q.mafengwo.net/s10/M00/0D/D6/wKgBZ1jPqZWAbWB9AADvEPZKa0g80.jpeg?imageMogr2%2Fthumbnail%2F%21670x340r%2Fgravity%2FCenter%2Fcrop%2F%21670x340%2Fquality%2F90" />
		</div>
		<div class="play_con3">
			<div class="scrollview">
				<ul>
					<li v-for="item in play2">
						<img :src="item.pic">
						<p>{{item.content}}</p>
						<div><span>{{item.price}}</span> 起/人</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="play_title5">
			> 当季热卖 <
		</div>
		<div class="play_title6">
			<div class="scrollview">
				<ul>
					<li v-for="(item,index) in contentlist" @click="chooseRM(index)">{{item}}</li>
				</ul>
			</div>
		</div>
		<div class="play_con4">
			<ul>
				<li v-for="item in playxuanran2">
					<div>{{item.name}}</div>
					<img :src="item.pic">
					<ul>
						<li v-for="item2 in item.biaoqian">{{item2}}</li>
					</ul>
					<p>{{item.content}}</p>
					<div><span>{{item.price}}</span> <span>{{item.pricenr}}</span><span>已售{{item.seil}}</span></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'vue-swipe';
	require('vue-swipe/dist/vue-swipe.css')
	import {place,play1,play2,play3,playpj,playjapan,playsanya,playlijiang,playhaerbin,playtaiwan,playxianggang} from '../../data/play.js'
	
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
				playxuanran:[],
				playxuanran2:[],
                place:[],
                play1:[],
                play2:[],
                play3:[],
                playpj:[],
                playjapan:[],
                playsanya:[],
                playlijiang:[],
                playhaerbin:[],
                playtaiwan:[],
                playxianggang:[],
                strategy:[
                	'热门','东南亚','欧美澳','国内'
                ],
                playlist:[
                	{
                		img:'https://n2-q.mafengwo.net/s9/M00/25/A0/wKgBs1e66GSAHL4EAAANMuKo3uw227.png',
                		title:'景点门票',
                		titleeng:'Scenicspotticket'
                	},
                	{
                		img:'https://a1-q.mafengwo.net/s9/M00/A5/00/wKgBs1e8DtuAL072AAANFc-mbTU587.png',
                		title:'一日游',
                		titleeng:'onedayplay'
                	},
                	{
                		img:'https://b1-q.mafengwo.net/s9/M00/A5/C5/wKgBs1e8D9mAOagmAAALsBHRmTA476.png',
                		title:'酒店套餐',
                		titleeng:'HotelCombo'
                	},
                	{
                		img:'https://b1-q.mafengwo.net/s9/M00/A5/2F/wKgBs1e8DxyAEGlrAAAOV4m9fgU361.png',
                		title:'当地体验',
                		titleeng:'Localexperience'
                	},
                	{
                		img:'https://n3-q.mafengwo.net/s9/M00/26/A0/wKgBs1e66nqAWowMAAANvhXlocM209.png',
                		title:'WIFI',
                		titleeng:'WIFI'
                	},
                	{
                		img:'https://n3-q.mafengwo.net/s9/M00/A5/3D/wKgBs1e8Dy6ANf2zAAAOQDkr9h0173.png',
                		title:'接送机',
                		titleeng:'Transfer'
                	},
                	{
                		img:'https://a4-q.mafengwo.net/s9/M00/2B/D7/wKgBs1e68yyAOunPAAALzO7l4OM536.png',
                		title:'电话卡',
                		titleeng:'PHONECARD'
                	},
                	{
                		img:'https://c3-q.mafengwo.net/s9/M00/A5/50/wKgBs1e8D0yAFrvYAAALeK_2ZPo816.png',
                		title:'交通卡',
                		titleeng:'Transportationcard'
                	},
                ],
                title:[
                	'https://c2-q.mafengwo.net/s9/M00/6F/DC/wKgBs1hXpweAMBTIAAPqcgR5mVY25.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90',
                	'https://c4-q.mafengwo.net/s10/M00/96/BE/wKgBZ1lQ4xCAN_0GAAGB1uhlaoU51.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90',
                	'https://n4-q.mafengwo.net/s9/M00/C3/03/wKgBs1hOf_GAdpB3AAF3xV1Qk4829.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90'
                ],
                contentlist:[
                	'普吉岛','日本','三亚','丽江','台湾','香港','哈尔滨'
                ],
                playsx:[
                	'playpj','playjapan','playsanya','playlijiang','playtaiwan','playxianggang','playhaerbin'
                ]
			}
		},
		methods:{
			fetchData(){
                this.place = place;
                this.play1 = play1;
                this.play2 = play2;
                this.play3 = play3;
                this.playpj = playpj;
                this.playjapan = playjapan;
                this.playsanya = playsanya;
                this.playlijiang = playlijiang;
                this.playhaerbin = playhaerbin;
                this.playtaiwan = playtaiwan;
                this.playxianggang = playxianggang;
                this.playxuanran2 = playpj;
                this.playxuanran = place[0];
           	},
			choosehot(index){
				this.playxuanran = place[index];
				let hotcontent_active = document.getElementsByClassName('hotcontent_active')
				for(var i=0;i<hotcontent_active.length;i++){
					hotcontent_active[i].style.color=""
				}
				hotcontent_active[index].style.color="#ff9d00"
			},
			chooseRM(index){
				let play_con4 = document.getElementsByClassName('play_con4')[0];
				play_con4.style.opacity = 0;
				play_con4.style.transition = '0.5s';
				setTimeout(()=>{
					this.playxuanran2 = this[this.playsx[index]];
					play_con4.style.opacity = 1;
				},500)
			},
			changeplay(item){
				this.$router.push({path: '/'+item.titleeng})
			}
		}
	}
</script>

<style>
@import '../../assets/css/article.css';
#play .my-swipe {
  	height: 5.5rem;
  	color: #000;
  	font-size: 0.6rem;
  	text-align: center;
  	box-shadow:2px 3px 3px #ccc;
}
#play{
	overflow: hidden;
}
#play .shop_nav{
	margin-top: 0;
}
#play .my-swipe .swipediv{
	margin-top: 0.4rem;
	line-height: 1.1rem;
	font-size: 0.7rem;
	font-weight: 900;
	text-align: center;
}
#play .mint-swipe-indicator.is-active{
	background: red;
}
#play .my-swipe img{
	width:100%;
	height: 100%;
}
#play .slide1 {
  background-color: #fff;
  color: #000;
}
</style>