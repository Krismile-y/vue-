<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <maintabber></maintabber>

  </div>
</template>

<script>

import tabbar from "@/components/commom/Tabbar/tabbar";
import maintabber from "@/components/content/mainTabbar/maintabber";
export default {
  name: 'app',
  components: {
    tabbar,
    maintabber

  }
}
</script>

<style>
@import "assets/css/base.css";


</style>

