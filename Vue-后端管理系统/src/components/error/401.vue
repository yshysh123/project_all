<template>
    <div id='error401' style='height:90vh'>
        <div class="errPage-container">
            <el-row>
            <el-col :span="12">
                <el-button @click="back" icon='arrow-left' class="pan-back-btn">返回</el-button>
                <h1 class="text-jumbo text-ginormous">Sorry!你没有权限去该页面</h1>
                <ul class="list-unstyled">
                    <li>或者你可以去:</li>
                    <li class="link-type">
                        <router-link to="/body"><el-button icon='arrow-left' class="pan-back-btn">回首页</el-button></router-link>
                    </li>
                    <li class="link-type">
                        <a href="http://www.miaov.com/"><el-button icon='arrow-left' class="pan-back-btn">随便看看</el-button></a>
                    </li>
                    <li><a @click.prevent="dialogVisible=true" href="#"><el-button icon='arrow-left' class="pan-back-btn">点我看图</el-button></a></li>
                </ul>
            </el-col>
            <el-col :span="12">
                <img :src="errGif" width="503" height="503" style="border-radius:50%">
            </el-col>
            </el-row>
            <el-dialog title="随便看" :visible.sync="dialogVisible" size="large">
                <img class="pan-img" :src="ewizardClap">
            </el-dialog>
        </div>
    </div>
</template>

<script>
  import errGif from './401.gif';
  import cloud from './cloud.jpg';
  import lala from './啦啦.gif';
  export default {
    data() {
      return {
        errGif: errGif + '?' + +new Date(),
        ewizardClap: lala,
        cloud: cloud,
        dialogVisible: false,
      }
    },
    mounted(){
    },
    methods: {
      back() {
        if (this.$route.query.noGoBack) {
          this.$router.push({ path: '/' });
        } else {
          this.$router.go(-1);
        }
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
   #error401{
       margin-left: 180px;
   }
  #error401 .errPage-container {
    padding-top: 10%;
    width: 900px;
    margin: 0 auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      height: 50px;
      width:150px;
      margin-bottom: 40px;
    }
    .pan-back-btn:hover{
        background: #ff8489;
        color:#000;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
    }
    .text-jumbo {
      font-size: 28px;
      font-weight: 700;
      color: #FF4949;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .list-unstyled {
      font-size: 20px;
      line-height: 50px;
      color: #000;
      font-weight: 900;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
