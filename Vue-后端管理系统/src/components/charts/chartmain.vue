<template>
  <div class="jianjie2">
    <div class="jianjie2_body" v-html="str">
    </div>
  </div>
</template>

<script>
export default {
  name: 'jianshu',
  data () {
    return {
    	str:`以下图表均来自Echarts,数据完全通过模拟生成。
        其实ECharts封装的很好了，用vue封装是很简单的事情，建议大家自己来封装。<br/>
        <strong>一、安装插件</strong><br/>
        使用 cnpm 安装 Echarts
        cnpm install echarts -S
        和之前介绍的 axios 类似，echarts 也不能通过 Vue.use() 进行全局调用
        通常是在需要使用图表的 .vue 文件中直接引入
        import echarts from 'echarts'
        也可以在 main.js 中引入，然后修改原型链
        Vue.prototype.$echarts = echarts
        然后就可以全局使用了
        let myChart = this.$echarts.init(document.getElementById('myChart'))<br/>
        <strong>二、创建图表</strong><br/>
        首先需要在 HTML 中创建图表的容器
        需要注意的是，图表的容器必须指定宽高，也就是说 width，height 不能使用百分比，只能用 px
        这样确实不够灵活，不过我们可以用 js 来改变 width 和 height，使图表容器能够自适应，具体的实现请往后看
        然后在 mounted 中创建图表，具体的配置参考官方文档，这里不再赘述<br/>
        <strong>三、按需引入</strong><br/>
        上面引入的 echarts 包含了所有图表，但有时候我们只需要一两个基本图表，这时候完整的 echarts 就显得累赘
        假如只需要创建一个饼图，那么可以这么做：
        之所以使用 require 而不是 import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全
        可以按需引入的模块列表见 <a href='https://github.com/ecomfe/echarts/blob/master/index.js'>https://github.com/ecomfe/echarts/blob/master/index.js</a><br/>
        <strong>四、适应容器</strong><br/>
        上面说过，图表的容器必须固定宽高，这确实是一个比较反人类的设定
        为了解决这个问题，需要给图表容器外面再加一个容器，而这个外容器的宽高可以适应页面。上面的就是这样的外容器
        当页面加载的时候，将外容器的宽高，赋给图表容器
        但这只是解决了页面加载时的自适应问题
        如果在页面加载之后，仍需要图表自适应宽高，就需要用到 echarts 的<a href='http://echarts.baidu.com/tutorial.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94'>媒体查询</a><br/>`
    }
  },
  mounted () {
		
	}
}
</script>
<style>
.jianjie2{
	height: 88vh;
  margin-left: 180px;
  position: relative;
  min-width: 800px;
}
.jianjie2_body{
	background: #fff;
  height:80%;
  width:80%;
  padding:20px 50px 20px 50px;
  position: absolute;
  left: 5%;
  top:5%;
  font-size: 18px;
  line-height: 34px;
  overflow-X:hidden;
  box-shadow:5px 5px 5px #ccc;
}
</style>
