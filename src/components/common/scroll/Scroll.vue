<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      bs: null
    };
  },

  mounted() {
    this.bs = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      observeImage: true,
      pullDownRefresh: {
        stop:0
      },
      click: true,
    });

    this.bs.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    this.bs.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },

  methods: {
    scrollTo(x, y, time) {
      this.bs.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.bs.finishPullUp()
    },
    refresh(){
      console.log("节流刷新");
      this.bs.refresh()
    },
    getScrollY(){
      return this.bs ? this.bs.y : 0
    }
  },
};
</script>

<style>
</style>