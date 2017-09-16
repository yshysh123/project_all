import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'animate.css/animate.min.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import BaiduMap from 'vue-baidu-map'
import mock from './mock/mock'
import axios from 'axios'

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(mavonEditor)

Vue.use(BaiduMap, {
  ak: 'NicyBAx5u9qjwLoBYVSKCzHFEWRTBj1B'
})
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
})
