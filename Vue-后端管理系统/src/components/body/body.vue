<template>
  <div id="body_div">
    <div id="body_btn">
      <el-row>
        <el-col>
          <div class="grid-content bg-purple">
            <div class="ibox_title">
              <span class="ibox_title_left">收入</span>
              <span class="ibox_title_right">月</span>
            </div>
            <div class="ibox_content">
              <div class="ibox_content_top">29999.00</div>
              <div class="ibox_content_bottom">
                <span class="ibox_content_bottom_left">总收入</span>
                <span class="ibox_content_bottom_right">90%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
            <div class="ibox_title">
              <span class="ibox_title_left">订单</span>
              <span class="ibox_title_right">全年</span>
            </div>
            <div class="ibox_content">
              <div class="ibox_content_top">27500.00</div>
              <div class="ibox_content_bottom">
                <span class="ibox_content_bottom_left">新订单</span>
                <span class="ibox_content_bottom_right">20%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
            <div class="ibox_title">
              <span class="ibox_title_left">访客</span>
              <span class="ibox_title_right">今天</span>
            </div>
            <div class="ibox_content">
              <div class="ibox_content_top">120</div>
              <div class="ibox_content_bottom">
                <span class="ibox_content_bottom_left">新访客</span>
                <span class="ibox_content_bottom_right">44%</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
            <div class="ibox_title">
              <span class="ibox_title_left">活跃用户</span>
              <span class="ibox_title_right">最近一个月</span>
            </div>
            <div class="ibox_content">
              <div class="ibox_content_top">538.00</div>
              <div class="ibox_content_bottom">
                <span class="ibox_content_bottom_left">12月</span>
                <span class="ibox_content_bottom_right">38%</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="body_charts2">
      <el-row>
        <el-col>
          <div class="grid-content bg-purple" id="shouming">
            <keyboard-map height='400px'></keyboard-map>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content2 bg-purple">
            <div class="change">
              <span>天</span>
              <span class="active">月</span>
              <span>年</span>
            </div>
            <div class="changebody">
              <div class="changebody1">
                <div class="changebody1value">
                  <h3>{{value[0].valuetotle}}</h3>
                  <span>用户总数</span>
                  <span>48%</span>
                </div>
                <div class="block">
                  <el-slider v-model="value[0].value" disabled></el-slider>
                </div>
              </div>
              <div class="changebody2">
                <div class="changebody1value">
                  <h3>{{value[1].valuetotle}}</h3>
                  <span>当月用户数</span>
                  <span>34%</span>
                </div>
                <div class="block">
                  <el-slider v-model="value[1].value" disabled></el-slider>
                </div>
              </div>
              <div class="changebody3">
                <div class="changebody1value">
                  <h3>{{value[2].valuetotle}}</h3>
                  <span>新用户数</span>
                  <span>28%</span>
                </div>
                <div class="block">
                  <el-slider v-model="value[2].value" disabled></el-slider>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="body_charts">
      <el-row>
        <el-col>
          <div class="grid-content bg-purple">
            <div class="grid_card">
              <message></message>
            </div>
          </div>
        </el-col>
        <el-col id="keyboardC">
          <div class="grid-content bg-purple">
            <keyboard-chart height='300px'></keyboard-chart>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
            <search></search>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="body_map">
      <el-row>
        <el-col>
          <div class="grid-content bg-purple" id='worldmap_load'>
              <bodymap height='450px'></bodymap>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple">
            <todolist></todolist>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import keyboardChart from '../charts/chart'
import keyboardMap from '../charts/map'
import message from '../bodycomp/message'
import todolist from '../todolist/index'
import bodymap from '../bodycomp/bodychart'
import search from '../bodycomp/search'
export default {
  components: {
    keyboardChart,
    keyboardMap,
    message,
    todolist,
    bodymap,
    search
  },
  name: 'body',
  data() {
    return {
      value: [
        { value: 76, valuetotle: 2000 },
        { value: 50, valuetotle: 567 },
        { value: 36, valuetotle: 893 },
        { value: 48, valuetotle: 2353 },
        { value: 42, valuetotle: 423 }
      ]
    }
  },
  mounted(){
  	document.getElementsByTagName('body')[0].scrollTop = 0;
  },
  computed: {
    srctiele() {
      return this.$store.state.src
    }
  },
  methods: {
  }
}
</script>

<style>
#body_div {
  margin-left: 180px;
  padding-top: 15px;
  background: #f3f3f4;
  min-width: 800px;
}

#body_btn,
#body_charts,
#body_charts2,
#body_map {
  margin-left: 2%;
  padding-bottom: 15px;
}

#body_charts2 {
  margin-bottom: 0;
}

