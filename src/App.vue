<template>
  <div id="app" @touchstart="touchStart">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.isShowTabBar"></main-tab-bar>
  </div>
</template>

<script>
// git提交。。。
// 888444
import MainTabBar from 'components/content/MainTabBar'
// 141144
export default {
  data(){
    return{

    }
  },
  components:{
    MainTabBar
  },
  methods:{
    touchStart(){
      return
    }
  }
}
</script>

<style>
@import 'assets/css/base.css';
@import "~assets/css/iconfont/iconfont.css";

</style>
