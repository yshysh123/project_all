<template>
  <div id="imgheader" style='height:80vh'>
	<a class="btn" @click="toggleShow">设置头像</a>
	<div class="imgs">
		<img id='newimg' :src='srctiele'>
		<img id='newimg2' :src='srctiele'>
	</div>
	<my-upload field="img"
    v-model="show"
		:width="300"
		:height="300"
		url="/upload"
		:params="params"
		:headers="headers"
		img-format="png">
    </my-upload>
    <div></div>
  </div>
  
</template>

<script>
import 'babel-polyfill';
import Vue from 'vue';
import myUpload from 'vue-image-crop-upload';
export default {
  name: 'page01',
  data() {
    return {
        show: false,
        params: {
            token: '123456798',
            name: 'avatar'
        },
        headers: {
            smail: '*_~'
        },
        imgDataUrl: ''
    }
  },
  components: {
    'my-upload': myUpload
  },
  computed:{
    srctiele () {
        return this.$store.state.src
    }
  },
  methods: {
        toggleShow() {
            this.show = !this.show;
        }
    },
    events: {
        cropSuccess(imgDataUrl, field){
            console.log('-------- crop success --------');
            this.imgDataUrl = imgDataUrl;
        },
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            console.log(jsonData);
            console.log('field: ' + field);
        },
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
        }
    }
}
</script>
<style>
#imgheader{
  margin-left: 180px;
  padding-top: 20px;
  position: relative;
}
#imgheader .btn{
	margin:0 auto;
	cursor: pointer;
	display: block;
	height: 30px;
	line-height: 30px;
	font-size: 20px;
	color:#000;
	width:100px;
	text-align: center;
	border: 1px solid #ccc;
	box-shadow:5px 5px 5px #ccc;
}
#imgheader .imgs{
	overflow: hidden;
	border: 1px solid #ccc;
	margin: 120px auto;
	width: 620px;
	height: 300px;
	position: relative;
}
#newimg{
	float: left;
	height: 300px;
	width:300px;
	box-shadow: 10px 10px 10px #ccc;
}
#newimg2{
	float: right;
	height: 300px;
	width:300px;
	border-radius: 50%;
	box-shadow: 10px 10px 10px #ccc;
}
</style>
