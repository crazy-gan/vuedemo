// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引用公共css文件
import publicCss from '@/public.css'
Vue.use(publicCss)

//引入animate。css
import 'animate.css';  

//引入jquery
import $ from 'jquery/dist/jquery.js';

//引入bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
//引入的是router目录，会默认识别里面的index。js文件（不能是其他名字）
import router from './router'
//引入并使用vue-resource网络请求模块
import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入并使用vue-wechat-title插件
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

//引入矢量图标
import './assets/Iconfont/css/font-awesome.css'


Vue.config.productionTip = false
//项目入口文件
/* eslint-disable no-new */
new Vue({
  el: '#app',//挂载点
  router,
  components: { App },//根组件
  template: '<App/>'//组件模板
})
