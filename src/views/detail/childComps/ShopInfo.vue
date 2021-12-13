<template>
  <div class="shop-info">
    <div class="shop-info-name magin5">
      <img :src="shopDate.logo" alt="" />
      <span>{{ shopDate.name }}</span>
    </div>
    <div class="shop-info-data magin5">
      <div class="shop-flex">
        <div class="shop-info-data-left">
          <p>5.2万</p>
          <span class="rem-8">总销量</span>
        </div>
        <div class="shop-info-data-left">
          <p>{{ shopDate.goodsNum }}</p>
          <span class="rem-8">全部宝贝</span>
        </div>
      </div>
      <div class="shop-info-data-scroe rem-8">
        <div
          class="shop-scroe"
          v-for="score in shopDate.score"
          :key="score.name"
        >
          <span class="score-name">{{ score.name }}</span>
          <span
            class="score"
            :style="{ color: !score.isBetter ? 'rgb(14, 201, 14)' : 'red' }"
            >{{ score.score }}</span
          >
          <span
            :class="{ grade: !score.isBetter, redActive: score.isBetter }"
            >{{ score.isBetter | better(score.isBetter) }}</span
          >
        </div>
      </div>
    </div>
    <div class="go-shop-btn rem-8">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopDate: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      isBetter: true,
    };
  },
  filters: {
    better(isBetter) {
      return isBetter ? "高" : "低";
    },
  },
};
</script>

<style>
.shop-flex {
  display: flex;
  justify-content: center;
  flex: 1;
  border-right: 2px solid #eee;
}
.shop-info {
  padding: 20px 0px;
  border-bottom: 4px solid #eee;
}
.shop-info-name img {
  width: 15%;
  border-radius: 50%;
  border: 1px solid #eee;
  vertical-align: middle;
  margin-right: 10px;
}
.shop-info-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}
.shop-info-data-left {
  margin: 0px 10px;
  text-align: center;
}

.shop-info-data-scroe {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.shop-scroe {
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0rem;
}

.score {
  margin: 0px 5px;
  width: 1.7rem;
}
.grade {
  background-color: rgb(14, 201, 14);
  color: #fff;
}
.redActive {
  background-color: red;
  color: #fff;
}
.go-shop-btn {
  background-color: #eee;
  text-align: center;
  width: 8rem;
  margin: 0 auto;
  margin-top: 15px;
  padding: 0.4rem 0rem;
  border-radius: .5rem;
}
</style>