<template>
<div>
  <kuziItem v-for="item in kuzi" :kuziItem="item" @imageLoad="kLoad"></kuziItem>
</div>
</template>

<script>
import kuziItem from "@/views/category/childCategory/kuziItem";
export default {
  name: "kuzi",
  components:{
    kuziItem
  },
  props:{
    kuzi:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
 kLoad (){
      this.$emit('lastkuzi')

    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
