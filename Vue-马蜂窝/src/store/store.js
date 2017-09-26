import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login:false,
        loginnum:0,
        loginmessage:[
        	{
        		name:'小管管',
        		passname:'guanguan',
        		password:'123456',
        		sex:'男',
        		brith:'1991-05-03',
        		phone:13888888888,
        		pic:require('./哈哈.gif'),
        		hobby:['旅游','游泳','写代码'],
        		place:['泰国','美国'],
        	}
        ]
    }
})

export default store
