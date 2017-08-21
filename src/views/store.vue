<template>
  <div class="store clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
    <div class="right-main">
      <head-main :head-title="headTitle"></head-main>
      <section class="r_content hasHead storeHome">
        <div class="focus">
          <div class="swiper-container3">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <router-link to="">
                  <img src="http://img.zcool.cn/community/focus/46c6599a42410000014891098307.jpg@1380w"/>
                </router-link>
              </li>
              <li class="swiper-slide">
                <router-link to="">
                  <img src="http://img.zcool.cn/community/focus/46c6599a42410000014891098307.jpg@1380w" />
                </router-link>
              </li>
            </ul>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="store-sort">
            <ul class="clearfix">
              <li><router-link to="">商品列表</router-link></li>
              <li>
                <router-link to="">优惠中心（年中大促）</router-link>
              </li>
              <li>
                <router-link to="">店铺上新</router-link>
              </li>
              <li>
                <router-link to="">轻奢主义</router-link>
              </li>
            </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
    import leftMain from '../components/left-main'
    import headMain from '../components/head'
    import Swiper from '../../static/js/swiper.min.js'

    export default {
        name: 'store',
        components: { leftMain, headMain },
        data () {
            return {
                airport: '广州机场',
                headTitle: '日上免税店'
            }
        },
        mounted(){
            var myswiper = new Swiper('.swiper-container3', {
                autoplay: 2000,
                pagination: '.swiper-pagination',
                loop: true,
                paginationClickable: true,
                paginationBulletRender: function (swiper, index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            })
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

