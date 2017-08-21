<template>
  <div class="cart clearfix">
    <!--<left-main category="true" :leftTitle="airportName"></left-main>-->
    <section class="right-main">
      <head-main :head-title="headTitle" category="true"></head-main>
      <section class="r_content hasHead">
        <div class="cartList">
          <ul>
            <li class="list" v-for="(list,index) in cartList">
              <div class="head clearfix">
                <div class="checkbox">
                  <!--全选item-->
                  <input type="checkbox" :id="'checkbox_a'+ index" class="chk" v-model="list.isCheckedAll" @click="handleCheckAll(index)"/>
                  <label :for="'checkbox_a'+ index"></label>
                </div>
                <h4>{{list.storeName}}</h4>
                <button class="coupon">领券</button>
              </div>
              <ul>
                <li class="item clearfix" v-for="(item,index2) in list.cartListItem">
                  <div class="checkbox">
                    <input type="checkbox" :id="'checkbox_o' + index + index2" :value="item.id" class="chk" v-model="list.checkedItems"/>
                    <label :for="'checkbox_o' + index + index2"></label>
                  </div>
                  <div class="pt-pic">
                    <img :src="item.ptPic" width="100px" />
                  </div>
                  <div class="pt-info">
                    <p>{{item.ptName}}</p>
                    <span class="pt-price"><i>￥</i>{{item.ptPrice}}</span>
                  </div>
                  <div class="del-item">×</div>
                  <div class="pt-other">
                    <p class="spec">{{item.ptSpec}}</p>
                    <p class="pt-quantity">
                      <button class="reduce" @click="reduceBtn">-</button>
                      <input type="text" v-model="item.ptQuantity" />
                      <button class="plus" @click="plusBtn">+</button>
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <div class="cart-foot">
        <div class="foot-l">
          <span class="checkbox">
            <input type="checkbox" id="checkbox_all" class="chk" />
            <label for="checkbox_all"></label>
            <span>全选</span>
          </span>
          <span class="del-list">删除所选商品</span>
        </div>
        <div class="foot-r">
          <span>已优惠：<i>￥0</i></span>
          <span>合计：<i>￥<b>260.00</b></i></span>
          <button class="total-btn">结算</button>
        </div>

      </div>
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
                headTitle: '购物车',
                cartList: [
                    {
                        'storeName': '日上免税店',
                        'cartListItem':[
                            {
                                'id': '1',
                                'ptPic':'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                                'ptName':'红烧红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉肉',
                                'ptPrice':'108.00',
                                'ptSpec':'红色',
                                'ptQuantity':1
                            },
                            {
                                'id': '2',
                                'ptPic': 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                                'ptName': '红烧红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉肉',
                                'ptPrice': '108.00',
                                'ptSpec': '红色',
                                'ptQuantity': 1
                            }
                        ],
                        'checkedItems':[],
                        'isCheckedAll': false
                    },
                    {
                        'storeName': '日上免税店',
                        'cartListItem': [
                            {
                                'id': '1',
                                'ptPic': 'http://img.zcool.cn/community/016fbb58c3ab7ca801219c77c24331.png',
                                'ptName': '红烧红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉红烧肉肉',
                                'ptPrice': '108.00',
                                'ptSpec': '红色',
                                'ptQuantity': 1
                            }
                        ],
                        'checkedItems': [],
                        'isCheckedAll': false
                    }

                ],
            }
        },
        methods: {
            reduceBtn(){
                if (this.ptQuantity == 1) {
                    return
                } else {
                    this.ptQuantity--;
                }
            },
            plusBtn(){
                this.ptQuantity++;
            },
            handleCheckAll(index) {
                if (this.cartList[index].isCheckedAll) {
                    this.cartList[index].checkedItems = this.cartList[index].cartListItem.map(item => {
                        return item.id;
                    }
                )
                } else {
                    this.cartList[index].checkedItems = []
                }
            }
        },
        computed: {
            airportName: function () {
                return '(' + this.airport + ')'
            }
        },
        watch: {
            'cartList': {
                handler: function(newValue, oldValue) {
                    this.cartList.map(list => {
                        if(list.checkedItems.length === list.cartListItem.length) {
                          list.isCheckedAll = true;
                        } else {
                          list.isCheckedAll = false;
                        }
                    });
                },
                deep: true
            }
        }
    }
</script>

<style>

</style>

