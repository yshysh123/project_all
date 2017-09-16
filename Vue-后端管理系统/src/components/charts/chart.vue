<template>
	<div class="chart">
		<div :class="className" :id="id" :style="{height:height,width:width}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
import {resize} from 'jquery'
export default {
	props: {
		className: {
			type: String,
			default: 'chart'
		},
		id: {
			type: String,
			default: 'chart'
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '100%'
		}
	},
	data () {
		return {
			chart: null
		}
	},
	mounted () {
		var _this = this;
		window.addEventListener('resize',function(){
            _this.chart.resize();
       })
		this.initChart()
	},
	methods: {
		initChart () {
			var _this = this;
			this.chart = echarts.init(document.getElementById(this.id))
			const xAxisData = []
			const data = []
			for (let i = 0; i < 30; i++) {
				xAxisData.push(i + '号')
				data.push(Math.round(Math.random() * 3 + 3))
			}
			this.chart.setOption(
				{   backgroundColor: "#fff",
					title : {
						text: '本站点用户访问来源',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
					},
					series : [
						{
							name: '访问来源',
							type: 'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data:[
								{value:335, name:'直接访问'},
								{value:310, name:'邮件营销'},
								{value:234, name:'联盟广告'},
								{value:135, name:'视频广告'},
								{value:1548, name:'搜索引擎'}
							],
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				}
			)
		}
	}
}
</script>
