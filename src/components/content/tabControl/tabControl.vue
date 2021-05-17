
<template>
  <div class="tab-control">
    <div class="tab-control-item"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)"
         v-for="(item, index) in titles">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },methods:{
 itemClick(index) {
   this.currentIndex=index
   this.$emit('tabClick',index)
 }
  }

}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  background-color: #fff;
  z-index: 9;
  background: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: pink;
}

.active span {
  border-bottom:deeppink;
}
</style>



