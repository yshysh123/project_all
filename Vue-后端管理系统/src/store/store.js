import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        author: 'Wise Wrong',
        src: require('./admin.jpg'),
        srcarr: {
            name: ['小脏脏', '小管管', '小秦秦'],
            pic: [require('./admin.jpg'), require('./admin2.jpg'), require('./admin3.jpg')]
        },
        dataMessage: [
            '今天天气真不错',
            '明天要下雨了，赶紧收衣服吧',
            '好累啊'
        ],
        datatop: [],
        login:false,
        logintrue:null,
        loginmessage:[
        	{
        		name:'小管管',
        		passname:'389636851@qq.com',
        		password:'123456',
        		login:'admin',
        		sex:'男',
        		brith:'1991-05-03',
        		phone:13888888888,
        		pic:require('./admin.jpg'),
        	},
        	{
        		name:'小脏脏',
        		passname:'2223282563@qq.com',
        		password:'123456',
        		login:'程序猿',
        		sex:'男',
        		brith:'1991-05-03',
        		phone:13888888888,
        		pic:require('./admin2.jpg'),
        	},
        	{
        		name:'小秦秦',
        		passname:'88888888@qq.com',
        		password:'123456',
        		login:'游客',
        		sex:'男',
        		brith:'1989-05-03',
        		phone:13888888888,
        		pic:require('./admin3.jpg'),
        	}
        ]
    }
})

export default store
