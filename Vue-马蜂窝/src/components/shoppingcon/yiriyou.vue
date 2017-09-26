<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {yiriyou} from '../../data/shopping/yiriyou.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(yiriyou));
           	}
		}
	}
</script>
	
<style>
</style>