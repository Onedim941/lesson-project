<template>
  <nav-bar fontColor="#000">
    <div slot="left" class="datali-left" @click="goBack">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="datali-center" slot="center">
      <span
        v-for="(Dtitle, index) in detailNavTitle"
        :key="Dtitle"
        @click="navClick(index)"
        :class="{ 'datali-title-active': currentIndex == index }"
        >{{ Dtitle }}</span
      >
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      detailNavTitle: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    navClick(index) {
      this.currentIndex = index;
      this.$emit("navClick",index)
    },
    goBack(){
      this.$router.go(-1)
    }
  },
};
</script>

<style>
.datali-title-active {
  color: var(--color-tint);
}
</style>