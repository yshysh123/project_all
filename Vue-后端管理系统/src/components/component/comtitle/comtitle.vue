<template>
  <div class="jianjie2">
    <div class="jianjie2_body" v-html="str">
    </div>
  </div>
</template>

<script>
export default {
  name: 'title',
  data () {
    return {
    	str:`以下组件部分来自网络,部分自己封装,数据完全通过模拟生成。
        由于组件繁多,这里选用的是一些常用的组件,通过自己封装,引用,修改,尽量在工作中使用起来更加便捷<br/>
        <strong>一、安装组件</strong><br/>
        使用 npm 安装 外部组件
        cnpm install 外部组件 -S<br/>
        <strong>二、引入组件</strong><br/>
        需要在使用组件的 JS 中引用组件<br/>
        <strong>三、技术栈</strong><br/>
        vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui <br/>
        <strong>四、项目运行</strong><br/>
        git clone https://github.com/bailicangdu/vue2-manage <br/>
				cd vue2-manage  <br/>
				npm install<br/>
				npm run dev (访问线上后台系统)<br/>
				npm run local (访问本地后台系统，需运行node-elm后台系统)`
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
  width:82%;
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
