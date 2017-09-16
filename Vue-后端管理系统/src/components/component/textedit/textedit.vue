<template>
  <div class="components-container">
  	<el-button @click="getUEContent()">获取内容</el-button>
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
    </div>
    <div class="content">{{content}}</div>
  </div>
</template>
<style>
  	.info{
    	border-radius: 10px;
    	line-height: 20px;
    	padding: 10px;
    	margin: 10px;
    	background-color: #ffffff;
  	}
  	.components-container .content{
  		text-align: center;
  		height: 40px;
  		line-height: 40px;
  		font-size: 20px;
  	}
</style>
<script>
  import UE from './textedit2.vue';
  export default {
    components: {UE},
    data() {
      return {
        defaultMsg: '请输入一点内容,测试一下子哈',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 450
        },
        content:''
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功！',
          message: content,
          type: 'success'
        });
        this.content = content;
      }
    }
  };
</script>