<template>
<div>

<!--  <p v-for="(item,index) in pass"-->
<!--  :class="{active:index===currentIndex} "-->
<!--     @click="pClick(index)"-->
<!--  >{{item.title}}</p>-->
<div class="small">
  <div v-for="(item,index) in pass" @click="pClick(index)" :class="{active: index===currentIndex}"
   ref="div"
  >{{item}}</div>
</div>
</div>



</template>

<script>

export default {
  name: "List",
  data(){
    return{
      isShow:false,
      currentIndex:0
    }
  },
  components:{

  },
  props:{
    pass:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
   pClick(index){

     this.currentIndex=index
     this.$emit('listClick',index)
    }
  }
}
</script>

<style scoped>
.small{
  display: flex;
 height: 40px;
  background:	#F8F8FF;
  text-align: center;
}

.small div{
width: 25%;
height: 35px;
padding-top: 6px;
}

.active{
  background:pink;


}
</style>
