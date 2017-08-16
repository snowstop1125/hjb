<template>
  <div class="product clearfix">
    <ul class="pt-head">
      <li :class='{act: changeShowType =="ptPic"}' @click="changeShowType='ptPic'"><a href="javascript:;">商品</a></li>
      <li :class='{act: changeShowType =="ptDetail"}' @click="changeShowType='ptDetail'"><a href="javascript:;">详情</a></li>
      <li :class='{act: changeShowType =="ptComment"}' @click="changeShowType='ptComment'"><a href="javascript:;">评论</a></li>
    </ul>
    <div class="right-main" style="overflow-y: visible">
      <section v-show="changeShowType =='ptPic'" class="r_content hasHead clearfix" style="padding:120px 0 0;">
        <div class="pt-mainImg">
          <img :src="ptMainImg" />
        </div>
        <div class="pt-smImg" id="ptSmImgItem">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(img,index) in ptSmImg" @click="changeImg($event,index)" :class="{act:clickIdx==index}">
              <img :src="img.src" />
              <span></span>
            </li>
          </ul>
        </div>
      </section>
      <div id="ptDetail">
        <section v-show="changeShowType =='ptDetail'" class="r_content hasHead wrapper">
          <div>
            <img src="https://img.alicdn.com/imgextra/i3/619123122/TB2gydepXXXXXcKXpXXXXXXXXXX-619123122.jpg" />
            <img src="https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg" />
          </div>
        </section>
        <section v-show="changeShowType =='ptComment'" class="r_content hasHead ">
          <div class="commentMain">
            <div class="head">
              <span class="total-point">好评度：<i>{{totalPoint}}</i></span>
              <span :class="{act:choseComment==0}" @click="choseComment=0">全部评价：78</span>
              <span :class="{act:choseComment==1}" @click="choseComment=1">好评：58</span>
              <span :class="{act:choseComment==2}" @click="choseComment=2">中评：18</span>
              <span :class="{act:choseComment==3}" @click="choseComment=3">差评：58</span>
              <button @click="addcomment">添加评论</button>
            </div>
            <table class="list">
              <tr class="clearfix">
                <td width="300">
                  <div class="member clearfix">
                    <div class="avatar">
                      <img src="http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png" alt="">
                    </div>
                    <div class="info">
                      <div class="username">
                        Yuki
                      </div>
                    </div>
                  </div>
                </td>
                <td width="700">
                  <div class="main">
                    <p>完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，
                      没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的</p>
                    <p class="time">时间：2017-06-30 12:30</p>
                  </div>
                </td>
                <td width="818" align="right">
                  <ul class="pic">
                    <li>
                      <img src="https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg" />
                    </li>
                  </ul>

                </td>

              </tr>
            </table>
          </div>

        </section>
      </div>

    </div>
    <div class="diaLogComment" v-if="diaLogComment">
      <div class="add-commentQr">

      </div>

      <div class="mask" @click="addcomment"></div>
    </div>

  </div>
</template>

<script>
    import leftMain from '../components/left-main'
    import Swiper from '../../static/js/swiper.min.js'
    import BScroll from 'better-scroll'

    export default {
        name: 'product',
        components: { leftMain, },
        data () {
            return {
                airport: '广州机场',
                changeShowType: 'ptPic',//主图、详情、评论切换
                isScroll: null,//详情、评论滚动
                clickIdx: 0,//主图小图切换
                ptMainImg: null,//主图图片
                ptSmImg: [
                    { src: 'https://gd1.alicdn.com/imgextra/i3/32342889/TB224JharlmpuFjSZFlXXbdQXXa_!!32342889.jpg' },
                    { src: 'https://gd4.alicdn.com/imgextra/i4/2926655891/TB2chEyspXXXXX3XpXXXXXXXXXX_!!2926655891.jpg' },
                    { src: 'https://gd4.alicdn.com/imgextra/i2/TB1ix.OJpXXXXbIXpXXPXXI8pXX_022545.jpg' },
                    { src: 'https://gd1.alicdn.com/imgextra/i3/32342889/TB224JharlmpuFjSZFlXXbdQXXa_!!32342889.jpg' },
                ],//小图图片
                choseComment: 0,//评论类型切换
                totalPoint: '74%',
                diaLogComment:false
            }
        },

        watch: {
            //商品、详情、评论切换状态
            changeShowType: function (value) {
                if (value !== 'ptPic') {

                    this.$nextTick(() => {
                        this.isScroll = new BScroll('#ptDetail', {
                            probeType: 3,
                            deceleration: 0.001,
                            bounce: true,
                            swipeTime: 2000,
                        });
                    })
                }
            }
        },
        mounted(){
            var myswiper = new Swiper('#ptSmImgItem', {
                autoplay: false,
                loop: false,
                direction: 'vertical',
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 40,
            })
            this.ptMainImg = this.ptSmImg[0].src;
        },
        methods: {
            changeImg(el, idx){
                let thisLi = event.currentTarget
                let img = thisLi.children[0]
                let src = img.getAttribute("src")
                this.ptMainImg = src
                this.clickIdx = idx
            },
            addcomment(){
                console.log(2)
                this.diaLogComment=!this.diaLogComment
            }
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

<style>
  /*.fade-choose-enter-active, .fade-choose-leave-active {*/
  /*transition: opacity .5s;*/
  /*}*/
  /*.fade-choose-leave, .fade-choose-leave-active {*/
  /*display: none;*/
  /*}*/
  /*.fade-choose-enter, .fade-choose-leave-active {*/
  /*opacity: 0;*/
  /*}*/
</style>

