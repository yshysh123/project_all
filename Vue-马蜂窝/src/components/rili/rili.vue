<template>
    <div id="rili">
    	<riliheader></riliheader>
    	<div class="rilititle">欢迎来到马蜂窝的宝库</div>
    	<div class="rili_content" v-for="(item,index) in month">
	    	<div class="month_title">
	    		<em>{{item.month}}</em>
	    		<span>
	    			月<br />{{item.eng}}
	    		</span>
	    	</div>
	        <ul class="month_ul">
	            <li v-for="(img,index2) in item.list">
	            	<div class="rilicon">
	            		<img v-lazy="img">
	            		<div class="num">{{(item.list.length)-index2}}</div>
	            	</div>
	            </li>
	        </ul>
        </div>
    </div>
</template>
<script>
 import riliheader from './riliheader'
 export default {
 	components:{
 		riliheader
 	},
    data () {
        return {
        	month:[
        		{
        			month:'12',
        			eng:'Dec.',
        			list:[],
        			len:31
        		},
        		{
        			month:'11',
        			eng:'Nov.',
        			list:[],
        			len:30
        		},
        		{
        			month:'10',
        			eng:'Oct.',
        			list:[],
        			len:31
        		},
        		{
        			month:'09',
        			eng:'Sep.',
        			list:[],
        			len:30
        		},
        		{
        			month:'08',
        			eng:'Aug.',
        			list:[],
        			len:31
        		},
        		{
        			month:'07',
        			eng:'Jul.',
        			list:[],
        			len:31
        		},
        		{
        			month:'06',
        			eng:'Jun.',
        			list:[],
        			len:30
        		},
        		{
        			month:'05',
        			eng:'May.',
        			list:[],
        			len:31
        		},
        		{
        			month:'04',
        			eng:'Apr.',
        			list:[],
        			len:30
        		},
        		{
        			month:'03',
        			eng:'Mar.',
        			list:[],
        			len:31
        		},
        		{
        			month:'02',
        			eng:'Feb.',
        			list:[],
        			len:28
        		},
        		{
        			month:'01',
        			eng:'Jan.',
        			list:[],
        			len:31
        		}
        	],
        	now:2017,
        	hash:location.hash
        }
    },
    watch: {
  		"$route": "init"
	},
    mounted(){
    	this.init();
    },
    methods:{
    	init(){
    		this.month = [
        		{
        			month:'12',
        			eng:'Dec.',
        			list:[],
        			len:31
        		},
        		{
        			month:'11',
        			eng:'Nov.',
        			list:[],
        			len:30
        		},
        		{
        			month:'10',
        			eng:'Oct.',
        			list:[],
        			len:31
        		},
        		{
        			month:'09',
        			eng:'Sep.',
        			list:[],
        			len:30
        		},
        		{
        			month:'08',
        			eng:'Aug.',
        			list:[],
        			len:31
        		},
        		{
        			month:'07',
        			eng:'Jul.',
        			list:[],
        			len:31
        		},
        		{
        			month:'06',
        			eng:'Jun.',
        			list:[],
        			len:30
        		},
        		{
        			month:'05',
        			eng:'May.',
        			list:[],
        			len:31
        		},
        		{
        			month:'04',
        			eng:'Apr.',
        			list:[],
        			len:30
        		},
        		{
        			month:'03',
        			eng:'Mar.',
        			list:[],
        			len:31
        		},
        		{
        			month:'02',
        			eng:'Feb.',
        			list:[],
        			len:28
        		},
        		{
        			month:'01',
        			eng:'Jan.',
        			list:[],
        			len:31
        		}
        	]
    		let date = new Date();
	    	let year = String(date.getFullYear());
	    	this.now = location.hash.split('/')[2];
	    	if(year===this.now){
	    		let month = date.getMonth()+1;
		    	let num = 12-month;
		    	this.month.splice(0,num);
		    	this.showdata();
	    	}
	    	else{
	    		this.showdata();
	    	}
    	},
    	showdata(){
    		this.$ajax.get('http://flower_time_pic').then(response => {
			    for(let i=0;i<this.month.length;i++){
			    	this.month[i].list = JSON.parse(JSON.stringify(response.data));
			    	this.month[i].list.sort(()=>{
			    		return Math.random()>.5 ? -1 : 1; 
			    	})
			    	let date = new Date();
				    let day = date.getDate();
				    let numday = 31-this.month[i].len;
				   	this.month[i].list.splice(0,numday)
			    }
			    let date = new Date();
			    let year = String(date.getFullYear());
			    let day = date.getDate();
			    let numday = 31-day;
			    if(year===this.now){
			   		this.month[0].list.splice(0,numday);
			   	}
			}, response => {
			    console.log('error')
			})
    	}
    }
 }
</script>

<style>
	#rili{
		padding: 0.4rem;
		padding-left: 0.65rem;
		background:#309296 url(bg.png) no-repeat center top;
	}
	
	#rili .rilititle{
		font-size: 0.9rem;
		line-height:0.9rem;
		margin-bottom: 0.4rem;
		color: #fff;
		margin-left: 0.2rem;
		position: relative;
		margin-top: 0.4rem;
	}
	#rili .rilititle:before{
		content:'';
		position:absolute;
		left:-0.5rem;
		top:50%;
		margin-top:-.16667rem;
		width:.23333rem;
		height:.23333rem;
		border-radius:50%;
		box-shadow:0 0 0 .05333rem rgba(255,255,255,0.3);
		background-color:#fff;
	}
	#rili .month_title{
		margin-bottom: 0.4rem;
		margin-top: 0.4rem;
	}
	#rili .month_title em{
		font-size: 1.8rem;
		line-height:1.8rem;
		color: #fff;
		letter-spacing:-.01333rem;
		font-style:normal;
		margin-right:.10667rem;
	}
	#rili .month_title span{
		display: inline-block;
		color:rgba(255,255,255,0.4);
		font-size: 0.6rem;
	}
	#rili .month_title{
		position: relative;
	}
	#rili .month_title:before{
		content:'';
		position:absolute;
		left:-0.3rem;
		top:50%;
		margin-top:-.16667rem;
		width:.23333rem;
		height:.23333rem;
		border-radius:50%;
		box-shadow:0 0 0 .05333rem rgba(255,255,255,0.3);
		background-color:#fff;
	}
	#rili .rili_content ul{
		overflow: hidden;
	}
	#rili .rili_content ul li{
		float: left;
		width: 30%;
		margin: 0.25rem;
		position: relative;
	}
	#rili .rili_content img{
		width: 100%;
		box-shadow:0 0 0 2px rgba(0,0,0,0.1);
	}
	#rili div:nth-of-type(3) ul li:nth-of-type(1){
		width: 63.4%;
	}
	#rili .rili_content .num{
		position: absolute;
		right: 0.2rem;
		bottom: 0.2rem;
		width: 1rem;
		font-size: 0.8rem;
		line-height: 1rem;
		font-weight: 900;
		color: rgba(255,255,255,0.8);
		height: 1rem;
		text-shadow:0 0 .05333rem rgba(0,0,0,0.4);
	}
	.back{
		height: 30%;
		width: 1.2rem;
		position: absolute;
		left: 0;
		top: 0.7rem;
		left: 0.2rem;
	}
</style>