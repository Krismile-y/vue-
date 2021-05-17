<template>
  <tabbar>
    <!-- 这里的path是对应组件的props中定义的，props可以穿静态值，基本数据类型，这时候可以不加：-->
    <tabberitem path="/home" active-color="pink">
      <img  slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabberitem>

    <tabberitem path="/category">
      <img  slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabberitem>

    <tabberitem path="/cart">
      <img  slot="item-icon" src="../../../assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabberitem>

    <tabberitem path="/profile">
      <img  slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img  slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabberitem>
  </tabbar>
</template>

<script>
import tabbar from "../../commom/Tabbar/tabbar";
import tabberitem from "../../commom/Tabbar/tabberitem";
export default {
  name: "maintabber",
  components:{
    tabbar,
    tabberitem
  }
}
</script>

<style scoped>

</style>
