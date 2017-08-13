import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import index1 from '../views/index1'
import index2 from '../views/index2'
import cart from '../views/cart'
// import search from '@/views/search'
const search = r => require.ensure([], () => r(require('../views/search')), 'search')
const gallery = r => require.ensure([], () => r(require('../views/gallery')), 'gallery')
const product = r => require.ensure([], () => r(require('../views/product')), 'product')

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      component: index1,//顶层路由，对应index.html
      children: [
          {
              path: '',
              redirect: '/index1'
          },
      ]
    },
      {
          path: '/index1',
          component: index1
      },
      {
          path: '/index2',
          component: index2
      },
      {
          path: '/cart',
          name: '购物车页',
          component: cart
      },
      {
          path: '/gallery',
          name: '列表页',
          component: gallery
      },
      {
          path: '/search',
          name: '搜索页',
          component: search
      },
    {
      path: '/product',
      name: '商品详情页',
      component: product
    }
  ]
})
