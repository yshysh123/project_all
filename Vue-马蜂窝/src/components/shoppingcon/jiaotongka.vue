<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {jiaotongka} from '../../data/shopping/jiaotongka.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(jiaotongka));
           	}
		}
	}
</script>
	
<style>
</style>