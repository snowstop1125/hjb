<template>
  <div class="LeftMain">
    <div class="title">候机宝</div>
    <div class="leftBtn">
      <router-link to="/cart">购物车</router-link>
      <router-link class="search_btn" to="/search">搜索（商家/商品）</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
