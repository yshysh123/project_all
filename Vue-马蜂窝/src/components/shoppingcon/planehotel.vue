<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {plhotel} from '../../data/shopping/plhotel.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(plhotel));
           	}
		}
	}
</script>
	
<style>
</style>