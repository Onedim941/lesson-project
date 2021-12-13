<template>
  <div class="goods">
    <goods-item
      v-for="item in goods"
      :key="item.acm"
      :goodDate="item"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "@/components/content/goods/GoodsItem";
export default {
  props: {
    goods: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
};
</script>

<style>
.goods {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>