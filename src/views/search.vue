<template>
  <div class="search">
    <header-main></header-main>
    <h1>搜索页</h1>

  </div>
</template>

<script>
import headerMain from '../components/header'

export default {
  name: 'search',
  components: { headerMain },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

