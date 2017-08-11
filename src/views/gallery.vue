<template>
  <div class="search clearfix">
    <left-main></left-main>
    <section class="right-main">
      <head-main :head-title="headTitle"></head-main>
      <h1>列表页</h1>
    </section>


  </div>
</template>

<script>
   import leftMain from '../components/left-main'
   import headMain from '../components/head'

export default {
  name: 'search',
    components: { leftMain, headMain },
  data () {
    return {
       headTitle: '商品列表页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

