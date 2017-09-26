<template>
	<div id="plane">
		<swipe class="my-swipe">
			<swipe-item class="slide1" v-for="pic in pics"><img :src="pic"></swipe-item>
		</swipe>
		<div class="tra_time">
			<span id="cityname1">出发城市：{{citychufa}}</span>
			<span id="cityname2">目的城市：{{citydaoda}}</span>
			<el-button type="primary" @click="choosecity">{{citychoose}}</el-button><span>&nbsp;&nbsp;&nbsp;点击切换出发/目的城市</span>
			<ul>
				<li v-for="(item,index) in city" @touchstart="changecity(index)">{{item}}</li>
			</ul>
			<el-radio-group v-model="tabView" class="group">
	            <el-radio-button label="oneway">单程</el-radio-button>
	            <el-radio-button label="twoway">往返</el-radio-button>
	       	</el-radio-group>
	        <div style="margin: 10px 0;"></div>
	        <keep-alive>
	            <component 
	            	v-bind:is="tabView" 
	            	class="change" 
	            	:chufa="citychufa"
	            	:daoda="citydaoda"
	            	:chufaV="value1"
	            	:daodaV="value2"
	            >
	            </component>
	        </keep-alive>
		</div>
	</div>
</template>

<script>
	import oneway from './oneway'
    import twoway from './twoway'
    require('vue-swipe/dist/vue-swipe.css')
	import { Swipe, SwipeItem } from 'vue-swipe';

	export default{
		components:{
            oneway,
            twoway,
            'swipe': Swipe,
			'swipe-item': SwipeItem
       	},
		mounted(){
			document.getElementsByTagName('body')[0].scrollTop = 0;
		},
		data(){
			return {
				citychoose:'出发城市',
				tabView: 'oneway',
				pickerOptions0: {
		          	disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		          	}
		        },
		        pickerOptions1: {
		          	disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		          	}
		        },
		        pics:[
		        	'https://n1-q.mafengwo.net/s10/M00/C7/D5/wKgBZ1k2VDiAIsJaAACIrZEswsQ98.jpeg?imageMogr2%2Fthumbnail%2F750x%2Fquality%2F100',
		        	'https://n1-q.mafengwo.net/s10/M00/C7/D5/wKgBZ1k2VDiAIsJaAACIrZEswsQ98.jpeg?imageMogr2%2Fthumbnail%2F750x%2Fquality%2F100'
		        ],
		        citychufa:'北京',
		        citydaoda:'上海',
				city:[
					'北京','上海','广州','杭州','厦门','三亚','丽江','大理','桂林','成都','海口','武汉','乌鲁木齐','郑州','哈尔滨'
				],
				cityname:[
					'BJS','SHA','CAN','HGH','XMN','SYX','LJG','DLU','KWL','CTU','HAK','WUH','URC','CGO','HRB'
				],
				value1: null,
        		value2: null,
        		onOff:true
			}
		},
		methods:{
			choosecity(){
				if(this.onOff){
					this.citychoose = '到达城市'
				}else{
					this.citychoose = '出发城市'
				}
				this.onOff = !this.onOff;
			},
			changecity(index){
				if(this.citychoose === '到达城市'){
					this.citydaoda = this.city[index];
					this.value2 = this.cityname[index];
				}else{
					this.citychufa = this.city[index];
					this.value1 = this.cityname[index];
				}
			}
		}
	}
</script>

<style>
@import '../../assets/css/article.css';
#plane .my-swipe {
  height: 5.5rem;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
}
#plane .my-swipe img{
	width:100%;
	height: 100%;
}
#plane .mint-swipe-indicator{
	display: none;
}
#plane .slide1 {
  background-color: #0089dc;
  color: #fff;
}
</style>