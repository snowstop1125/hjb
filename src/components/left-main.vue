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
      <div class="store-info" v-if="storeInfo">
        <router-link class="focus" to="/store/">
          <img src="http://p0.meituan.net/dpdeal/067e4faaa54d7fb745883fe1d061b84b85966.jpg%40700w_700h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"/>
          <p>日上免税店</p>
        </router-link>
        <div class="store-orther">
          <div class="item clearfix">
            <span class="label">服务支持：</span>
            <p style="margin-top: -17px;"><b>送至登机口</b><b>自提点自提</b><b>到店自提</b><b>货到付款</b></p>
          </div>
          <div class="item clearfix">
            <span class="label">所在区域：</span>
            <p>国际出发区域</p>
          </div>
          <div class="item clearfix">
            <span class="label">服务电话：</span>
            <p>0510-8936 2564</p>
          </div>
          <div class="item clearfix">
            <span class="label">详细地址：</span>
            <p>东三指廊，B112登机口附进东 三指廊，B112登机口附进附 进</p>
          </div>
        </div>
        <div class="store-map">
          <router-link to="">地图导航</router-link>
        </div>
      </div>
    </section>
    <div class="leftBtn">
      <router-link to="/cart"><span @click="dialogOrder=false">购物车</span></router-link>
      <router-link class="search_btn" to="/search"><span @click="dialogOrder=false">搜索（商家/商品）</span></router-link>
    </div>
    <!--订单确认-->
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
    import Swiper from '../../static/js/swiper.min.js'

    export default {
        props: ['leftTitle', 'adPic', 'category', 'ptInfo', 'storeInfo'],
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
