<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
name: "Scroll",
  props:{
  probeType:{
    type:Number,
    default:0
  },
    pullUpLoad:{
    type:Boolean,
      default: false
    }
  },
  data(){
  return{
    scroll:null
  }
  },
  mounted() { //2.创建BScroll对象
  //给 BScroll 赋给变量scroll
  this.scroll=new BScroll(this.$refs.wrapper,{
     click:true,
    probeType:this.probeType,
    pullUpLoad: this.pullUpLoad
  })

    //监听滚动的位置  对应的probeType
 this.scroll.on('scroll',(position)=>{ //第二个参数是位置
   // console.log(position);
   this.$emit('scroll',position)

 })

    //上拉加载更多
if(this.pullUpLoad){
  this.scroll.on('pullingUp',()=>{
 this.$emit('pullingUp')
  })
}

  },
  methods:{
    finishPullUp(){
      this.scroll.finishPullUp()
    }
    ,scrollTo(x,y,time=500){
      this.scroll  &&this.scroll.scrollTo(x,y,time)
      //先判断this.scroll有没有值，有值就会执行后面的
    }
    ,refresh(){

      this.scroll   && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll? this.scroll.y:0
    }
  }

  // this.scroll.scrollTo(0,0) 这个方法回到对应的位置
}
</script>

<style scoped>

</style>
