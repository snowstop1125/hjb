<template>
  <div class="product clearfix">
    <ul class="pt-head">
      <li :class='{act: changeShowType =="ptPic"}' @click="changeShowType='ptPic'"><a href="javascript:;">商品</a></li>
      <li :class='{act: changeShowType =="ptDetail"}' @click="changeShowType='ptDetail'"><a href="javascript:;">详情</a></li>
      <li :class='{act: changeShowType =="ptComment"}' @click="changeShowType='ptComment'"><a href="javascript:;">评论</a></li>
    </ul>
    <div class="right-main" style="overflow-y: visible">
      <section v-show="changeShowType =='ptPic'" class="r_content hasHead clearfix pt-main">
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
        <div>
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
                <tr class="clearfix" v-for="item in commentList">
                  <td width="300">
                    <div class="member clearfix">
                      <div class="avatar">
                        <img :src="item.avatarSrc">
                      </div>
                      <div class="info">
                        <div class="username">{{item.username}}</div>
                        <div class="level">{{item.level}}</div>
                      </div>
                    </div>
                  </td>
                  <td width="900">
                    <div class="main">
                      <p>{{item.commentTxt}}</p>
                      <p class="time">时间：{{item.commentTime}}</p>
                    </div>
                  </td>
                  <td >
                    <ul class="pic clearfix">
                      <li v-for="img in item.commentPic">
                        <img :src="img" />
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

          </section>
        </div>

      </div>

    </div>
    <transition name="fade">
      <div class="dialog_wrap" v-if="diaLogComment">
        <div class="dialog_box">
          <div class="add-commentQr">
            <h3><b>扫码评价</b></h3>
            <div class="qrPic">
              <img src="https://qr.api.cli.im/qr?data=%25E5%2580%2599%25E6%259C%25BA%25E5%25AE%259D&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=e7cd54180fccdcdb599580bca9329e82"/>
            </div>
            <a class="close" href="javascript:;" @click="diaLogComment=false">×</a>
          </div>

        </div>

      </div>
    </transition>



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
                diaLogComment:false,
                commentList:[
                    {
                        avatarSrc:'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username:'候机宝',
                        level:'V1',
                        commentTxt:'完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime:'2017-06-30 12:30',
                        commentPic:[
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg',
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    },
                    {
                        avatarSrc: 'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username: '候机宝',
                        level: 'V1',
                        commentTxt: '完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime: '2017-06-30 12:30',
                        commentPic: [
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    },
                    {
                        avatarSrc: 'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username: '候机宝',
                        level: 'V1',
                        commentTxt: '完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime: '2017-06-30 12:30',
                        commentPic: [
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    },
                    {
                        avatarSrc: 'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username: '候机宝',
                        level: 'V1',
                        commentTxt: '完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime: '2017-06-30 12:30',
                        commentPic: [
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    },
                    {
                        avatarSrc: 'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username: '候机宝',
                        level: 'V1',
                        commentTxt: '完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime: '2017-06-30 12:30',
                        commentPic: [
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    },
                    {
                        avatarSrc: 'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username: '候机宝',
                        level: 'V1',
                        commentTxt: '完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime: '2017-06-30 12:30',
                        commentPic: [
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    },
                    {
                        avatarSrc: 'http://fskb2c.wxt.com/public/app/b2c/statics/sprites/default-avatar.png',
                        username: '候机宝',
                        level: 'V1',
                        commentTxt: '完美兼容，没有出现不匹配的没有出现不匹配的没有出现不匹配的完美兼容，没有出现不匹配的没有出现不匹配',
                        commentTime: '2017-06-30 12:30',
                        commentPic: [
                            'https://img.alicdn.com/imgextra/i4/619123122/TB2RspapXXXXXXYXFXXXXXXXXXX-619123122.jpg'
                        ]
                    }
                ]
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transfrom: scale(0);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

