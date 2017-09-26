// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import mock from './mork/mork'
import Vuex from 'vuex'
import store from './store/store'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading: require('./assets/loading.gif'),//这个是加载的loading过渡效果
	attempt: 1,
	try: 2 // 这个是加载图片数量
})
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
