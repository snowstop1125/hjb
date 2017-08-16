<template>
  <div class="LeftMain">
    <div class="title">候机宝{{leftTitle}}</div>
    <section class="main">
      <!--广告图-->
      <div class="adPic" v-if="adPic || 1">
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
      <div class="pt-info">

      </div>
      <!--商家信息-->
      <div class="store-info">

      </div>

    </section>
    <div class="leftBtn">
      <router-link to="/cart">购物车</router-link>
      <router-link class="search_btn" to="/search">搜索（商家/商品）</router-link>
    </div>
  </div>
</template>

<script>
    import Swiper from '../../static/js/swiper.min.js'

    export default {
        props: ['leftTitle', 'adPic', 'category'],
        data () {
            return {
                adPics: [
                    {
                        imgSrc: 'http://img.zcool.cn/community/0141d65961e84da8012193a3313e18.jpg',
                        imgLink:'/gallery'
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
                ]
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

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
