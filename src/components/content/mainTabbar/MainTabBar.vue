<template>
  <tab-bar>
   <tab-bar-item path="/home" activateColor="blue">
     <!-- 如果是变量则，:path="/home" -->
      <img slot="item-icon" src="~assets/img/tabbar/home.jpg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.jpg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activateColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/classify.jpg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/classify_active.jpg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activateColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/shop.jpg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/shop_active.jpg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activateColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/mine.jpg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/mine_active.jpg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
   import TabBar from 'components/common/tabbar/TabBar.vue'
   import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

   export default {
     name:'MainTabBar',
     components:{
       TabBar,
       TabBarItem
     }
   }
</script>

<style>
</style>
