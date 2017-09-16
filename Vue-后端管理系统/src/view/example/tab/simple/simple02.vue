<template>
    <div class='simple2'>
        <span>描述</span>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
        <span>注意事项</span>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
        <el-col :span="24">
            <div class="grid-content">
                <span>进度百分比</span>
                <div class="block">
                    <el-slider
                    v-model="value8"
                    show-input>
                    </el-slider>
                </div>
            </div>
        </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          value8: 0
      }
    }
  }
</script>

<style>
.simple2 span{
    line-height: 40px;
}
</style>