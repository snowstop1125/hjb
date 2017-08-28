<template>
  <div class="search clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
    <div class="right-main">
      <head-main :head-title="headTitle"></head-main>
      <section class="r_content hasHead" style="width:1840px;">
        <div class="search-bar clearfix">
          <input type="text" placeholder="请输入要输入的内容" />
          <div class="sel">
            <select>
              <option>商品</option>
              <option>商家</option>
            </select>
            <i class="bg-sprites bg-arrow3"></i>
          </div>
          <router-link class="searchBtn bg-sprites" to="/gallery"></router-link>
        </div>
        <div class="hot-search">
          <h4>热门搜索</h4>
          <div class="content">
            <div id="my_favorite_latin_words" class="jqcloud"></div>
          </div>
        </div>

      </section>
    </div>

  </div>
</template>

<script >
    import leftMain from '../components/left-main'
    import headMain from '../components/head'
    import $ from 'jquery'
    import jQCloud from '../../static/js/jqcloud-1.0.4.min'
    var word_list = [
        { text: "Lorem", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud" },
        {
            text: "Ipsum",
            weight: 10.5,
            html: { title: "My Title", "class": "custom-class" },
            link: { href: "http://jquery.com/", target: "_blank" }
        },
        { text: "Dolor", weight: 9.4 },
        { text: "Sit", weight: 8 },
        { text: "Amet", weight: 6.2 },
        { text: "Consectetur", weight: 5 },
        { text: "Adipiscing", weight: 5 },
        { text: "Elit", weight: 5 },
        { text: "Nam et", weight: 5 },
        { text: "Leo", weight: 4 },
        { text: "Sapien", weight: 4 },
        { text: "Pellentesque", weight: 3 },
        { text: "habitant", weight: 3 },
        { text: "morbi", weight: 3 },
        { text: "tristisque", weight: 3 },
        { text: "senectus", weight: 3 },
        { text: "et netus", weight: 3 },
        { text: "et malesuada", weight: 3 },
        { text: "fames", weight: 2 },
        { text: "ac turpis", weight: 2 },
        { text: "egestas", weight: 2 },
        { text: "Aenean", weight: 2 },
        { text: "vestibulum", weight: 2 },
        { text: "elit", weight: 2 },
        { text: "sit amet", weight: 2 },
        { text: "metus", weight: 2 },
        { text: "adipiscing", weight: 2 },
        { text: "ut ultrices", weight: 2 },
        { text: "justo", weight: 1 },
        { text: "dictum", weight: 1 },
        { text: "Ut et leo", weight: 1 },
        { text: "metus", weight: 1 },
        { text: "at molestie", weight: 1 },
        { text: "purus", weight: 1 },
        { text: "Curabitur", weight: 1 },
        { text: "diam", weight: 1 },
        { text: "dui", weight: 1 },
        { text: "ullamcorper", weight: 1 },
        { text: "id vuluptate ut", weight: 1 },
        { text: "mattis", weight: 1 },
        { text: "et nulla", weight: 1 },
        { text: "Sed", weight: 1 }
    ];
    export default {
        name: 'search',
        components: { leftMain, headMain },
        data () {
            return {
                airport: '广州机场',
                headTitle: '搜索',

            }
        },
        mounted(){
            $(function () {
                $("#my_favorite_latin_words").jQCloud(word_list);
            });
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  div.jqcloud {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size:25px;
    line-height: normal;
  }
  div.jqcloud a {
    font-size: inherit;
    text-decoration: none;
  }
  div.jqcloud span.w10 { font-size: 550%; }
  div.jqcloud span.w9 { font-size: 500%; }
  div.jqcloud span.w8 { font-size: 450%; }
  div.jqcloud span.w7 { font-size: 400%; }
  div.jqcloud span.w6 { font-size: 350%; }
  div.jqcloud span.w5 { font-size: 300%; }
  div.jqcloud span.w4 { font-size: 250%; }
  div.jqcloud span.w3 { font-size: 200%; }
  div.jqcloud span.w2 { font-size: 150%; }
  div.jqcloud span.w1 { font-size: 100%; }
  /* colors */

  div.jqcloud { color: #09f; }
  div.jqcloud a { color: inherit; }
  div.jqcloud a:hover { color: #ff612a; }
  div.jqcloud span.w10 { color: #ff612a; }
  div.jqcloud span.w9 { color: #0cf; }
  div.jqcloud span.w8 { color: #ff8256; }
  div.jqcloud span.w7 { color: #ffa88b; }
  div.jqcloud span.w6 { color: #ff8054; }
  div.jqcloud span.w5 { color: #ffbaa2; }
  div.jqcloud span.w4 { color: #f3bfae; }
  div.jqcloud span.w3 { color: #e4caa3; }
  div.jqcloud span.w2 { color: #ffece6; }
  div.jqcloud span.w1 { color: #dec9c2; }
  /* layout */

  div.jqcloud {
    overflow: hidden;
    position: relative;
  }
  div.jqcloud span { padding: 0; }
</style>
