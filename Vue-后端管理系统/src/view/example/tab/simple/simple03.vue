<template>
    <div class="simple3">
        <el-col :span="24">
            <div class="grid-content">
                <span>项目名称</span><el-input v-model="input" placeholder="请输入内容"></el-input><br />
                <span负责人></span> <el-select v-model="value5" multiple placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select><br />
                <span>创建时间</span><br />
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
                    </el-date-picker>
                    <el-time-picker
                        v-model="value2"
                        :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="任意时间点">
                    </el-time-picker>
                </div>
                <span>优先级</span><br />
                <el-radio-group v-model="radio2">
                    <el-radio :label="3">A项目</el-radio>
                    <el-radio :label="6">B项目</el-radio>
                    <el-radio :label="9">C项目</el-radio>
                </el-radio-group>
            </div>
        </el-col>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          radio2: 3,
          options: [{
            value: '选项1',
            label: '于偲鸿'
            }, {
            value: '选项2',
            label: '秦焕禹'
            }, {
            value: '选项3',
            label: '马辉'
            }, {
            value: '选项4',
            label: '刘雅松'
            }, {
            value: '选项5',
            label: '王慧仙'
            }],
            value5: []
        }
    }
  }
</script>

<style>
.simple3 .grid-content{
    line-height: 40px;
}
</style>