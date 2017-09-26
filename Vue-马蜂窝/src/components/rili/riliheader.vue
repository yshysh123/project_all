<template>
	<div class="rili_header">
		<img src="./back.png" class="back" @click="back"/>
    	<div class="scrollview">
	    	<ul>
	    		<li v-for="(item,index) in year" @click="changeyear(index)" :class="{'active':index===isActive}">{{item}}<span>年</span></li>
	    	</ul>
    	</div>
	</div>
</template>

<script>
	export default {
	    data () {
	        return {
	        	year:[
	        		'2017','2016','2015','2014','2013','2012','2011','2010'
	        	],
	        	isActive:0,
	        	now:2017,
	        }
	    },
	   	mounted(){
	   		this.now = location.hash.split('/')[2];
	   		for(var i=0;i<this.year.length;i++){
	   			if(this.now===this.year[i]){
	   				this.isActive = i;
	   			}
	   		}
	   	},
	    methods:{
	    	changeyear(index){
	    		this.isActive=index;
	    		this.$router.push({path: '/rili/'+this.year[index]})
//	    		location.reload();
	    	},
	    	back(){
	    		this.$router.push({path: '/'})
	    	}
	    }
	 }
</script>

<style>
	#rili .rili_header .active{
		font-size: 1.3rem;
		height: 2.5rem;
		line-height: 2.5rem;
		border-bottom: 5px solid #fff;
	}
	.rili_header img{
		width: 0.6rem;
	}
	#rili .rili_header{
		position: absolute;
		left: 0;
		top: 0;
		height: 2.5rem;
		width: 100%;
		z-index: 100000000;
		background:#309296 url(bg.png) no-repeat center top;
		padding-left: 0.6rem;
		border-bottom: 2px solid #F1F1F1;
	}
	#rili .scrollview {
	  overflow-x: scroll;
	}
	#rili .rili_header ul{
		overflow: hidden;
		width: 38rem;
		color: #fff;
	}
	#rili .rili_header li{
		float: left;
		font-size: 1.1rem;
		padding-left: 0.9rem;
	  	padding-right: 0.7rem;
	  	line-height: 2.5rem;
	}
	#rili .rili_header li span{
		font-size: 0.4rem;
	}
</style>