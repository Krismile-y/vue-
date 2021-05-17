<template>
<div class="goods">
  <GoodsListItem v-for="item in goods" :goods-item="item"></GoodsListItem>
<!--这边遍历的是完整的一个对象，对象里有30条数据-->
</div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
  goods:{
    type:Array,
    default(){
      return[]
    }
  }
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap:wrap ;
  justify-content: space-around;

}
</style>
