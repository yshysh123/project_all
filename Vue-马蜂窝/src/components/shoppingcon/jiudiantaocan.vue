<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {jiudiantaocan} from '../../data/shopping/jiudiantaocan.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(jiudiantaocan));
           	}
		}
	}
</script>
	
<style>
</style>