<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {wifi} from '../../data/shopping/wifi.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(wifi));
           	}
		}
	}
</script>
	
<style>
</style>