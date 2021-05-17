<template>
  <div>

    <div id="detail">
      <DetailNavBar class="detail-nav" @titleClick="titleClick" ref="nav"></DetailNavBar>

      <Scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
<!--        <ul>-->
<!--          <li v-for="item in $store.state.cartList">{{item}}</li>-->
<!--        </ul>-->
        <DetailSwiper :top-images="topImages"></DetailSwiper>
        <DetailBaseInfo :goods="goods"></DetailBaseInfo>
        <DetailShopInfo :shop="shop"></DetailShopInfo>
        <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
<!--        DetailGoodsInfo 一条条商品-->
        <DetailParamInfo :paramInfo="paramInfo"  ref="params"></DetailParamInfo>
        <DetailCommentInfo :comment-info="commentInfo" ref="comment"></DetailCommentInfo>
        <GoodsList :goods="recommends" ref="recommend"></GoodsList>

      </Scroll>
<!--      <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>-->
            <BackTop  v-show="isShowBackTop" @click.native="backClick"></BackTop>
      <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
    </div>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/commom/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import BackTop from "@/components/content/backTop/BackTop";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    GoodsParam,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop


  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs:[],
      currentIndex:0,
      isShowBackTop:false,


    }
  },

  created() {
    //1.保存传入的iid
    this.id = this.$route.params.id
    console.log(this.$route.params.id);
    //this.$route.params.iid  当前路由活跃下后最后面那个

    //  2.根据iid保存详情数据
    getDetail(this.id).then(res => {
      console.log(res);
      const data = res.result;
      //  3.获取顶部的轮播数据
      this.topImages = data.itemInfo.topImages
      //4.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //5.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      //6.保存商品的详情数据
      this.detailInfo = data.detailInfo

      //  7.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //  8.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
//dom渲染完了，但是图片还没渲染完，nextTickdom渲染完 //offset值不对的时候，一般都是因为图片的问题
//       this.$nextTick(()=>{
//
//         this.themeTopYs=[]
//         this.themeTopYs.push(0)
//         this.themeTopYs.push(this.$refs.params.$el.offsetTop)
//         this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
//         this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
//         console.log(this.themeTopYs);
//       })
    })

    //  请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list

    })
  },
  methods: {
    addToCart(){
    //   获取购物车需要展示的信息
      const product={}
      product.image=this.topImages[0]
      product.title=this.detailInfo.title
      product.desc=this.detailInfo.desc
     product.price=this.detailInfo.realPrice
      product.iid=this.iid

    //  将商品添加到购物车里面
   // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    imageLoad() {
      this.$refs.scroll.refresh()
      this.$nextTick(()=>{

        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs);
      })
    }
    ,titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    }
    ,contentScroll(position){
    //  1.获取y值
      const positionY=-position.y
    //  2.positionY和主题中的值进行对比
      let length=this.themeTopYs.length

      for (var i=0;i<length;i++){
       if(this.currentIndex!==i && (i<length-1 && positionY>=this.themeTopYs[i]  && positionY< this.themeTopYs[i+1] )
         ||(i === length-1 && positionY >= this.themeTopYs[i])){
         this.currentIndex=i
         this.$refs.nav.currentIndex=this.currentIndex
       }
      }

      this.isShowBackTop=-(position.y)>1000

    },

  },

  mounted() {
    // this.$bus.$on('itemImgLoad',()=>{
    //   const refresh =  debounce(this.$refs.scroll.refresh,)
    // })

  },
  updated() {//界面发生刷新的时候


  }

}
</script>
<!--(i<length-1 && positionY>=this.themeTopYs[i]  && positionY< this.themeTopYs[i+1] )-->
<!--||(i === length-1 && positionY>= this.themeTopYs[i])-->
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
  /*  百分之百视口高度*/
}

.content {
  height: calc(100% - 44px - 48px);
  overflow: hidden;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
</style>
