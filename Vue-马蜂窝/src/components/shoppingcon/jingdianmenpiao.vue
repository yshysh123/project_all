<template>
	<planehotel :father='plhotelnew'></planehotel>
</template>
<script>
	import {jingdianmenpiao} from '../../data/shopping/jingdianmenpiao.js'
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
                this.plhotelnew =  JSON.parse(JSON.stringify(jingdianmenpiao));
           	}
		}
	}
</script>
	
<style>
</style>