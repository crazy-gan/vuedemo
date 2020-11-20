//引入路由模块并使用
import Vue from 'vue'
import Router from 'vue-router'
//告诉vue使用vue-router
Vue.use(Router);
//创建路由实例
const Home = require('../components/Home.vue');
const About = require('../components/About.vue');
const Tab = require('../components/Tab.vue');
const GoodInfo = require('../components/goodInfo.vue');

const Jifen = require('../components/childRouter/jifenMenger.vue');
const Card = require('../components/childRouter/memberCardSet.vue');
const Menger = require('../components/childRouter/memberMenger.vue');
const Yxiao = require('../components/childRouter/memberYx.vue');
const router = new Router({
    // mode:'history',
    routes: [
        {
            path:'/',
            redirect:'/home',
            meta:{title:'淘宝'}
        },
        {name:'home',path:'/home',components: Home,meta:{title:'淘宝'}},
        //二级路由，选项卡效果
        {
            name:'about',
            path:'/about',
            components: About,
            meta:{title:'注册淘宝'},
            children:[
                {
                    path:'Jifen',
                    components:Jifen,
                },
                {
                    path:'Card',
                    components:Card,
                },
                {
                    path:'Menger',
                    components:Menger,
                },
                {
                    path:'Yxiao',
                    components:Yxiao,
                },
            ]
        },
        {name:'tab',path:'/tab',components: Tab,meta:{title:'登录淘宝'}},
        {name:'goodInfo',path:'/tab',components: GoodInfo,meta:{title:'商品详情'}},
        {
            path:'*',
            redirect:'/home',
            meta:{title:'淘宝'}
        }
    ]
})
export default router
