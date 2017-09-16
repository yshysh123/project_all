<template>
    <div class='simple1'>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content">
                    姓名</br>
                    <el-input v-model="input" placeholder="请输入内容"></el-input></br>
                    手机号</br>
                    <el-input v-model="input" placeholder="请输入内容"></el-input></br>
                    年龄</br>
                    <el-input v-model="input" placeholder="请输入内容"></el-input></br>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    简介</br>
                    <el-input v-model="input" placeholder="请输入内容"></el-input></br>
                    星座</br>
                    <el-input v-model="input" placeholder="请输入内容"></el-input></br>
                    住址</br>
                    <el-input v-model="input" placeholder="请输入内容"></el-input></br>
                </div>
            </el-col>
        </el-row>
        <br />
        自我介绍
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
        掌握技能
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
        <div class="block">
            <span class="wrapper">
                <el-button type="success" @click="submitInfo">提交</el-button>
                <el-button type="danger" @click="cancel">取消</el-button>
            </span>
        </div>
    </div>
</template>

<script>
   
  export default {
    data() {
      return {
      }
    },
    methods:{
        cancel(){
            var simple1 = document.getElementsByClassName('simple1')[0];
            var inputs  = simple1.getElementsByTagName('input');
            var textareas  = simple1.getElementsByTagName('textarea');
            for(var i=0;i<inputs.length;i++){
                inputs[i].value = '';
            }
            for(var i=0;i<textareas.length;i++){
                textareas[i].value = '';
            }
        },
        submitInfo(){
        }
    }
  }
</script>

<style>
.simple1 .grid-content{
    line-height:40px;
}
.simple1 .wrapper{
    margin:0 auto;
}
</style>
