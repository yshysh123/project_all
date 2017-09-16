<template>
    <div id="ppt">
        <el-card class="box-card">
        <div slot="header">
            <span style="line-height: 36px;">偏好设置</span>
        </div>

        <div class="box-item">
            <span class="field-label">换肤:</span>
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
        </el-card>
        <div class="block">
            <span class="wrapper">
                <el-button type="success" @click="success">成功按钮</el-button>
                <el-button type="warning" @click="warning">警告按钮</el-button>
                <el-button type="danger" @click="error">危险按钮</el-button>
                <el-button type="info" @click="info">信息按钮</el-button>
            </span>
        </div>

        <div class="block">
            <el-tag class='tag-item' v-for="tag in tags" :type="tag.type" :key='tag.type'>
                {{tag.name}}
            </el-tag>
        </div>

        <div class="block">
        <el-alert class='alert-item' title="成功提示的文案" type="success">
        </el-alert>
        <el-alert class='alert-item' title="消息提示的文案" type="info">
        </el-alert>
        <el-alert class='alert-item' title="警告提示的文案" type="warning">
        </el-alert>
        <el-alert class='alert-item' title="错误提示的文案" type="error">
        </el-alert>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            color1: '#20a0ff',
            tags: [{
            name: '标签一',
            type: ''
            },
            {
            name: '标签二',
            type: 'gray'
            },
            {
            name: '标签三',
            type: 'primary'
            },
            {
            name: '标签四',
            type: 'success'
            },
            {
            name: '标签五',
            type: 'warning'
            },
            {
            name: '标签六',
            type: 'danger'
            }
            ],
            inputVisible: false,
            inputValue: ''
        }
    },
    watch:{
        color1(){
            let str = this.color1;
            document.getElementById('leftdiv').style.backgroundColor = str;
            document.getElementById('el_tree').style.backgroundColor = str;
            document.getElementById('header_div').style.backgroundColor = str;
        }
    },
    mounted(){
    },
    methods:{
    	success(){
    		this.$notify({
	          title: '成功',
	          message: '这是一条成功的提示消息',
	          type: 'success'
	        });
    	},
    	info(){
    		this.$notify.info({
	          title: '消息',
	          message: '这是一条消息的提示消息'
	        });
    	},
    	warning(){
    		this.$notify({
	          title: '警告',
	          message: '这是一条警告的提示消息',
	          type: 'warning'
	        });
    	},
    	error(){
    		this.$notify.error({
	          title: '错误',
	          message: '这是一条错误的提示消息'
	        });
    	}
    }
}
</script>
<style>
#ppt{
    margin-left: 180px;
    padding-top: 20px;
}
#ppt .box-card{
    width: 400px;
    margin: 0 auto;
}
#ppt .block{
    padding: 30px 24px;
}
#ppt .alert-item{
    margin-bottom: 10px;
}
#ppt .tag-item{
    margin-right: 15px;
}
</style>