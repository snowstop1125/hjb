<template>
  <div class="cart clearfix">
    <left-main></left-main>
    <section class="right-main">
      <head-main :head-title="headTitle" category="true"></head-main>
      <h1>购物车</h1>
    </section>
  </div>
</template>

<script>
    import leftMain from '../components/left-main'
    import headMain from '../components/head'
export default {
  name: 'cart',
    components: { leftMain, headMain },
  data () {
    return {
        headTitle: '购物车'
    }
  }
}
</script>

