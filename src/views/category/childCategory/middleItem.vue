<template>

<!--这边已将每个个产品信息拿到了-->
<!--写img里面的scr路径时，要写个计算属性，因为他写在标签里面的，不能直接用拿到的数据，-->


  <div class="content" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">

    <div class="info">
      <p>{{middleLast.title}}</p>
      <span class="price">￥{{middleLast.price}}</span>
      <span class="collect">{{middleLast.cfav}}</span>
    </div>


</div>
</template>

<script>
export default {
  name: "middleItem",
  props:{
    middleLast:{
      type:Object
    }
  }
  ,computed:{
    showImage(){
  return this.middleLast.show.img
    }
  }
  ,methods:{
    imageLoad(){
      this.$emit('middleItem')
    },
    itemClick(){
      this.$router.push('/detail/' + this.middleLast.iid)
    }
  }
}
</script>

<style scoped>
.content{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

img{
  width: 100%;
}
.price,.collect{
  color: pink;
}
.info{

  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

p{
  overflow: hidden;
  *text-overflow: ellipsis;
  /*text-overflow: ellipsis; overflow:hidden超出部分是省略号 */
  white-space: nowrap;
  margin-bottom: 3px;
}
</style>
