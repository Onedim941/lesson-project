<template>
  <swiper class="detail-swiper" ref="swiper">
    <swiper-item v-for="item in detailSwiperiImg" :key="item">
      <img :src="item" alt="" @load="imgload" />
    </swiper-item>
  </swiper>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper/index";
import { debounce } from "commonjs/utils";
export default {
  props: {
    detailSwiperiImg: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperItem,
  },
  mounted(){
    this.refresh = debounce(this.$refs.swiper.refreshWidth, 200);
  },
  methods: {
    imgload() {
      this.refresh()
    },
  },
};
</script>

<style>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>