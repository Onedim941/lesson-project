<template>
  <!-- 放轮播图图片 -->
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.swiper-item {
  width: 100%;
  flex-shrink: 0;
}

.swiper-item img {
  width: 100%;
  height: 100%;
}

</style>