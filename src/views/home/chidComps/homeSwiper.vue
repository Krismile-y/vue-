<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/commom/swiper'
export default {
  name: "homeSwiper",
  components:{
    Swiper,
    SwiperItem
  },props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      if(! this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad=true
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  }
}
</script>

<style scoped>


</style>
