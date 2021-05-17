<template>
<div>
  <NavBar class="navbar">
    <div slot="left" class="back" @click="backClick">
      <img src="../../../assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles"
           class="title-item"
           :class="{active:currentIndex === index}"
           @click="titlesClick(index)"
      >{{item}}</div>
    </div>
  </NavBar>

</div>
</template>

<script>
import NavBar from "@/components/commom/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },

  methods:{
 titlesClick(index){
    this.currentIndex=index
   this.$emit('titleClick',index)
 },
    backClick(){
   this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
}

.title-item{
  flex: 1;
  font-size: 13px;
}

.active{
  color: red;
}

.back img{
  margin-top: 12px;
}
.navbar{
  margin-top: -10px;
}
</style>
