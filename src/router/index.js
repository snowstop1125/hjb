import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import home from '../views/home'
import leftMain from '../components/left-main'
import cart from '../views/cart'
const search = r => require.ensure([], () => r(require('../views/search')), 'search')
const gallery = r => require.ensure([], () => r(require('../views/gallery')), 'gallery')
const product = r => require.ensure([], () => r(require('../views/product')), 'product')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: home,
                leftMain: leftMain
            },
        },
        {
            path: '/home/',
            redirect: '/'
        },
        {
            path: '/cart/',
            name: '购物车页',
            components: {
                default: cart,
                leftMain: leftMain
            },
        },
        {
            path: '/gallery/',
            name: '列表页',
            components: {
                default: gallery,
                leftMain: leftMain
            },
        },
        {
            path: '/search/',
            name: '搜索页',
            components: {
                default: search,
                leftMain: leftMain
            },
        },
        {
            path: '/product/',
            name: '商品详情页',
            components: {
                default: product,
                leftMain: leftMain
            },
        }


    ]
})
