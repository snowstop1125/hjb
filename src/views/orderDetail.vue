<template>
  <div class="search clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
    <div class="right-main">
      <head-main :head-title="headTitle"></head-main>
      <section class="r_content hasHead" style="width:1840px;">
        <div class="order-detail">
          <h1 class="result">
            <i></i>
            <span>支付成功！</span>
          </h1>
          <div class="order">
            <h3>订单信息预览</h3>
            <ul>
              <li class="clearfix">
                <div class="item-l">
                  <img src="http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png" />
                  <div class="pt-info">
                    <p class="pt-name">日上免税店商品1日上免税店商品1日上免税店商品1日上免税店商品1日上免税店商品1</p>
                    <p class="pt-spec">红色、S码</p>
                  </div>
                </div>
                <div class="item-r">
                  <span>×2</span>
                  <span class="pt-price">￥108.00</span>
                </div>
              </li>
            </ul>
            <p class="order-total">总价：￥<b>108.00</b></p>
          </div>
          <div class="order logistics">
            <h3>物流信息预览</h3>
            <p class="hi">客户，您好！您选择的配送方式为：<b>送到登机口 ！</b> </p>

            <!--快递到家-->
            <!--<div class="info">
              <p>我们将在24小时内安排发货，谢谢您的支持！</p>
            </div>-->

            <!--到店自提-->
            <div class="info">
              <p>
                <span class="label">订单将配送至</span>
                <span class="for">日上免税店</span>
                <span class="label">预计送达时间</span>
                <span class="for">12:45</span>
              </p>
              <p>
                <span class="label">日上免税店地址</span>
                <b>上海虹桥机场XXXXXXXX号 <button class="tomap">导航</button></b>
              </p>
            </div>

            <!--送到登机口-->
            <!--<div class="info">
              <p>
                <span class="label">订单将配送至</span>
                <span class="for">登机口B112</span>
                <span class="label">预计送达时间</span>
                <span class="for">12:45</span>
              </p>
              <p>
                <span class="label">配送员</span>
                <span class="for">杨师傅</span>
                <span class="label">联系电话</span>
                <span class="for">13658152226</span>
              </p>
            </div>-->
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
    import headMain from '../components/head'

    export default {
        name: 'search',
        components: { headMain },
        data () {
            return {
                airport: '广州机场',
                headTitle: '结算反馈',

            }
        },
        mounted(){

        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div.jqcloud {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 25px;
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
