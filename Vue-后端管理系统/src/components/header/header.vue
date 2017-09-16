<template>
	<div id="header_div">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content bg-purple">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="tianqi">
					<tianqi></tianqi>
				</div>
				<div class='pinglun'>
					<el-badge :value="val1" class="item">
						<el-button size="small" @click="pinglun">评论</el-button>
					</el-badge>
					<el-badge :value="val2" class="item">
						<el-button size="small" @click="huifu">回复</el-button>
					</el-badge>
				</div>
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
import tianqi from '../bodycomp/tianqi'
import tags from '../biaoqian/biaoqian'
export default {
	components: {
		tianqi,
		tags
	},
	data() {
		return {
			val1:12,
			val2:3
		};
	},
	mounted(){
		this.tags = this.$store.state.datatop
	},
	computed:{
		srctiele () {
			return this.$store.state.src
		}
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
		},
		pinglun(){
			this.$message('您有 '+this.val1+' 条评论');
		},
		huifu(){
			this.$message('您有 '+this.val2+' 条回复');
		}
	}
}
</script>

<style>
  body{
  	margin: 0;
  	padding: 0;
  	overflow-y: scroll;
  }
  #header_div{
  	margin-left: 180px;
  	min-width: 800px;
  }
  #header_div .tianqi{
  	width: 25%;
  	height: 30px;
  	line-height: 30px;
  	position: absolute;
  	left: 15%;
  	top: 15%;
  	text-align: center;
  	border: 2px solid #ccc;
  	border-radius: 5px;
  	box-shadow: 2px 2px 2px #ccc;
  }
	#header_div .pinglun{
		position: absolute;
		right:20px;
		top:0;
	}
	#header_div .pinglun .el-badge__content{
		top:10px;
		z-index: 10;
	}
	.el-dropdown-menu{
		top:20px;
	}
	#header_div .el-breadcrumb__item{
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		margin-left: 20px;
	}
	#header_div .el-breadcrumb__item span{
		cursor: pointer
	}
  #header_div .el-row {
  	border-bottom: 2px solid #000;
  }
  #header_div .grid-content {
  	height: 50px;
  	line-height: 50px;
    min-height: 36px;
  }
</style>
