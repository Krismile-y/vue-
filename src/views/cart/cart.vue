<template>
<div class="cart">
<!--  导航-->
  <NavBar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
<!--    <div slot="center">购物车({{$store.state.cartList.length}})</div>-->
  </NavBar>

<!--  商品列表-->
  <CartList></CartList>

<!--  底部的汇总-->
</div>
</template>

<script>
import NavBar from "@/components/commom/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
export default {
  name: "cart",
  components:{
    NavBar,
    CartList
  },
  computed: {
    cartLength(){
      return   this.$store.getters.cartLength
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: pink;
  color: white;
  /*font-weight: 700 ; 加粗*/
}
</style>
