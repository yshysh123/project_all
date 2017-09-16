import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body/body'
import login from '@/components/login/login'
import jianshu from '@/components/jianshu/jianshu'
import error401 from '@/components/error/401.vue'
import error404 from '@/components/error/404.vue'
import excel from '@/components/excel/excel.vue'
import talk from '@/components/talk/talk.vue'
import calendar from '@/components/calendar/calendar'
import chartmain from '@/components/charts/chartmain'
import mapkqzl from '@/view/charts/mapkqzl'
import chartpie from '@/view/charts/chartpie'
import chartline from '@/view/charts/chartline'
import chartmove from '@/view/charts/chartmove'
import chartkey from '@/view/charts/chartkey'
import mapworld from '@/view/charts/mapworld'
import tab from '@/view/example/tab/tab'
import table from '@/view/example/table/table'
import photo from '@/view/example/photo/photo'
import photochange from '@/view/example/photo/photochange'
import blueimp from '@/view/example/photo/blueimp'
import todolist from '@/view/example/todolist/todolist'
import send from '@/view/example/send/send'
import ball3d from '@/view/example/ball3d/ball3d'
import comtitle from '@/components/component/comtitle/comtitle'
import headerimg from '@/components/component/headerimg/headerimg'
import css3 from '@/components/component/css3/css3'
import bmap from '@/components/component/bmap/bmap'
import countTo from '@/components/component/countTo/countTo'
import textedit from '@/components/component/textedit/textedit'
import markdown from '@/components/component/markdown/markdown'
import ppt from '@/components/component/ppt/ppt'
import tabledrag from '@/components/component/tabledrag/tabledrag'
import dropzone from '@/components/component/dropzone/dropzone'
import videoplay from '@/components/component/videoplay/videoplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/body',
      name: 'body',
      component: body
    },
    {
      path: '/jianshu',
      name: 'jianshu',
      component: jianshu
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/chartmain',
      name: 'chartmain',
      component: chartmain
    },
    {
      path: '/mapkqzl',
      name: 'mapkqzl',
      component: mapkqzl
    },
    {
      path: '/chartkey',
      name: 'chartkey',
      component: chartkey
    },
    {
      path: '/chartline',
      name: 'chartline',
      component: chartline
    },
    {
      path: '/chartpie',
      name: 'chartpie',
      component: chartpie
    },
    {
      path: '/mapworld',
      name: 'mapworld',
      component: mapworld
    },
    {
      path: '/chartmove',
      name: 'chartmove',
      component: chartmove
    },
    {
      path: '/excel',
      name: 'excel',
      component: excel
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk
    },
    {
      path: '/error401',
      name: 'error401',
      component: error401
    },
    {
      path: '/error404',
      name: 'error404',
      component: error404
    },
    {
      path: '/组件/介绍',
      name: 'comtitle',
      component: comtitle
    },
    {
      path: '/组件/headerimg',
      name: 'headerimg',
      component: headerimg
    },
    {
      path: '/组件/markdown',
      name: 'markdown',
      component: markdown
    },
    {
      path: '/组件/幻灯片',
      name: 'ppt',
      component: ppt
    },
    {
      path: '/组件/百度地图',
      name: 'bmap',
      component: bmap
    },
    {
      path: '/组件/dropzone',
      name: 'dropzone',
      component: dropzone
    },
    {
      path: '/组件/textedit',
      name: 'textedit',
      component: textedit
    },
    {
      path: '/组件/videoplay',
      name: 'videoplay',
      component: videoplay
    },
    {
      path: '/组件/countTo',
      name: 'countTo',
      component: countTo
    },
    {
      path: '/组件/tabledrag',
      name: 'tabledrag',
      component: tabledrag
    },
    {
      path: '/组件/CSS3小动画',
      name: 'css3',
      component: css3
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/ball3d',
      name: 'ball3d',
      component: ball3d
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/相册/基本图库',
      name: 'photo',
      component: photo
    },
    {
      path: '/相册/图片切换',
      name: 'photochange',
      component: photochange
    },
    {
      path: '/相册/瀑布流',
      name: 'blueimp',
      component: blueimp
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/sendtie',
      name: 'send',
      component: send
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    }
  ]
})
