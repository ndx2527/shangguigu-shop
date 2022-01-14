import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'

Vue.component(TypeNav.name, TypeNav)

// 测试
import { reqCategoryList } from '@/api'
reqCategoryList();


// 引入路由
import router from '@/router'

new Vue({
  render: h => h(App),
  router, // 使用路由
}).$mount('#app')
