<template>
  <div class="header">
    <p>
      <router-link to="/">主页</router-link>
      <router-link to="">{{headTitle}}</router-link>
    </p>
    <button v-if="category" @click="showCategoryBox">分类</button>
    <div class="cover" v-if="isShow" @click="showCategoryBox"></div>
    <transition name="fade">
      <div v-if="category" class="category-box" :class="{show:isShow}">
        <h3>分类列表</h3>
        <ol class="clearfix">
          <li v-for="item in categoryList">
            <router-link to="/gallery">{{item.name}}</router-link>
          </li>
        </ol>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                isShow:false,
                categoryList:[
                    {name:'全部'},
                    { name: '热门推荐' },
                    { name: '热门推荐' },
                    { name: '热门推荐' },
                    { name: '热门推荐' },
                    { name: '热门推荐' }, { name: '热门推荐' }, { name: '热门推荐' }, { name: '热门推荐' }, { name: '热门推荐' },
                ]
            }
        },
        props: ['headTitle', 'category'],
        methods: {
            showCategoryBox: function () {
                this.isShow=!this.isShow;
            }
        }
    }
</script>

