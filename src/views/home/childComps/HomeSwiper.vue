<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper/index";
export default {
  props: {
    banners: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      imgIsLoad: false,
    };
  },
  methods: {
    imgLoad() {
      // 记录第一次发出的状态就可以了 发出一次之后不重复发
      if (!this.imgIsLoad) {
        this.$emit("swiperImgLoad");
        this.imgIsLoad = true;
      }
    },
  },
  components: {
    swiper,
    swiperItem,
  },
};
</script>

<style>
</style>