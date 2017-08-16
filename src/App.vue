<template>
  <div id="app">
    <router-view name="leftMain">

    </router-view>

    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
    export default{
        data: function () {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                console.log(this.transitionName)
            }
        }
    }
</script>

<style lang="stylus">
  @import './css/mixin.styl';
  @import './css/style.styl';
  @import './assets/css/swiper.min.css';
</style>

