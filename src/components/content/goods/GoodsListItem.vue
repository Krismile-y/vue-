<template>

  <div class="goods" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" >
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<!--这边遍历的是完整的一个对象的30条信息的所有信息-->
<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    imageLoad(){ //$bus.emit  事件总线的发射
     this.$bus.$emit('itemImageLoad')
    },
    itemClick(){//push可以返回，replace不能返回

      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
 computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
 }
}
</script>

<style scoped>
.goods {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods img {
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: pink;
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}


.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg")  0 0/14px 14px;
}
</style>
