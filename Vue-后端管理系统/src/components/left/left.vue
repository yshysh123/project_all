<template>
  <div id="leftdiv">
    <div id='leftdiv_1'>
      <div class="leftdiv_1_header">
        <img :src='srctiele'>
        <h4>{{namenew}}</h4>
        <h5>{{login}}
        	<el-dropdown trigger="click" @command="handleCommand">
			      <span class="el-dropdown-link">
			        <span class="el-icon-caret-bottom"></span>
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item command="个人信息">个人信息</el-dropdown-item>
			        <el-dropdown-item command="修改头像">修改头像</el-dropdown-item>
			        <el-dropdown-item command="账户信息">账户信息</el-dropdown-item>
			        <el-dropdown-item command="系统设置">系统设置</el-dropdown-item>
			        <el-dropdown-item command="登出">登出</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
        </h5>
      </div>
    </div>
  	<div id="leftdiv_2">
	    <el-tree 
	    	:data="dataView" 
	    	:props="defaultProps" 
	    	@node-click="handleNodeClick" 
	    	highlight-current
	    	id="el_tree">
	    </el-tree>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      	login:'',
      	namenew:'',
      	isActive:0,
        dataView: 
        	[{
	          label: '回到主页',
	           route: '/body'
	        }, {
	          label: '动效',
	           route: '/jianshu'
	        }, {
	          label: '组件',
	          children: [{
	            label: '介绍',
	            route: '/组件/介绍'
	          }, {
	            label: '头像上传',
	            route: '/组件/headerimg'
	          }, {
	            label: '富文本编辑器',
	            route: '/组件/textedit'
	          }, {
	            label: 'Markdown',
	            route: '/组件/markdown'
	          }, {
	            label: '视频播放器',
	            route: '/组件/videoplay'
	          }, {
	            label: '列表拖拽',
	            route: '/组件/tabledrag'
	          }, {
	            label: '百度地图',
	            route: '/组件/百度地图'
	          }, {
	            label: '换肤',
	            route: '/组件/幻灯片'
	          }, {
	            label: 'CSS3小动画',
	            route: '/组件/CSS3小动画'
	          }, {
	            label: 'Dropzone',
	            route: '/组件/dropzone'
	          }, {
	            label: 'CountTo',
	            route: '/组件/countTo'
	          }
          ]},
          {
          label: '图表',
          children: [{
            label: '介绍',
            route: '/chartmain'
          }, {
            label: '琴键图表',
            route: '/chartkey'
          }, {
            label: '饼图',
            route: '/chartpie'
          }, {
            label: '折线图',
            route: '/chartline'
          }, {
            label: '柱状图动画',
            route: '/chartmove'
          }, {
            label: '地图1',
            route: '/mapkqzl'
          }, {
            label: '地图2',
            route: '/mapworld'
          }]
        },
        {
          label: '错误页面',
          children: [{
            label: '401',
            route: '/error401'
          }, {
            label: '404',
            route: '/error404'
          }
          ]},
        {
          label: '留言板',
          route: '/talk'
          },
        {
          label: 'Excel导出',
          route: '/excel'
          },
        {
          label: '日历',
          route: '/calendar'
          },
        {
          label: '综合实例',
          children: [{
            label: 'Table',
            route: '/table'
          }, {
            label: '3D小简历',
            route: '/ball3d'
          }, 
          {
          label: '相册',
            children: [{
              label: '基本图库',
              route: '/相册/基本图库'
            }, {
              label: '图片切换',
              route: '/相册/图片切换'
            }
            , {
              label: '瀑布流',
              route: '/相册/瀑布流'
            }]
          },
          {
            label: 'Tab',
            route: '/tab'
          },
          {
            label: 'Form',
            route: '/todolist'
          },
          {
            label: '发帖',
            route: '/sendtie'
          }
          ]}
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
       }
    },
    mounted(){
    	this.init();
    },
    watch: {
      	"$route": "init"
   	},
    methods: {
    	init(){
    		let json = JSON.parse(localStorage.getItem('loginHT'));
	    	this.login = json.login;
	    	this.namenew = json.namenew;
	    	this.$store.state.src = json.pic;
    	},
			handleNodeClick (data) {
        this.$router.push({path: data.route})
        if( this.$store.state.datatop.length ){
          for(var i=0;i<this.$store.state.datatop.length;i++){
          	if(data.label=='组件'||data.label=='图表'||data.label=='错误页面'||data.label=='综合实例'||data.label=='相册'){
            	return;
            }
            if(this.$store.state.datatop[i].name == data.label){
              return;
            }
          }
          this.$store.state.datatop.unshift({path: data.route, name: data.label,type:'gray'})
        }else{
          this.$store.state.datatop.unshift({path: data.route, name: data.label,type:'gray'})
        }
			},
			handleCommand(command) {
				if(command==='登出'){
        	this.$router.push({path: '/login'})
        }
				else if(command==='修改头像'){
					this.$router.push({path: '/组件/headerimg'})
				}
				else{
					this.$message('你点击了' + command + '标签，但是我还没有写功能。。哈哈');
				}
      }
    },
    computed: {
      srctiele() {
        return this.$store.state.src
      }
    },
  }
</script>

<style>
	#leftdiv{
		position: fixed;
  	left: 0;
  	top: 0;
  	z-index: 1000;
  	width: 180px;
  	background: #2f4050;
  	bottom: 0;
  	transition:all 0.5s ease-out;
  	overflow: hidden;
  	cursor: pointer;
  	white-space: nowrap;
  	font-family:Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif
	}
  #leftdiv #leftdiv_1{
    position: absolute;
		top: 0;
		bottom: 0;
    width:100%;
    height: 150px;
    background: url(header-profile.png) no-repeat top left;
    background-size: 100% 100%;
  }
  #leftdiv #leftdiv_1 .leftdiv_1_header img{
    height: 70px;
    width:70px;
    border-radius: 50%;
    margin-top: 10%;
    margin-left: 20%;
    display: block;
  }
  #leftdiv #leftdiv_1 .leftdiv_1_header h4{
    height: 30px;
    line-height: 30px;
    color:#ccc;
    text-indent: 16%;
  }
  #leftdiv #leftdiv_1 .leftdiv_1_header h5 .el-dropdown{
  	text-indent: 5px;
  	padding: 0;
  	margin: 0;
  }
  .el-dropdown-menu .el-dropdown-menu__item{
  	text-align: center;
  }
  #leftdiv #leftdiv_1 .leftdiv_1_header h5{
    height: 30px;
    line-height: 20px;
    color:#ccc;
    text-indent: 16%;
  }
	#leftdiv #leftdiv_2{
		position: absolute;
		/*right: -17px;*/
		overflow-y: scroll;
		top: 150px;
		bottom: 0;
	}
  #leftdiv #el_tree{
  	width:180px;
  	border: 0;
  	background: #2f4050;
  	color:#bfcbd9;
  }

  #leftdiv #el_tree .el-tree-node__children{
  	background: #1f2d3d;
  }
  #leftdiv #el_tree .el-tree-node__content{
  	height: 40px;
  	padding: 5px;
  	padding-left: 10px;
  }
  #leftdiv #el_tree .el-tree-node__content:hover{
    background: #293846;
    color:#fff;
  }
  #leftdiv #el_tree .el-tree-node span{
  	line-height: 40px;
  }
</style>
