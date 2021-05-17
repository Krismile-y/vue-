<template>
 <div id="home">
   <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>

   <tabControl :titles="['流行','新款','精选']"
               ref="tabControl1"
               v-on:tabClick="tabClick"
             class="tabControl"
               v-show="isTabFixde"
   ></tabControl>

   <Scroll class="content"
           ref="scroll" :probe-type="3"
           @scroll="contentScroll"
           :pull-up-load="true"
          @pullingUp="loadMore"
   >

     <homeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></homeSwiper>
     <RecommendView :recommends="recommend"></RecommendView>
     <feature></feature>
     <tabControl :titles="['流行','新款','精选']" ref="tabControl2"
                 v-on:tabClick="tabClick"

     ></tabControl>

     <GoodsList :goods="goods[currentType].list"></GoodsList>

   </Scroll>

   <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
<!--   原生组件不能直接监听事件，需要加上native才能监听-->

 </div>
</template>

<script>

import homeSwiper from "./chidComps/homeSwiper";
import RecommendView from "./chidComps/RecommendView";
import feature from './chidComps/Feature'

import NavBar from "@/components/commom/navbar/NavBar";
import tabControl from "@/components/content/tabControl/tabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/commom/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";


import {getHomeMultidata,getHomeGoods} from "@/network/home";
import axios from "axios";
import {debounce} from "@/common/utils";


export default {
  name: "home",
  components:{
    NavBar,
    homeSwiper,
    RecommendView,
    feature,
    tabControl,
    GoodsList,
    Scroll,
    BackTop,

  },
  computed:{
    showGoods(){

    }
  },
  data(){
return{
  //定义一个变量来保存 打印的结果
  banners:[],
  recommend:[],
  goods:{
    'pop':{page:0,list:[]},
    'new':{page:0,list:[]},
    'sell':{page:0,list:[]}
  },
  currentType:'pop',
  isShowBackTop:false,
  tabOffsetTop:0,
  isTabFixde:false,
  saveY:0
}

  },
  activated() { //路由活跃时
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {//路由不活跃时   活跃和消亡是两个概念
//    离开的时候记录哈当前的y的值，下面是我封装的函数
this.saveY= this.$refs.scroll.getScrollY()
  },


  created() {//请求多个数据
 axios({

   url:'http://123.207.32.32:8000/home/multidata'
 }).then(res=>{
   console.log(res);
   this.banners=res.data.data.banner.list;
   this. recommend=res.data.data. recommend.list;

 })
    //2.请求商品数据                  把他抽到下面的methods里面了
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },mounted() {
    const refresh =  debounce(this.$refs.scroll.refresh,)
    //3.监听item中图片加载完成的事件
    this.$bus.$on('itemImageLoad',()=>{
   refresh()
    })


  },
  methods:{
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
     tabClick(index){
      switch (index) {
    case 0:
      this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
  this.$refs.tabControl1.currentIndex=index;
       this.$refs.tabControl2.currentIndex=index;
     },
    backClick(){
  this.$refs.scroll.scrollTo(0,0,500)//第一个参数是x,第二个参数是y，第三个参数是时间多少毫秒之内返回到指定位置
    //  $refs 访问设了ref值的组件， 可以访问其内部

    },
    contentScroll(position){
 //       1.判断backtop是否显示
  this.isShowBackTop=-(position.y)>1000

    //  2.决定tabControl是否吸顶（position：fixed）
    //   一旦等于就为true了  等于-1也为true
      this.isTabFixde=-(position.y)>this.tabOffsetTop

      // this.isShowBackTop=-(position.y)>1000
      //
      // //  2.决定tabControl是否吸顶（position：fixed）
      // //   一旦等于就为true了  等于-1也为true
      // this.isTabFixde=-(position.y)>this.tabOffsetTop
    },
    swiperImageLoad(){
      //  2.获取tabControl 的offset
      //  所有的组件都有一个属性$el，用于获取组件中的元素
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    },

    //下面是网络请求相关的
    getHomeGoods(type){
      const page=this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{``
       this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      //完成上拉加载更多
        this.$refs.scroll.scroll. finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
.home-nav{
background-color: pink;
  color: #fff;
 /*position: fixed;*/
 /* left: 0;*/
 /* top: 0;*/
 /* right: 0;*/
 /* z-index: 9;*/
}

#home{
/*padding-top: 44px;*/
 height: 100vh;
  position: relative;
/*  vh视口*/
}

/*.content{*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  left: 0;
  right: 0;
}
.tabControl{
  position: relative;
  z-index: 9;
}

</style>
