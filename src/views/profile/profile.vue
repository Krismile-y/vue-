<template>
 <div>
   <NavBar class="navbar"><div slot="center">我的档案</div></NavBar>

    <span class="span1">
 <img src="../../assets/img/common/用户.png" alt="">
      <span class="span2">登录/注册</span>
      <span class="span3">暂无绑定手机号</span>
      <span class="span4">
        >
      </span>
    </span>

   <span class="span5">
     <img src="../../assets/img/common/信息.png" alt="">
     <span class="a">我的信息</span>
   </span>


   <span class="span5">
     <img src="../../assets/img/common/积分商城.png" alt="">
     <span class="a">积分商城</span>
   </span>


   <span class="span5">
     <img src="../../assets/img/common/会员卡.png" alt="">
     <span class="a">会员卡</span>
   </span>


   <span class="span5" @click="cartClick">
     <img src="../../assets/img/common/购物车 (2).png" alt="" style="width: 35px;height: 40px;">
     <span class="a">我的购物车</span>
   </span>


   <span class="span5">
     <img src="../../assets/img/common/手提皮包.png" alt="" style="width: 25px;height: 25px">
     <span class="a">下载购物APP</span>
   </span>

 </div>
</template>

<script>
import NavBar from "@/components/commom/navbar/NavBar";
export default {
  name: "profile",
  components:{
    NavBar
  },
  methods:{
    cartClick(){
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.span5{
  display: inline-block;
  height: 55px;
  width: 100%;
  border-bottom: 1px solid black;
}
.navbar{
  background: pink;
  color: #ffffff;
}

.span1{
  display: inline-block;
  width: 100%;
  height: 75px;
  background: pink ;
  color: white;
  border-top: 1px white solid;
}
.span1 img{
  width: 35px;
  height: 35px;
  margin-top: 20px;
  margin-left: 30px;
}
.span2{
  position: absolute;
  top:65px;
  left: 110px;
}
.span3{
  padding-left: 45px;
}

.span4{
 padding-left: 99px;
  padding-top: -10px;
}
.span5 img{
  width: 35px;
  height: 35px;
margin-top: 8px;
  margin-left: 30px;
}

.a{
  position: relative;
 margin-left: 70px;
  margin-top:   -23px;
  display: block;
}
</style>