#body_btn .el-col {
  width: 23%;
  height: 135px;
  margin-bottom: 10px;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #d1dbe5;
}

#body_btn .grid-content {
  cursor: pointer;
  height: 100%;
  width: 100%;
  position: relative;
  box-shadow: 2px 2px 10px #ccc;
}

#body_btn .grid-content .ibox_title {
  width: 100%;
  height: 35%;
  border-bottom: 1px solid #ccc;
}

#body_btn .grid-content .ibox_title_left {
  position: absolute;
  left: 10%;
  top: 10%;
}

#body_btn .grid-content .ibox_title_right {
  position: absolute;
  right: 5%;
  top: 10%;
  padding-left: 5px;
  padding-right: 5px;
  height: 20px;
  text-align: center;
  display: inline-block;
  background: #1c84c6;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  border-radius: 3px;
}

#body_btn .grid-content .ibox_content {
  padding: 15px 20px 20px;
}

#body_btn .grid-content .ibox_content .ibox_content_top {
  font-size: 30px;
  line-height: 30px;
  text-indent: 20px;
}

#body_btn .grid-content .ibox_content .ibox_content_bottom_left {
  font-size: 12px;
  position: absolute;
  left: 10%;
  bottom: 10%;
}

#body_btn .grid-content .ibox_content .ibox_content_bottom_right {
  font-size: 12px;
  position: absolute;
  right: 10%;
  bottom: 10%;
}

#body_btn .grid-content img {
  height: 100%;
  width: 100%;
  opacity: 0.8;
  position: relative;
  display: block;
}

#body_btn .row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

#body_charts .el-row {
  margin-bottom: 10px;
}

#body_charts .el-col {
  width: 32%;
  border-radius: 4px;
  margin-left: 1%;
}

#body_charts .el-col:first-child {
  width: 32%;
  border-radius: 4px;
}

#body_charts #keyboardC {
  width: 32%;
  border-radius: 4px;
  box-shadow: 2px 2px 10px #ccc;
  border: 1px solid #d1dbe5;
}

#body_charts .el-col:last-child {
  border: 1px solid #d1dbe5;
  width: 32%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 2px 10px #ccc;
}

#body_charts .grid-content {
  height: 300px;
  border-radius: 4px;
  min-height: 36px;
}

#body_charts .grid-content .grid_card {
  border: 1px solid #d1dbe5;
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  box-shadow: 2px 2px 10px #ccc;
}

#body_charts .grid-content .grid_card .grid_card_header {
  padding-top: 20px;
  height: 55%;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ccc;
}

#body_charts .grid-content .grid_card .grid_card_header img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
}

#body_charts2 .el-row {
  margin-bottom: 10px;
}

#body_charts2 .el-col:first-child {
  border-top: 1px solid #d1dbe5;
  margin-left: 1%;
  width: 78%;
}

#body_charts2 .el-col:last-child {
  border-top: 1px solid #d1dbe5;
  width: 20%;
  background: #fff;
  box-shadow: 2px 2px 10px #ccc
}

#body_charts2 .el-col #shouming {
  box-shadow: 2px 2px 10px #ccc
}

#body_charts2 .grid-content {
  height: 400px;
  border-radius: 4px;
  min-height: 36px;
}

#body_charts2 .grid-content2 {
  height: 400px;
  border-radius: 4px;
  min-height: 36px;
  position: relative;
}

#body_charts2 .row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

#body_charts2 .change {
  position: absolute;
  right: 15%;
  top: 5%;
}

#body_charts2 .change span {
  border: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}

#body_charts2 .change span:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

#body_charts2 .change span:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

#body_charts2 .change span.active {
  box-shadow: 0 2px 5px rgba(0, 0, 0, .15)inset;
}

#body_charts2 .changebody {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 85%;
  left: 0;
}

#body_charts2 .changebody h3 {
  margin: 0;
  padding: 0;
  line-height: 40px;
}

#body_charts2 .changebody span:first-child {
  float: left;
}

#body_charts2 .changebody span:last-child {
  float: right;
  padding-right: 10%;
}

#body_charts2 .changebody .el-slider {
  width: 90%;
}

#body_map {
  padding-bottom: 20px;
}

#body_map .el-col:first-child {
  height: 450px;
  border-top: 1px solid #d1dbe5;
  border-radius: 4px;
  margin-left: 1%;
  width: 65%;
  margin-right: 1%;
  background: #fff;
  box-shadow: 2px 2px 10px #ccc
}
#body_map .el-col:last-child {
  border-top: 1px solid #d1dbe5;
  border-radius: 4px;
  width: 32%;
  background: #fff;
  box-shadow: 2px 2px 10px #ccc
}

#body_map .grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
