<template>
<div class="content" >
<!--这边将所有产品对象，从数组中分离出来-->
<!--  <img src="" alt="">-->
<!-- <div class="info">-->
<!--   <p>{{item.title}}</p>-->
<!--   <span class="price"></span>-->
<!--   <span class="collect"></span>-->
<!-- </div>-->
  <middleItem v-for="item in middleItem" :middleLast="item" @middleItem="middle"></middleItem>

</div>

</template>

<script>
import middleItem from "@/views/category/childCategory/middleItem";
export default {
  name: "right",
  components:{
    middleItem
  },
  props:{
    middleItem:{
      type:Array,
      default(){
        return []
      }
    }
  }
  ,methods:{
    middle(){
      this.$emit('middle')
    }
  }
}
</script>

<style scoped>
.content{
 display: flex;
  flex-wrap:wrap ;
  justify-content: space-around;
}
</style>
