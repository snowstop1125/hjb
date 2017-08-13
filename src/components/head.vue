<template>
  <div class="header">
    <p>
      <router-link to="/">主页</router-link>
      <router-link to="">{{headTitle}}</router-link>
    </p>
    <button v-if="category">分类</button>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App'
    }
  },
    props: ['headTitle','category'],
}
</script>

