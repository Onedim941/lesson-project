<template>
  <div class="tab-bar-item" @click="itemClick(path)">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeFontColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: { type: String },
    activeColor: { type: String, default: "red" },
  },
  data() {
    return {
      // isActive:false
    };
  },

  computed: {
    isActive() {
      // 判断当前活跃路径 等不等于传进来的path
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeFontColor() {
      // 判断是否处于活跃状态  可以直接this.isActive调用计算属性的值
      return this.isActive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    itemClick(path) {
      console.log(path);
      this.$router.replace(path).catch(() => {});
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* tabber常用高度 49px */
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>