import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about'
import home from '../components/home'
import news from '../components/news'
import mag from '../components/mag'
import messageDetail from '../components/message_detail'

//声明使用插件
Vue.use(VueRouter)

//创建路由器 配置路由 
export default new VueRouter({
	linkActiveClass:"active", //可以自定义样式
	mode:"history", //路径不带# 号
	routes:[    ////!!!! 注意这里 是 routes  不是 routers  没有 'r'
      { 
      	path:'/about',
      	component:about

      },
      {
      	path:'/home',
      	component:home,
      	children:[
          {
          	path:'/home/news',
          	component:news
          },
          {
          	path:'/home/mag',
          	component:mag,
          	children:[
               {
               	path:'message_detail/:id',
               	component:messageDetail
               }
          	]
          },
          // { 
          // 	path:'news', //这个写法和上面的等同
          // 	component:news
          // }
      	]
      },
      {
        path:'/',
        redirect:'/about'
      }
	]
})