<template>
<div class="tab-bar-item" @click="itemClick ">
<!--  <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--  <div>首页</div>-->

<!--  下面是具名插槽-->
  <!--  因为插槽最终会被替换掉的，所以最好在前面加一个div包裹,属性都写在每个插槽被包裹的div中-->
<div v-if="!isActive">  <slot  name="item-icon" ></slot></div>
  <div v-else> <slot  name="item-icon-active" ></slot></div>

 <div :style="activeStyle">
   <slot name="item-text" ></slot>
 </div>

</div>
</template>

<script>
export default {
  name: "tabberitem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{

    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
      //当前活跃的路由的path 等不等与现在在props中定义的path的值一样，，indexOf()不等于-1就是一样,就是true
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  height: 49px;
  text-align: center;
  flex: 1;
  background: #f6f6f6;
  font-size: 14px;
}
.tab-bar-item img{
 height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.active{
  color: red;
}
</style>
