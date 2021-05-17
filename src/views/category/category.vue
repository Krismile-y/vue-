<template>
<div class="content">
  <NavBar class="nav-bar"><div slot="center">商品分类</div></NavBar>
  <List :pass="listTop" @listClick="listScroll" ref="list"></List>

 <div class="big">
   <Scroll class="scroll" ref="scroll" @scroll="scrollPosition"  :probeType="3">

     <kuzi :kuzi="kuzi" ref="kuzi" @lastkuzi="shuaxin"></kuzi>
     <qunzi :qunzi="qunzi" ref="qunzi" @qqq="shuaxin"></qunzi>
     <neiyi :neiyi="neiyi" ref="neiyi" @lastQQ="shuaxin"></neiyi>
     <middle :middleItem="middleList" @middle="shuaxin" ref="shangyi"></middle>
   </Scroll>
 </div>
</div>

</template>

<script>
import {getHomeGoods} from "@/network/home";
import {request} from '../../network/category'
import Scroll from "@/components/commom/scroll/Scroll";
import NavBar from "@/components/commom/navbar/NavBar";
import List from "@/views/category/childCategory/List";
import middle from './childCategory/middle'
import kuzi from "@/views/category/childCategory/kuzi";
import qunzi from "@/views/category/childCategory/qunzi";
import neiyi from "@/views/category/childCategory/neiyi";
export default {
  name: "catagory",
  data(){
    return{
    middleList:[],
      kuzi:[],
      qunzi:[],
      neiyi:[],
      listTop:['裤子','裙子','内衣','上衣'],
      scrollTop:[0,-1792,-3583,-5375],
     currentIndex:0,
      themeTopYs:[],

    }
  },
  components:{
    Scroll,
    NavBar,
    List,
    middle,
   kuzi,
    qunzi,
    neiyi

  },
  created() {

    //请求title之类的数据
    request().then(res =>{
      // console.log(res);
      this.list =res.data.category.list

      // console.log(this.list instanceof Array); 检查是否是数组
    })

    getHomeGoods("pop",9).then(res=>{
      // console.log(res.data.list);
      this.middleList=[...res.data.list]
      // console.log(this.middleList);
    })

    getHomeGoods("pop",12).then(res=>{
      // console.log(res.data.list);
      this.kuzi=[...res.data.list]

    })

    getHomeGoods("pop",14).then(res=>{
      // console.log(res.data.list);
      this.qunzi=[...res.data.list]

    })

    getHomeGoods("pop",13).then(res=>{
      // console.log(res.data.list);
      this.neiyi=[...res.data.list]

    })

  }
  ,methods:{
    shuaxin(){
      this.$refs.scroll.scroll.refresh()
  // this.themeTopYs.push(this.$refs.qunzi.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.neiyi.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.middle.$el.offsetTop)

    },
   lastkuzi(){
     // this.$refs.scroll.scroll.refresh()
    },
    listScroll(index){//$emit 穿过来的参数不用再组件标签里写参数，直接在下面函数里面用就行了
      // console.log(this.$refs.shangyi.$el.offsetTop);

      this.$refs.scroll.scrollTo(0,this.scrollTop[index],1)
      // console.log(index);

    }
    ,scrollPosition(position){  //position.y y轴上的值


      //
      // const positionY=-position.y
      // //  2.positionY和主题中的值进行对比
      // let length=this.scrollTop.length
      //
      // for (var i=0;i<length;i++){
      //   if(this.currentIndex!==i && (i<length-1 && positionY>=this.scrollTop[i]  && positionY< this.scrollTop[i+1] )
      //     ||(i === length-1 && positionY >= this.scrollTop[i])){
      //     this.currentIndex=i
      //     this.$refs.list.currentIndex=this.currentIndex
      //   }
      // }

    }
  }

}
</script>

<style scoped>
.nav-bar{
  background-color: pink;
  color: white;
/*  里面的文字颜色 白色*/
}
.big{
  height: 100vh;

}
.scroll{
  height: calc(100% - 132px);


  overflow: hidden;
}

</style>
