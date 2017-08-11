import Vue from 'vue'
import Router from 'vue-router'
import index1 from '@/views/index1'
import cart from '@/views/cart'
import search from '@/views/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页-有目的地',
      component: index1
    },
      {
          path: '/cart',
          name: '购物车页',
          component: cart
      },
      {
          path: '/search',
          name: '搜索页',
          component: search
      }
  ]
})
