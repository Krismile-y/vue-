<template>
<div class="cart-list">
  <Scroll class="content" ref="scroll">
    <CartListItem v-for="(item,index ) in $store.state.cartList" :itemInfo="item" :key="index" ></CartListItem>

  </Scroll>

</div>
</template>

<script>
import Scroll from "@/components/commom/scroll/Scroll";
import CartListItem from "@/views/cart/childComps/CartListItem";
export default {
  name: "CartList",
 components:{
    Scroll,
   CartListItem,
 },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.content{
  height: calc(100% - 44px - 49px);
/*  父元素必须要有一个确定的高度，calc*/
}

.cart-list{
  height: 100vh;
}
.content{
  height: calc(100 - 93px);
}
</style>
