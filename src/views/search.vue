<template>
  <div class="search clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
    <section class="right-main">
      <head-main :head-title="headTitle"></head-main>

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
                airport: '广州机场',
                headTitle: '搜索'
            }
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

