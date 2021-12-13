<template>
  <div class="detali">
    <detali-nav-bar @navClick="navClick"></detali-nav-bar>
    <scroll
      :probe-type="3"
      :pullUpLoad="true"
      class="detail-scroll"
      ref="scroll"
    >
      <detail-swiper :detailSwiperiImg="detailSwiperiImg"></detail-swiper>
      <detail-info :detailInfo="datailInfoDate"></detail-info>
      <shop-info :shopDate="shopInfoDate"></shop-info>
      <detail-show :detailImgInfo="detailImgInfo"></detail-show>
      <detail-params
        :paramsInfo="paramsInfo"
        :paramsRule="paramsRule"
        ref="params"
      ></detail-params>
      <deta-comment
        :commentList="commentList"
        :userinfo="userinfo"
        ref="comment"
      ></deta-comment>
      <goods-list :goods="recommendData" ref="rec"></goods-list>
    </scroll>
  </div>
</template>

<script>
// 组件
import DetaliNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailInfo from "views/detail/childComps/DetailInfo";
import ShopInfo from "views/detail/childComps/ShopInfo";
import DetailShow from "views/detail/childComps/DetailShow";
import DetailParams from "views/detail/childComps/DetailParams";
import DetaComment from "views/detail/childComps/DetaComment";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

// 网络请求
import {
  getDetailData,
  goods,
  shopInfo,
  detailInfo,
  getDetailRecommend,
} from "network/detail";

import { itemListenerMixin } from "commonjs/mixin";
import { debounce } from "commonjs/utils";

export default {
  // keep-alive 排除需要name
  name: "Detail",
  data() {
    return {
      iid: null,
      detailSwiperiImg: [],
      datailInfoDate: {},
      shopInfoDate: {},
      detailImgInfo: {},
      paramsInfo: [],
      paramsRule: [],
      commentList: {},
      userinfo: {},
      recommendData: [],
      themeTopY: [],
      themeTopFunc: null,
    };
  },
  components: {
    DetaliNavBar,
    DetailSwiper,
    DetailInfo,
    ShopInfo,
    DetailShow,
    DetailParams,
    DetaComment,
    GoodsList,
    Scroll,
  },

  created() {
    this.getDetailData();
    this.getDetailRecommend();
    this.themeTopFunc = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(-this.$refs.params.$el.offsetTop);
      this.themeTopY.push(-this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(-this.$refs.rec.$el.offsetTop);
      console.log(this.themeTopY);
    },100);
  },

  mixins: [itemListenerMixin],

  mounted() {

    this.$bus.$on("itemImageLoad", () => {
      this.themeTopFunc()
    });
  },

  methods: {
    // 网络请求
    getDetailData() {
      this.iid = this.$route.query.iid;
      getDetailData(this.iid).then((res) => {
        console.log("data", res.data.result);
        let data = res.data.result;
        // 轮播图数据
        this.detailSwiperiImg = data.itemInfo.topImages;
        // 整合detail数据
        this.datailInfoDate = goods(data);
        // 整合商家数据
        this.shopInfoDate = shopInfo(data);
        // 详情数据
        this.detailImgInfo = detailInfo(data);
        // 商品参数
        this.paramsInfo = data.itemParams.info.set;
        this.paramsRule = data.itemParams.rule.tables[0];
        // 评论
        this.userinfo = data.rate.list[0].user;
        this.commentList = data.rate.list[0];

        // $nextTick 数据渲染完成回调
        // 根据最新的数据，对应的DOM 是被渲染出来了，但是图片依然是没加载完
        // 获取每个区域的高度，用作跳转
        this.$nextTick(() => {
          // 每次触发时先制空
          // this.themeTopY = [];
          // this.themeTopY.push(0);
          // this.themeTopY.push(-this.$refs.params.$el.offsetTop + 44);
          // this.themeTopY.push(-this.$refs.comment.$el.offsetTop + 44);
          // this.themeTopY.push(-this.$refs.rec.$el.offsetTop + 44);
          // console.log(this.themeTopY);
        });
      });
    },
    getDetailRecommend() {
      getDetailRecommend().then((res) => {
        this.recommendData = res.data.data.list;
        console.log(res.data);
      });
    },
    // 监听事件
    navClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, this.themeTopY[index], 100);
    },
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.imgListener);
  },
};
</script>

<style>
.detali {
  height: 100vh;
}
.detail-scroll {
  height: calc(100% - 44px);
  overflow: hidden;
}
.datali-center span {
  margin: 0 3px;
}
</style>