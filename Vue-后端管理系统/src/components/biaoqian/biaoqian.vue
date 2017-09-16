<template>
	<div id="tags">
		<div class="biaoqian">
			<span
				class='span'
				v-for="tag in tags"
				:key="tag.name"
				:closable="true"
				:type="tag.type"
				@dblclick='clickViewTabs(tag)'
			>
				{{tag.name}}
				<i class='i' @click='closeViewTabs(tag)'>×</i>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tags: [
					// { name: '首页', type: '',path:'/'},
					// { name: '组件', type: 'gray' },
					// { name: '图表', type: 'primary' },
					// { name: '错误页面', type: 'success' },
					// { name: 'Excel', type: 'warning' },
					// { name: '日历', type: 'danger' }
				]
			};
		},
		mounted(){
			this.tags = this.$store.state.datatop
		},
		methods:{
			closeViewTabs(tag){
				for(var i=0;i<this.tags.length;i++){
					if(this.tags[i].name==tag.name){
						this.tags.splice(i,1);
					}
				}
			},
			clickViewTabs(tag){
				this.$router.push({path: tag.path})
			}
		}
	}
</script>

<style>
	#tags{
		margin-left: 180px;
		position: relative;
		min-height: 30px;
		border-bottom: 2px solid #000;
		width: 5000px;
	}
	#tags .biaoqian{
		position: absolute;
		left: 1%;
		top:3px;
	}
	#tags .biaoqian .span{
		margin-right:10px;
		padding-left:5px;
		border:1px solid #000;
		border-color: rgba(32,160,255,.2);
		border-radius: 7px;
		font-size: 12px;
		line-height: 18px;
		color:#20a0ff;
		cursor: pointer;
		background: rgba(32,160,255,.1);
	}
	#tags .biaoqian .i{
		display:inline-block;
		text-align: center;
		font-size: 14px;
		line-height: 18px;
		width:18px;
		text-align: center;
	}
	#tags .biaoqian .i:hover{
		border-radius: 50%;
		background: rgba(32,160,255,.5)
	}
</style>