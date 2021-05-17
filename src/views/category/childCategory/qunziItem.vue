<template>
  <div class="content" @click="itemClick">
    <img :src="showImage" alt=""  @load="load">

    <div class="info">
      <p>{{qunziItem.title}}</p>
      <span class="price">￥{{qunziItem.price}}</span>
      <span class="collect">{{qunziItem.cfav}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: "qunziItem",
  props:{
    qunziItem:{
      type:Object,

    }
  }
,computed:{
  showImage(){
    return this.qunziItem.show.img
  }
},
  methods:{
    load(){
      this.$emit('fashe')
    },
    itemClick(){//push可以返回，replace不能返回

      this.$router.push('/detail/' + this.qunziItem.iid)
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
