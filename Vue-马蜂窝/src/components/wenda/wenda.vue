<template>
	<div id="wenda">
		<div class="wenda_header">
			<img src="https://images.mafengwo.net/images/qa/h5_banner.jpg">
		</div>
		<div class="backtotop" @touchend="backtotop">
			<img src="static/imgs/backtop.png"/>
		</div>
		<div class="wenda_content">
			<ul>
				<scroller style="top: 8.5rem;"
		            :on-refresh="refresh"
		            :on-infinite="infinite"
	            >
					<li v-for="item in question">
						<router-link :to="'/qusetion/'+item.id">
							<div class="wenda_title">{{item.title}}</div>
							<img :src="item.headerpic" class="wenda_img2">
							<div class="wenda_touxiang">{{item.name}}</div>
							<img :src="item.pic" class="wenda_img1">
							<div class="wenda_con">{{item.content}}</div>
							<div class="wenda_conty">{{item.place}}</div>
							<div class="wenda_foot">{{item.liulan}}浏览 · {{item.answer}}回答 · <span>{{item.ding}}顶</span></div>
						</router-link>
					</li>
				</scroller>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueScroller from 'vue-scroller'
	Vue.use(VueScroller)
	import {question} from '../../data/question.js'
	export default{
		mounted(){
            document.getElementsByTagName('body')[0].scrollTop = 0;
            this.fetchData();
            this.top = 0;
      		this.bottom = 4;
		},
		data(){
			return {
                question:[]
			}
		},
		methods:{
			fetchData(){
                this.question = question.slice(0,5);
          	},
          	refresh(done) {
		        setTimeout(() => {
		          	this.question.sort(()=>{
		          		return Math.random() >= 0.5 ? 1 : -1;
		          	})
          			done()
		        }, 1500)
		    },
		    infinite(done){
		        setTimeout(() => {
		        	if(this.bottom>question.length){
		        		done(true)
		        	}
		        	else{
		        		let start = this.bottom + 1
			          	for (let i = start; i < start + 5; i++) {
			            	if(i==question.length){
			            		break;
			            	}
			            	this.question.push(question[i]);
			          	}
			        	this.bottom = this.bottom + 5
	          			done()
		        	}
		        }, 1500)
		    },
		    backtotop(){
		    	document.getElementsByTagName('body')[0].scrollTop = 0;
//		    	document.getElementById('body_scroll').scrollTop = 0;
		    }
		}
	}
</script>

<style>
@import '../../assets/css/article.css';
#wenda .backtotop{
	height: 2rem;
	width: 2rem;
	position: fixed;
	right: 0.5rem;
	bottom: 0.5rem;
	z-index: 100;
}
#wenda .backtotop img{
	height: 100%;
	width: 100%;
}
</style>