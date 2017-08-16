<template>
  <div class="cart clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
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
                airport: '广州机场',
                headTitle: '购物车'
            }
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

