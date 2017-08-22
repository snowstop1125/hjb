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
              <button class="btnToBuy" @click="dialogPay=true">立即购买</button>
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
    <!--扫码支付-->
    <transition name="fade">
      <div class="dialog_wrap" v-if="dialogPay">
        <div class="dialog_box">
          <div class="title">
            结算和配送说明
            <i class="close" @click="dialogPay=false">×</i>
          </div>
          <div class="content">
            <div class="add-commentQr toPay">
              <h3><b>扫码支付</b></h3>
              <div class="qrPic">
                <img src="https://qr.api.cli.im/qr?data=%25E5%2580%2599%25E6%259C%25BA%25E5%25AE%259D&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=e7cd54180fccdcdb599580bca9329e82" />
                <p>5分钟内扫码有效</p>
              </div>
            </div>
            <div class="dialog-item">
              <h3>流程说明</h3>
              <ul class="clearfix">
                <li>
                  <div>
                    <img src="https://qr.api.cli.im/qr?data=%25E5%2580%2599%25E6%259C%25BA%25E5%25AE%259D&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=e7cd54180fccdcdb599580bca9329e82" />
                  </div>
                  <p>扫码付款</p>
                </li>
                <li class="r"></li>
                <li>
                  <div>
                    <img src="https://qr.api.cli.im/qr?data=%25E5%2580%2599%25E6%259C%25BA%25E5%25AE%259D&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=e7cd54180fccdcdb599580bca9329e82" />
                  </div>
                  <p>确认配送信息</p>
                </li>
                <li class="r"></li>
                <li>
                  <div>
                    <img src="https://qr.api.cli.im/qr?data=%25E5%2580%2599%25E6%259C%25BA%25E5%25AE%259D&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=e7cd54180fccdcdb599580bca9329e82" />
                  </div>
                  <p>短信发送</p>
                </li>
                <li class="r"></li>
                <li>
                  <div>
                    <img src="https://qr.api.cli.im/qr?data=%25E5%2580%2599%25E6%259C%25BA%25E5%25AE%259D&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=e7cd54180fccdcdb599580bca9329e82" />
                  </div>
                  <p>等待配送</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </transition>
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
                dialogPay: false,
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

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>