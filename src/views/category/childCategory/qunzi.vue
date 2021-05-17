<template>
<div>
  <qunziItem v-for="item in qunzi" :qunzi-item="item" @fache="lastqunzi"></qunziItem>
</div>
</template>

<script>
import qunziItem from "@/views/category/childCategory/qunziItem";
export default {
  name: "qunzi",
  props:{
  qunzi:{
    type:Array,
    default(){
      return[]
    }
  }
  },
  components:{
    qunziItem
  },methods:{
    lastqunzi(){
      this.$emit('qqq')
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
