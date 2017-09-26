import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body/body'
import Article from '@/components/Article.vue'
import mdd from '@/components/mdd/mdd'
import together from '@/components/together/together.vue'
import togethercon from '@/components/together/togethercon'
import raiders from '@/components/raiders/raiders'
import raiderscon from '@/components/raiders/raiderscon'
import wenda from '@/components/wenda/wenda'
import wendacon from '@/components/wenda/wendacon'
import hotel from '@/components/hotel/hotel'
import plane from '@/components/plane/plane'
import shopping from '@/components/shopping/shopping'
import play from '@/components/play/play'
import login from '@/components/login/login'
import zhuce from '@/components/zhuce/zhuce'
import planehotel from '@/components/shoppingcon/planehotel'
import banzizhu from '@/components/shoppingcon/banzizhu'
import dangditiyan from '@/components/shoppingcon/dangditiyan'
import duoriyou from '@/components/shoppingcon/duoriyou'
import jiaotongka from '@/components/shoppingcon/jiaotongka'
import jiesong from '@/components/shoppingcon/jiesong'
import jingdianmenpiao from '@/components/shoppingcon/jingdianmenpiao'
import jiudiantaocan from '@/components/shoppingcon/jiudiantaocan'
import phonecard from '@/components/shoppingcon/phonecard'
import wifi from '@/components/shoppingcon/wifi'
import yiriyou from '@/components/shoppingcon/yiriyou'
import youlun from '@/components/shoppingcon/youlun'
import city from '@/components/city/city'
import rili from '@/components/rili/rili'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: body
    },
    {
      path:'/login',
      component:login,
    },
    {
      path:'/zhuce',
      component:zhuce,
    },
    {
      path:'/article/:id',
      component:Article,
    },
    {
      path:'/together/:id',
      component:togethercon,
    },
    {
      path:'/raiders/:id',
      component:raiderscon,
    },
    {
      path:'/qusetion/:id',
      component:wendacon,
    },
    {
      path:'/mdd/:id',
      component:city,
    },
    {
      path:'/raiders',
      component:mdd,
    },
    {
      path:'/shopping',
      component:shopping,
    },
    {
      path:'/hotel',
      component:hotel,
    },
    {
      path:'/plane',
      component:plane,
    },
    {
      path:'/go',
      component:together,
    },
    {
      path:'/travels',
      component:raiders,
    },
    {
      path:'/master',
      component:wenda,
    },
    {
      path:'/play',
      component:play,
    },
    {
      path:'/planehotel',
      component:planehotel,
    },
    {
      path:'/semiselfhelp',
      component:banzizhu,
    },
    {
      path:'/Cruise',
      component:youlun,
    },
    {
      path:'/onedayplay',
      component:yiriyou,
    },
    {
      path:'/moredayplay',
      component:duoriyou,
    },
    {
      path:'/HotelCombo',
      component:jiudiantaocan,
    },
    {
      path:'/Scenicspotticket',
      component:jingdianmenpiao,
    },
    {
      path:'/Localexperience',
      component:dangditiyan,
    },
    {
      path:'/WIFI',
      component:wifi,
    },
    {
      path:'/Transfer',
      component:jiesong,
    },
    {
      path:'/PHONECARD',
      component:phonecard,
    },
    {
      path:'/Transportationcard',
      component:jiaotongka,
    }
    ,
    {
      path:'/rili/:id',
      component:rili,
    }
  ]
})
