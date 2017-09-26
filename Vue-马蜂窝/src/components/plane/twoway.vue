<template>
	<div>
		<div class="come_time">
			<span>去程日期</span>
			<el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions0">
		    </el-date-picker>
		</div>
		<div class="leave_time">
			<span>返程日期</span>
			<el-date-picker
		      v-model="value2"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions1">
		    </el-date-picker>
		</div>
		<div class="planelook2">
			<div @click="lookat">搜索</div>
		</div>
		<iframe seamless="seamless" width="100%" frameborder="0" id="if3">
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
		       	pickerOptions1: {
		          	disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		          	}
		        },
				value1: null,
				value2: null
			}
		},
		methods:{
			lookat(){
				if(this.value1){
					if(this.value1&&this.value2)
					{
						let val1 = this.value1.getFullYear()+'-'+(this.value1.getMonth()+1)+'-'+this.value1.getDate();
						let val2 = this.value1.getFullYear()+'-'+(this.value2.getMonth()+1)+'-'+this.value2.getDate();
						document.getElementById('if3').style.display ='block';
						document.getElementById('if3').src='https://m.mafengwo.cn/flight/list?departCity='+this.chufa+'&departCode='+this.chufaV+'&destCity='+this.daoda+'&destCode='+this.daodaV+'&type=roundWay&departDate='+val1+'&destDate='+val2+'&seat_go_selected='
					}
				}
			}
		}
	}
</script>

<style>
</style>