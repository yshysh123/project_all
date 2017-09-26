<template>
	<div>
		<div class="come_time">
			<span>去程日期</span>
			<el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions0"
		    >
		    </el-date-picker>
		</div>
		<div class="planelook">
			<div @click="lookat">搜索</div>
		</div>
		<iframe seamless="seamless" width="100%" frameborder="0" id="if2">
		</iframe> 
	</div>
</template>

<script>
	export default{
		props:['chufa','daoda','chufaV','daodaV'],
		data(){
			return {
				tabView: 'oneway',
				pickerOptions0: {
		          	disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		          	}
		       	},
				value1: null
			}
		},
		methods:{
			lookat(){
				if(this.value1){
					let val = this.value1.getFullYear()+'-'+(this.value1.getMonth()+1)+'-'+this.value1.getDate();
					document.getElementById('if2').style.display ='block';
					document.getElementById('if2').src='https://m.mafengwo.cn/flight/list?departCity='+this.chufa+'&departCode='+this.chufaV+'&destCity='+this.daoda+'&destCode='+this.daodaV+'&type=oneWay&departDate='+val+'&destDate=&seat_go_selected='
				}
			}
		}
	}
</script>

<style>
</style>