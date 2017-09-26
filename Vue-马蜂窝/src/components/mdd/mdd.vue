<template>
	<div id="mdd">
        <swipe class="my-swipe">
			<swipe-item class="slide1" v-for="pic in pics"><img :src="pic"></swipe-item>
		</swipe>
        <div class="hot">
            <div class="hottitle">
                <h2>热门目的地</h2>
                <p>最受大家喜欢的目的地推荐</p>
            </div>
            <div class="hotcontent">
                <div class="scrollview">
                    <ul class="hotcontent_title">
                        <li v-for="(item,index) in strategy" @click="choosehot(index)">{{item.name}}</li> 
                    </ul>
                </div>
                <ul class="hotcontent_nr">
                    <li v-for="(item,index) in strategyNow" @click="movecity(item)">
                        <img :src="item.pic" />
                        <div class="hotcontent_nr_div">{{item.city}}</div>
                    </li>
                </ul>
            </div>
            <div class="hot_more">更多主题</div>
        </div>
        <div class="monthnow">
            <div class="monthnowtitle">
                <h2>当季推荐</h2>
                <p>每月最适合前往的目的地推荐</p>
            </div>
            <div class="monthnowcontent">
                <div class="scrollview">
                    <ul class="monthnowcontent_title">
                        <li v-for="(item,index) in strategymonth" @click="choosemonth(index)">{{item.name}}</li> 
                    </ul>
                </div>
                <ul class="monthnowcontent_nr">
                    <li v-for="(item,index) in strategymonthNow" @click="movecity(item)">
                        <img :src="item.pic" />
                        <div class="monthnowcontent_nr_div">{{item.city}}</div>
                    </li> 
                </ul>
            </div>
            <div class="monthnow_more">更多主题</div>
        </div>
        <div class="theme">
            <div class="themetitle">
                <h2>主题精选</h2>
                <p>大量主题出行，个性化你的旅行</p>
            </div>
            <div class="themecontent">
                <div class="scrollview">
                    <ul class="themecontent_title">
                        <li v-for="(item,index) in strategyZt" @click="choosetheme(index)">{{item.name}}</li> 
                    </ul>
                </div>
                <ul class="themecontent_nr">
                    <li v-for="(item,index) in strategyZtNow">
                        <img :src="item.pic" />
                        <div class="themecontent_nr_div">{{item.city}}</div>
                    </li> 
                </ul>
            </div>
            <div class="theme_more">更多主题</div>
        </div>
	</div>
</template>
<script>
	import {strategy,strategymonth,strategyZt} from '../../data/strategy.js'
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
            this.strategyNow = this.strategy[0].content;
            this.strategymonthNow = this.strategymonth[0].content;
            this.strategyZtNow = this.strategyZt[0].content;
		},
		data(){
			return {
                strategy:[],
                strategymonth:[],
                strategyZt:[],
                strategyNow:[],
                strategymonthNow:[],
                strategyZtNow:[],
                pics:[
					'https://b3-q.mafengwo.net/s5/M00/98/52/wKgB3FHRps2ACBExAANuG0k2UKM57.jpeg?imageMogr2%2Fthumbnail%2F%21450x180r%2Fgravity%2FCenter%2Fcrop%2F%21450x180%2Fquality%2F90',
					'https://a3-q.mafengwo.net/s10/M00/78/14/wKgBZ1l4ak6ALBkrAAIksof5PZ894.jpeg?imageMogr2%2Fthumbnail%2F%21640x360r%2Fgravity%2FCenter%2Fcrop%2F%21640x360%2Fquality%2F90',
					'https://b1-q.mafengwo.net/s10/M00/D7/E3/wKgBZ1mKrEWAMPRKAAeDWgEwFmA27.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
				]
			}
		},
		methods:{
			fetchData(){
                var _this=this;
                this.strategy = strategy;
                this.strategymonth = strategymonth;
                this.strategyZt = strategyZt;
            },
            choosehot(index){
                this.strategyNow = this.strategy[index].content;
            },
            choosemonth(index){
                this.strategymonthNow = this.strategymonth[index].content;
            },
            choosetheme(index){
                this.strategyZtNow = this.strategyZt[index].content;
            },
            movecity(item){
            	this.$router.push({path: '/mdd/'+item.engcity})
            }
		}
	}
</script>

<style>
@import '../../assets/css/article.css';
#mdd .my-swipe {
  height: 6.5rem;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
}
#mdd .my-swipe img{
  height: 100%;
  width:100%;
}
#mdd .mint-swipe-indicator{
	width:1.2rem;
	border-radius: 0;
	margin: 0;
	height: 0.2rem;
	background: #fff;
	opacity: 0.7;
}
#mdd .mint-swipe-indicator.is-active{
	background: #ffa630;
}
#mdd .mint-swipe-indicator:first-child{
	border-top-left-radius: 20%;
	border-bottom-left-radius: 20%;
}
#mdd .mint-swipe-indicator:last-child{
	border-top-right-radius: 20%;
	border-bottom-right-radius: 20%;
}
#mdd .slide1 {
  background-color: #0089dc;
  color: #fff;
}
</style>