<template>
  <div class="details">
    <div class="details-desc magin5 rem-8">
      <div class="start-line"></div>
      <p>{{ detailImgInfo.desc }}</p>
      <div class="end-line"></div>
    </div>
    <p class="details-key magin5">{{ detailImgInfo.detailKey }}</p>
    <div class="details-img magin5">
      <img
        :src="item"
        alt=""
        v-for="item in detailImgInfo.detailImg"
        :key="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailImgInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style>
.details {
  border-bottom: 4px solid #eee;
}
.details-desc {
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
}
.details-desc p{
  text-align: justify;
  margin: .5rem 0;
}
.details-key {
  padding: 0rem;
  font-size: 0.9rem;
}
.details-img {
  margin-top: 1rem;
}
.details-img img {
  width: 100%;
}
.start-line,.end-line{
  width: 90px;
  height: 4px;
  border-bottom: 1px solid rgb(158, 158, 158);
}
.start-line{
  border-left: 4px solid rgb(158, 158, 158);
}
.end-line{
  margin-left: auto;
  border-right: 4px solid rgb(158, 158, 158);
}
</style>