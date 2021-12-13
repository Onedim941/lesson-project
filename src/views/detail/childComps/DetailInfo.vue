<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailInfo_box">
    <div class="detailInfo magin5">
      <p class="detail-title">{{ detailInfo.title }}</p>
      <div class="Detail-price">
        <span class="color-high-text">{{ detailInfo.price }}</span>
        <span class="no-price rem-8">{{ detailInfo.oldPrice }}</span>
        <span class="cheap-tips">{{ detailInfo.discountDesc }}</span>
      </div>
      <div class="flex-between infobuttom">
        <span
          class="color140 rem-8"
          v-for="item in detailInfo.columns"
          :key="item"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="flex-between">
        <div
          v-for="(item, index) in detailInfo.services"
          :key="item.name"
          v-show="index < 3"
          class="services"
        >
          <img :src="item.icon" alt="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style>
.detailInfo_box{
  border-bottom: 5px solid #eee;
}
.detailInfo {
  /* background: forestgreen; */
  border-bottom: 2px solid #eee;
}
.detail-title {
  text-align: justify;
  margin: 10px 0px;
  color: black;
}
.Detail-price {
  margin-bottom: 15px;
}
.color-high-text {
  font-size: 1.3rem;
  color: var(--color-high-text);
  margin-right: 5px;
}
.no-price {
  text-decoration: line-through;
  margin-right: 5px;
  color: rgb(140, 140, 140);
}
.cheap-tips {
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 2px;
  font-size: 0.7rem;
  position: relative;
  top: -2px;
}
.color140 {
  color: rgb(140, 140, 140);
}
.infobuttom {
  margin-bottom: 5px;
}
.services {
  margin: 15px 0.5rem;
  color: black;
}
.services img {
  width: 10px;
}
.services span {
  font-size: 0.9rem;
}
</style>