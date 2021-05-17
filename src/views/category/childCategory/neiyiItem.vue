<template>
  <div class="content" @click="itemClick">
    <img :src="showImage" alt=""  @load="qunziLoad">

    <div class="info">
      <p>{{ neiyiItem.title}}</p>
      <span class="price">￥{{ neiyiItem.price}}</span>
      <span class="collect">{{ neiyiItem.cfav}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: "neiyiItem",
  props:{
    neiyiItem:{
      type:Object
    }
  }
,computed:{
  showImage(){
    return this.neiyiItem.show.img
  }
},
  methods:{
    qunziLoad(){
      this.$emit('qLoad')
    },
    itemClick(){
      this.$router.push('/detail/' + this.neiyiItem.iid)
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
