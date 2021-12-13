<template>
  <div id="home">
    <nav-bar backgroundColor="#ff8198" fontColor="#fff">
      <div slot="center" style="font-size: 1.1rem">首页</div>
    </nav-bar>

    <tab-control
      :title="['流行', '新款', '精选']"
      :class="{ 'tab-control-fixed': tabIsFixed }"
      ref="tabControlClone"
      @changeTab="changeTab"
      v-show="tabIsFixed"
    ></tab-control>

    <scroll
      class="home-wrapper"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="scrollPosition"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        class="home-swiper"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        :class="{ 'tab-control-fixed': tabIsFixed }"
        ref="tabControl"
        @changeTab="changeTab"
      ></tab-control>
      <goods-list
        :goods="goods[goodsType].list"
        :key="currentIndex"
      ></goods-list>
    </scroll>

    

    <!-- native监听组件原声事件 -->
    <back-top @click.native="backTop" v-show="isshowBack"></back-top>

    <!-- <div style="height: 1000px"></div> -->
  </div>
</template>

<script>
// 业务公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

// 页面子组件
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

// 引入网络请求代码
import { getHomeMultidata, getHomeGoods } from "network/home";

// 引入commonjs
// 混入
import {itemListenerMixin} from "commonjs/mixin";

export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
    
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsType: "pop",
      currentIndex: 0,
      isshowBack: false,
      TabControlHeigth: 0,
      tabIsFixed: false,
      saveY:0,
      imgListener : null
    };
  },

  created() {
    // 1.请求数据
    this.getHomeMultidata();
    // 商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  // mounted() {
  //   // this.getTabControlHeigth();
  //   const refresh = debounce(this.$refs.scroll.refresh, 100);

  //   // 全局监听    图片加载完成刷新scroll获取高度
  //   this.imgListener = () => {
  //     refresh();
  //   }
  //   this.$bus.$on("itemImageLoad", this.imgListener );
  // },
  
  // 使用混入 
  mixins:[itemListenerMixin],

  methods: {
    // 网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      // 调用网络请求
      getHomeGoods(type, page).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.data.list);
      });
    },

    // 事件监听方法
    changeTab(index) {
      this.currentIndex = index;
      if (index == 0) {
        this.goodsType = "pop";
      } else if (index == 1) {
        this.goodsType = "new";
      } else if (index == 2) {
        this.goodsType = "sell";
      }
      // 同步两个tabcontrol的index状态
      this.$refs.tabControlClone.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scrollPosition(position) {
      // 1.判断topbtn是否显示
      this.isshowBack = -position.y > 1000 ? true : false;
      // 2.tabcontrolHigth 是否吸顶
      this.tabIsFixed = -position.y >= this.TabControlHeigth;
      // 3.保存home的直
      
    },
    loadMore() {
      this.getHomeGoods(this.goodsType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.TabControlHeigth = this.$refs.tabControl.$el.offsetTop;
      console.log(this.TabControlHeigth);
    },
  },
  activated(){
    console.log("activated",this.saveY);
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    
  },
  deactivated(){
    // 离开时，保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    console.log("deactivated",this.saveY);
    // 取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.imgListener );
  }
};
</script>

<style>
#home {
  position: relative;
  padding: 0px 0px 49px 0px;
  height: 100vh;
}
.nav-bar {
  /* position: fixed; */
  /* 在使用浏览器原生滚动时用定位
  用了betterScroll之后不需要
   */
  /* top: 0;
  left: 0;
  right: 0;
  z-index: 999; */
}

.tab-control-fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0px;
  z-index: 99;
}
.home-wrapper {
  /* margin-top: 44px; */
  height: calc(100% - 48px);
  overflow: hidden;
  /* position: absolute;
  top: 44px;
  bottom: 0px;
  left: 0;
  right: 0; */
}
</style>