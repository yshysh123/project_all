<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {banzizhu} from '../../data/shopping/banzizhu.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(banzizhu));
           	}
		}
	}
</script>
	
<style>
</style>