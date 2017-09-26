<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {dangditiyan} from '../../data/shopping/dangditiyan.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(dangditiyan));
           	}
		}
	}
</script>
	
<style>
</style>