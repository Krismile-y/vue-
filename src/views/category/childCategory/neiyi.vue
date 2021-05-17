<template>
  <div>
    <neiyiItem v-for="item in neiyi" :neiyiItem="item" @qLoad="qqLoad"></neiyiItem>
  </div>
</template>

<script>
import neiyiItem from "@/views/category/childCategory/neiyiItem";
export default {
  name: "neiyi",
  components:{
    neiyiItem
  },
  props:{
    neiyi:{
      type:Array,
      default(){
        return[]
      }
    }
  },methods:{
    qqLoad(){
      this.$emit('lastQQ')
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  flex-wrap:wrap ;
  justify-content: space-around;
}
</style>
