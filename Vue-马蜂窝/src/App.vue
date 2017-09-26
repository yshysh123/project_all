<template>
  <div id="app">
  	<div id="change_header">
  		<header-model></header-model>
  		<header-model2></header-model2>
  	</div>
  	<div id="loading" v-show="show">
  			<img src="./loading.gif"/>
  	</div>
  	<!--<transition name="slide-fade">-->
  	<!--<keep-alive>-->
    	<router-view></router-view>
    <!--</keep-alive>-->
    <!--</transition>-->
  </div>
</template>

<script>
import headerModel from './components/header/header'
import headerModel2 from './components/header/header2'
export default {
	watch: {
  	"$route": "test"
	},
	methods:{
		test(){
			this.show = true;
			document.getElementsByTagName('body')[0].scrollTop = 0;
			document.body.className ="html-body-overflow";
			setTimeout(()=>{
				this.show = false;
				 document.body.className ="";
			},800)
		}
	},
	mounted(){
		document.getElementById('head2').style.display = 'none';
		window.onhashchange = function(){
			if(location.hash==''||location.hash=='#/'){
				document.getElementById('head2').style.display = 'none';
				document.getElementById('head').style.display = 'block';
			}else{
				document.getElementById('head2').style.display = 'block';
				document.getElementById('head').style.display = 'none';
			}
		}
	},
	components:{
		headerModel,
		headerModel2
	},
	data(){
			return {
				show:false
			}
		}
}
</script>

<style>
@import './assets/css/base.css';
#loading{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 100000000;
	background: #fff;
}
#loading img{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
}
.html-body-overflow
{
	height: 100vh;
  overflow-x:hidden;
  overflow-y:hidden;
}
/*.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(20px);
  opacity: 0;
}*/
</style>
