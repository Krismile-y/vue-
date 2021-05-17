<template>
  <div class="content"  @click="itemClick">
    <img :src="showImage" alt=""  @load="imageLoad">

    <div class="info">
      <p>{{kuziItem.title}}</p>
      <span class="price">￥{{kuziItem.price}}</span>
      <span class="collect">{{kuziItem.cfav}}</span>
    </div>


  </div>
</template>

<script>
export default {
  name: "kuziItem",
  props:{
   kuziItem:{
     type:Object,
   }

  },
  computed:{
    showImage(){
      return this.kuziItem.show.img
    }
  },methods:{
    imageLoad(){
      this.$emit('kuziItem')
    }
    ,itemClick(){
      this.$router.push('/detail/' + this.kuziItem.iid)
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
