<template>
	<div>
		<left-div></left-div>
		<header-div></header-div>
		<tags></tags>
		<!-- <transition name="fade"> -->
		<!--<keep-alive>-->
			<router-view></router-view>
		<!--</keep-alive>-->
		<!-- </transition> -->
	</div>
</template>

<script>
  import leftDiv from './components/left/left'
  import headerDiv from './components/header/header'
  import tags from './components/biaoqian/biaoqian'
  export default{
  	components: {
  		leftDiv,
  		headerDiv,
  		tags
	},
	watch: {
      	"$route": "test"
   	},
   	methods:{
   		test(){
   			let login = JSON.parse(localStorage.getItem('loginHT'));
   			if(!login){
   				this.$router.push({path: '/login'})
   			}
   			else{
   				
   			}
   		}
   	}
  }
</script>

<style>
  @import './components/style/common.less';
	/* .fade-enter-active, .fade-leave-active {
  	transition: transform 1s,opacity 1s;
	}
	.fade-enter, .fade-leave-to{
		transform:scale(0);
		opacity: 0;
	} */
</style>
