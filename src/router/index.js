// 配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/pages/home'
import login from '@/pages/login'
import register from '@/pages/register'
import search from '@/pages/search'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/search',
      component: search
    },
    // 项目重定向
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
