<template>
  <Tab-bar>
      <Tab-bar-item path="/home" activeColor="#ff8198">
        <img src="@/assets/img/tabbar/home.svg" slot="item-icon" alt="" />
        <img
          src="@/assets/img/tabbar/home_active.svg"
          slot="item-icon-active"
          alt=""
        />
        <div slot="item-text">首页</div>
      </Tab-bar-item>
      <Tab-bar-item path="/category" activeColor="#ff8198">
        <img src="@/assets/img/tabbar/category.svg" slot="item-icon" alt="" />
        <img
          src="@/assets/img/tabbar/category_active.svg"
          slot="item-icon-active"
          alt=""
        />

        <div slot="item-text">分类</div>
      </Tab-bar-item>
      <Tab-bar-item path="/cart" activeColor="#ff8198">
        <img src="@/assets/img/tabbar/shopcart.svg" slot="item-icon" alt="" />
        <img
          src="@/assets/img/tabbar/shopcart_active.svg"
          slot="item-icon-active"
          alt=""
        />

        <div slot="item-text">购物车</div>
      </Tab-bar-item>
      <Tab-bar-item path="/profile" activeColor="#ff8198">
        <img src="@/assets/img/tabbar/profile.svg" slot="item-icon" alt="" />
        <img
          src="@/assets/img/tabbar/profile_active.svg"
          slot="item-icon-active"
          alt=""
        />

        <div slot="item-text">我的</div>
      </Tab-bar-item>
    </Tab-bar>
</template>

<script>
// 引入大组件
import TabBar from "components/common/tab-bar/TabBar";
// 引入item
import TabBarItem from "components/common/tab-bar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>