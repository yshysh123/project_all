<template>
  <div class="tab_body">
      <div class="tab_body_2">
        <el-radio-group v-model="tabView">
            <el-radio-button label="simple01">个人简介</el-radio-button>
            <el-radio-button label="simple02">项目进度</el-radio-button>
            <el-radio-button label="simple03">项目内容</el-radio-button>
        </el-radio-group>
        <div style="margin: 10px 0;"></div>
        <keep-alive>
            <component v-bind:is="tabView"></component>
        </keep-alive>
      </div>
  </div>
</template>

<script>
    import simple01 from './simple/simple01'
    import simple02 from './simple/simple02'
    import simple03 from './simple/simple03'
    export default{
        name: 'simple',
        data (){
            return {
                tabView: 'simple01'
            }
        },
        components:{
            simple01,
            simple02,
            simple03
        }
    }
</script>

<style>
.tab_body{
    margin-left: 180px;
}
.tab_body_2{
    height: 100%;
    margin: 50px;
}
</style>
