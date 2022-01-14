// 配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/pages/home'
import login from '@/pages/login'
import register from '@/pages/register'
import search from '@/pages/search'

//需要重写VueRouter.prototype原型对象身上的push|replace方法,处理缺陷
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
};


export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: home,
      meta: {
        show: true
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        show: false
      }
    },
    {
      path: '/register',
      component: register,
      meta: {
        show: false
      }
    },
    {
      path: '/search',
      name: 'search', // 填写name方便使用
      component: search,
      meta: {
        show: true
      }
    },
    // 项目重定向
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
