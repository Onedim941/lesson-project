<template>
  <div class="goods-item" @click="itemClaick(goodDate.iid)">
    <img :src="showImg" alt="" class="goods-item-img" @load="goodImgLoad"/>
    <p class="goods-item-title">{{ goodDate.title }}</p>
    <span class="goods-item-price">
      {{ goodDate.price | price(goodDate.price) }}
    </span>
    <span class="goods-item-collect">
      <i class="iconfont icon-shoucang"></i>
      {{ goodDate.cfav }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    goodDate: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  computed:{
    showImg(){
      return this.goodDate.image || this.goodDate.show.img
    }
  },
  methods:{
    goodImgLoad(){
      // 事件总线 将图片加载完成事件发射出去  用$on监听
      this.$bus.$emit('itemImageLoad')
    },
    itemClaick(iid){
      this.$router.push({
        path:'detail',
        query:{iid}
      })
    }
  },
  filters: {
    price(price) {
      return "￥" + price;
    },
  },
};
</script>

<style>
.goods-item {
  width: 46%;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 15px;
}
.goods-item:nth-child(2n+2) img{
  width: 97%;
}

.goods-item-img {
  width: 100%;
  border-radius: 7px;
}
.goods-item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-item-price {
  color: var(--color-high-text);
}
.goods-item-collect{
  margin-left: 5px;
}
</style>