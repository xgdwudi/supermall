<template>
  <tab-bar>
    <tabbar-item path="/homes" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tar-bar/ziyuan.png">
      <img slot="item-icon-active" src="@/assets/img/tar-bar/ziyuan01.png">
      <div slot="item-text">主页</div>
    </tabbar-item>
    <tabbar-item path="category" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tar-bar/wangluo.png">
      <img slot="item-icon-active" src="@/assets/img/tar-bar/wangluo01.png">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tar-bar/gouwuche.png">
      <img slot="item-icon-active" src="@/assets/img/tar-bar/gouwuche01.png">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tar-bar/wo.png">
      <img slot="item-icon-active" src="@/assets/img/tar-bar/wo01.png">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import tabbarItem from "../../common/tabbar/tabbarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      tabbarItem
    }
  }
</script>

<style scoped>

</style>
