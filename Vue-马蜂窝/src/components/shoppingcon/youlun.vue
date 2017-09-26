<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {youlun} from '../../data/shopping/youlun.js'
	import planehotel from './shoppingmodel'
	export default{
		components:{
			planehotel
		},
		mounted(){
            this.fetchData();
		},
		data(){
			return {
				plhotelnew:[]
			}
		},
		methods:{
			fetchData(){
                this.plhotelnew =  JSON.parse(JSON.stringify(youlun));
           	}
		}
	}
</script>
	
<style>
</style>