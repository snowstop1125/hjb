<template>
  <div class="app clearfix">
    <left-main></left-main>
    <section class="right-main">
      <h1>没有目的地</h1>
      <div class="startMain">
        <div class="focus">

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
    components: { leftMain },
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
