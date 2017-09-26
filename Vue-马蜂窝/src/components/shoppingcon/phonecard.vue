<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {phonecard} from '../../data/shopping/phonecard.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(phonecard));
           	}
		}
	}
</script>
	
<style>
</style>