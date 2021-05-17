<template>
 <div class="recommend">
    <div v-for="item in recommends" class="item">
      <a :href="item.link"  class="a">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
 </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.a{
  text-decoration: none;
  color: black;
}
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.item{
  flex: 1;
}
.item img{
  width: 70px;
  height: 80px;
  margin-bottom: 10px;

}
</style>
