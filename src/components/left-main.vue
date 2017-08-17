<template>
  <div class="LeftMain">
    <div class="title">候机宝{{leftTitle}}</div>
    <section class="main">
      <!--广告图-->
      <div class="adPic" v-if="adPic">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in adPics">
              <router-link :to="item.imgLink">
                <img :src="item.imgSrc" height="100%" />
              </router-link>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!--分类，5个、6个、7个-->
      <div class="category" v-if="category">
        <ul :class=" categoryItem.length==5?'fiveItem':categoryItem.length==7?'sevenItem':'' ">
          <li v-for="item in categoryItem">
            <router-link to="/gallery">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <!--商品信息-->
      <div class="pt-info" v-if="ptInfo || 1">
        <div class="title">
          <h3>日上香水 轻奢滋味日上香滋味日味 日上香</h3>
          <p>夏日优惠，买即赠</p>
        </div>
        <div class="pt-price"><b><i>￥</i>108.00</b><span>库存：8件</span></div>
        <div class="pt-btn">
          <button class="btnToCart" @click="openChoseSpec(1)">加入购物车</button>
          <button class="btnToBuy" @click="openChoseSpec(2)">立即购买</button>
        </div>
        <div class="pt-orther">
          <div class="item clearfix">
            <span class="label">服务支持：</span>
            <p style="margin-top: -17px;"><b>送至登机口</b><b>自提点自提</b><b>到店自提</b><b>货到付款</b></p>
          </div>
          <div class="item clearfix">
            <span class="label">所在区域：</span>
            <p>国际出发区域</p>
          </div>
          <div class="item clearfix">
            <span class="label">详细地址：</span>
            <p>东三指廊，B112登机口附进东 三指廊，B112登机口附进附 进</p>
          </div>
        </div>
        <div class="pt-toStore clearfix">
          <router-link to="" class="toStore">
            日上专卖店
            <i></i>
          </router-link>
          <router-link to="" class="toMap">
            地图导航
          </router-link>
        </div>
      </div>
      <!--商家信息-->
      <div class="store-info">

      </div>
    </section>
    <div class="leftBtn">
      <router-link to="/cart">购物车</router-link>
      <router-link class="search_btn" to="/search">搜索（商家/商品）</router-link>
    </div>
    <transition name="fade">
      <div class="dialog_wrap" v-if="dialogOrder">
        <div class="dialog_box">
          <div class="title">
            订单确认
            <i class="close" @click="dialogOrder=false">×</i>
          </div>
          <div class="content">
            <div class="chose-spec">
              <div class="item clearfix" v-for="(item,index) in ptSpec">
                <div class="label">{{item.specName}}<span></span></div>
                <p :index="index">
                  <b v-for="(b,index) in item.specChose" :class="{act:item.specIdx==index}" @click="choseSpec($event,index)">
                    {{b}}
                  </b>
                </p>
              </div>
              <div class="item clearfix">
                <div class="label">数量<span></span></div>
                <p>
                  <span class="num">
                    <button class="reduce" @click="reduceBtn">-</button>
                      <input type="text" v-model="ptQuantity" />
                    <button class="plus" @click="plusBtn">+</button>
                  </span>

                </p>
              </div>
            </div>
            <div class="btn">
              <button class="chanel" @click="dialogOrder=false">取消</button>
              <button class="ok" @click="toBuy">确认</button>
            </div>

          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="dialog_wrap" v-if="dialogPay">
        <div class="dialog_box">
          <div class="title">
            结算和配送说明
            <i class="close" @click="dialogPay=false">×</i>
          </div>
          <div class="content">
            <div class="chose-spec">

            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import Swiper from '../../static/js/swiper.min.js'

    export default {
        props: ['leftTitle', 'adPic', 'category', 'ptInfo'],
        data () {
            return {
                adPics: [
                    {
                        imgSrc: 'http://img.zcool.cn/community/0141d65961e84da8012193a3313e18.jpg',
                        imgLink: '/gallery'
                    },
                    {
                        imgSrc: 'http://img.zcool.cn/community/0141d65961e84da8012193a3313e18.jpg',
                        imgLink: '/gallery'
                    },
                ],
                categoryItem: [
                    { name: '热门推荐' },
                    { name: '商家列表' },
                    { name: '热门推荐' },
                    { name: '商家列表' },
                    { name: '热门推荐' },
                    { name: '热门推荐' }
                ],
                dialogOrder: false,
                dialogPay: false,
                toBuyType: null,
                ptSpec: [
                    {
                        specName: '颜色',
                        specChose: ['红色', '白色'],
                        specIdx: null
                    },
                    {
                        specName: '配送方式',
                        specChose: ['送到登机口', '自提点自提 (国内区)', '到店自提', '快递到家'],
                        specIdx: null
                    }
                ],
                ptQuantity: 1

            }
        },
        mounted(){
//            this.lunbo()
            var myswiper = new Swiper('.swiper-container', {
                autoplay: 3000,
                pagination: '.swiper-pagination',
                loop: true
            })
        },
        methods: {
            lunbo () {
                var myswiper = new Swiper('.swiper-container', {
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    loop: true
                })
            },
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            },
            openChoseSpec(type){
                if(this.dialogPay == true){
                    return;
                }
                if (type == 1) {
                    this.toBuyType = 1
                } else if (type == 2) {
                    this.toBuyType = 2
                }
                this.dialogOrder = true;
            },
            toBuy(){
                if (this.toBuyType == 1) {
                    alert('加入购物车成功')
                    this.dialogOrder = false
                } else if (this.toBuyType == 2) {
                    this.dialogOrder = false
                    this.dialogPay = true;
                }
            },
            choseSpec(event, idx){
                let e = event.currentTarget
                let p = e.parentNode;
                let pIdx = p.getAttribute("index")
                this.ptSpec[pIdx].specIdx = idx
            },
            reduceBtn(){
                if (this.ptQuantity == 1) {
                    return
                } else {
                    this.ptQuantity--;
                }
            },
            plusBtn(){
                this.ptQuantity++;
            }

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
