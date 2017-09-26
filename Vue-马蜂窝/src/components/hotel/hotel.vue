<template>
	<div id="hotel">
		<div class="mudidi">
			<div>目的地酒店</div>
			<div id="cityname">{{city[0]}}</div>
			<ul>
				<li v-for="(item,index) in city" @click="changecity(index)">{{item}}</li>
			</ul>
		</div>
		<div class="tra_time">
			<div class="come_time">
				<span>入住时间</span>
				<el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="选择日期"
			      :picker-options="pickerOptions0">
			    </el-date-picker>
			</div>
			<div class="leave_time">
				<span>离开时间</span>
				<el-date-picker
			      v-model="value2"
			      type="date"
			      placeholder="选择日期"
			      :picker-options="pickerOptions1">
			    </el-date-picker>
			</div>
		</div>
		<div class="look">
			<div @click="lookat">查看</div>
		</div>
		<iframe seamless="seamless" width="100%" frameborder="0" id="if1">
		</iframe> 
	</div>
</template>

<script>
	export default{
		mounted(){
			document.getElementsByTagName('body')[0].scrollTop = 0;
		},
		data(){
			return {
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
				city:[
					'北京','上海','广州','杭州','厦门','三亚','丽江','大理','桂林','香港','澳门','成都','台北','垦丁','花莲'
				],
				cityname:[
					'10065','10099','10088','10156','10132','10030','10186','10487','10095','10189','10206','10035','10819','21434','15325'
				],
				value1: null,
        		value2: null
			}
		},
		methods:{
			lookat(){
				let cityname = document.getElementById('cityname');
				let val1 = this.value1.getFullYear()+'-'+(this.value1.getMonth()+1)+'-'+this.value1.getDate();
				let val2 = this.value2.getFullYear()+'-'+(this.value2.getMonth()+1)+'-'+this.value2.getDate();
				if(Number(this.value2)>=Number(this.value1)){
					let city = this.findIndex(cityname.innerHTML)
					console.log(val1,val2)
					document.getElementById('if1').style.display ='block';
					document.getElementById('if1').src='https://m.mafengwo.cn/hotel/'+this.cityname[city]+'/?checkin='+val1+'&checkout='+val2
				}
			},
			findIndex(id){
				for(var i=0;i<this.city.length;i++){
					if(id==this.city[i]){
						return i;
					}
				}
			},
			changecity(index){
				document.getElementById('cityname').innerHTML = this.city[index];
			}
		}
	}
</script>

<style>
@import '../../assets/css/article.css';
</style>