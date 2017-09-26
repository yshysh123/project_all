<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {jiesong} from '../../data/shopping/jiesong.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(jiesong));
           	}
		}
	}
</script>
	
<style>
</style>