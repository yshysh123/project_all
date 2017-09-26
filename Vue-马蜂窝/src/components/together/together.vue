<template>
	<div id="together">
		<div class="together_header">
			<img src="https://images.mafengwo.net/mobile/images/together/topNum-bg.jpg">
			<div class="tra_plan">336046<br><span>个旅行计划</span></div>
			<div class="tra_people">520253<br><span>人参与</span></div>
			<div class="tra_place">10730<br><span>个目的地</span></div>
		</div>
		<div class="together_content">
			<ul class="together_contentul">
				<li v-for="item in together" >
					<router-link :to="'/together/'+item.id">
						<img :src="item.pic" class="img1">
						<div class="img_destination">{{item.destination}}</div>
						<div class="img_days">{{item.days}}</div>
						<div class="img_setout">{{item.setout}}出发</div>
						<img :src="item.Headportrait" class="img2">
						<div class="to_jieshao">
							<p>{{item.name}}</p>
							<div><span>Lv{{item.level}}</span><i>{{item.place}}</i></div>
							<div class="con">{{item.content}}</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {together} from '../../data/together.js'
	export default{
		mounted(){
            document.getElementsByTagName('body')[0].scrollTop = 0;
            this.fetchData();
		},
		data(){
			return {
                together:[]
			}
		},
		methods:{
			fetchData(){
                this.together = together;
           }
		}
	}
</script>

<style>
#together .together_header {
  position: relative;
  height: 4rem;
}
#together .together_header img {
  height: 100%;
  width: 100%;
}
#together .tra_plan,
#together .tra_people,
#together .tra_place {
  position: absolute;
  left: 1rem;
  top: 1.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1rem;
  font-family: Georgia;
  font-size: 1rem;
}
#together .tra_plan span,
#together .tra_people span,
#together .tra_place span {
  font-size: 0.52rem;
  display: block;
  text-align: center;
}
#together .tra_people {
  left: 6rem;
  top: 1.2rem;
}
#together .tra_place {
  left: 10.8rem;
  top: 1.2rem;
}
#together .together_contentul {
  overflow: hidden;
}
#together .together_contentul li {
  float: left;
  width: 7.7rem;
  padding: 0.3rem;
  position: relative;
}
#together .together_contentul li .img1 {
  width: 7.7rem;
  height: 5rem;
}
#together .together_contentul li .img2 {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  position: absolute;
  bottom: 4.3rem;
  left: 0.8rem;
}
#together .together_contentul li .img_destination {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  font-size: 0.6rem;
  line-height: 0.6rem;
  text-overflow: text-overflow;
  height: 0.6rem;
  overflow: hidden;
  text-shadow: 0 0.04rem 0.08rem rgba(0, 0, 0, 0.5);
  letter-spacing: 0.1rem;
  color: #fff;
}
#together .together_contentul li .img_days {
  position: absolute;
  top: 2rem;
  left: 0.8rem;
  font-size: 0.64rem;
  line-height: 0.64rem;
  color: #fff;
  text-shadow: 0 0.04rem 0.08rem rgba(0, 0, 0, 0.5);
}
#together .together_contentul li .img_setout {
  position: absolute;
  bottom: 5rem;
  right: 0.3rem;
  font-size: 0.52rem;
  line-height: 1rem;
  color: #fff;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  background-color: #61c6ad;
}
#together .together_contentul li .to_jieshao {
  height: 4rem;
  padding-top: 0.4rem;
}
#together .together_contentul li .to_jieshao p {
  font-size: 0.48rem;
  line-height: 0.88rem;
}
#together .together_contentul li .to_jieshao span {
  font-size: 0.48rem;
  line-height: 0.88rem;
  color: #fa9f00;
  margin-right: 0.4rem;
}
#together .together_contentul li .to_jieshao i {
  font-size: 0.48rem;
  line-height: 0.88rem;
}
#together .together_contentul li .to_jieshao .con {
  margin-top: 0.2rem;
  font-size: 0.48rem;
  line-height: 0.68rem;
  color: #a4a4a4;
  height: 1.36rem;
  overflow: hidden;
  word-break: break-all;
}
</style>