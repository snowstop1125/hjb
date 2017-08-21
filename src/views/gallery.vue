<template>
  <div class="search clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
    <head-main :head-title="headTitle" category="true"></head-main>
    <div class="right-main" id="galleryWrap">
      <section class="r_content hasHead">
        <!--商品列表-->
        <ul class="galleryList clearfix" v-if="productType">
          <li v-for="item in productList">
            <div class="focus">
              <router-link to="/product">
                <img :src="item.imgSrc" />
                <p><span>{{item.ptName}}</span></p>
              </router-link>
            </div>
            <div class="ptBtn">
              <button class="btnToCart">加入购物车</button>
              <button class="btnToBuy">立即购买</button>
            </div>
          </li>
        </ul>
        <!--商家列表-->
        <ul class="galleryList clearfix storeList" v-if="!productType">
          <li v-for="item in productList">
            <div class="focus">
              <router-link to="/store">
                <img :src="item.imgSrc" />
                <p>{{item.ptName}}</p>
              </router-link>
            </div>
            <div class="ptBtn">
              <span class="area">国内区</span>
              <span class="distance">距离<br/>233米</span>
            </div>
          </li>
        </ul>
      </section>

    </div>

  </div>
</template>

<script>
    import leftMain from '../components/left-main'
    import headMain from '../components/head'
    import BScroll from 'better-scroll'

    export default {
        name: 'search',
        components: { leftMain, headMain },
        data () {
            return {
                headTitle: '商家列表页',
                airport: '广州机场',
                productType:true,
                Scroll:null,
                productList: [
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '日向免税店'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                        ptName: '红烧肉'
                    }

                ],
                storeList:[

                ]
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.Scroll = new BScroll('#galleryWrap', {
                    probeType: 3,
                    deceleration: 0.001,
                    bounce: true,
                    swipeTime: 2000,
                    click: true,
                });
            })
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

