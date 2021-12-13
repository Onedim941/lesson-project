<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="item"
      class="tab-control-item"
      @click="chageTab(index)"
    >
      <span :class="{ actClass: index == currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    chageTab(index) {
      this.currentIndex = index;
      this.$emit('changeTab',index);
    }
  },
};
</script>

<style>
.tab-control {
  display: flex;
  background: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  line-height: 40px;
  font-size: 1rem;
}
.tab-control-item span {
  padding: 0px 5px 5px 5px;
}
.actClass {
  color: var(--color-tint);
  border-bottom: 2px solid var(--color-tint);
}
</style>