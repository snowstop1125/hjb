<template>
  <div id="app">
    <left-main></left-main>
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftMain from './components/left-main'


export default {
  name: 'app',
  components: { LeftMain }
}
</script>
<style lang="scss">
  @import './css/style';
</style>

