<template>
  <div class="app clearfix">
    <div class="right-main">
      <!--有目的地-->
      <section class="r_content" v-if="hasDestination">
        <div class="startMain">
          <div class="focus">
            <img src="http://img.zcool.cn/community/01f8875548f19d0000019ae9dee809.jpg" />
            <p>{{startAirport}}商业</p>
          </div>
          <ul class="category">
            <li v-for="item in categoryItem">
              <router-link to="/gallery">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="endMain">
          <div class="focus">
            <img src="http://img.zcool.cn/community/01f8875548f19d0000019ae9dee809.jpg" />
            <p>{{endAirport}}商业</p>

          </div>
          <ul class="category">
            <li v-for="item in categoryItem">
              <router-link to="/gallery">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </section>
      <!--没有目的地-->
      <section class="r_content" v-if="!hasDestination">
        <div class="startMain">
          <div class="focus">
            <img src="http://img.zcool.cn/community/01f8875548f19d0000019ae9dee809.jpg" />
            <p>{{startAirport}}商业</p>
          </div>
          <ul class="category">
            <li v-for="item in categoryItem">
              <router-link to="/gallery">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
    export default {
        data () {
            return {
                hasDestination:true,
                startAirport: '成都机场',
                endAirport: '广州机场',
                categoryItem: [
                    { name: '热门推荐' },
                    { name: '商家列表' },
                    { name: '机场餐饮' },
                    { name: '机场购物' },
                    { name: '机场休闲' },
                    { name: '全部商品' },
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
