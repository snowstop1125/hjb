<template>
  <div class="app clearfix">
    <left-main></left-main>
    <section class="right-main">
      <h1>有目的地</h1>
      <div class="startMain">
        <div class="focus">
          <router-link  to="/gallery">去列表页</router-link>
        </div>
      </div>
      <div class="endMain">

      </div>
    </section>

  </div>
</template>

<script>
    import leftMain from '../components/left-main'
export default {
  name: 'app',
    components: { leftMain},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
