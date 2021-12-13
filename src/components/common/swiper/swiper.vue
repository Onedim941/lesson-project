<template>
  <div class="swiper-box">
    <!-- 轮播图主盒子 -->
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>

    <!-- 标志点 -->
    <div class="page clear-fix">
      <div
        class="page-item"
        v-for="(item, index) in swiperLength"
        :key="index"
        :style="
          currentIndex == index + 1 ? { backgroundColor: pageBgColor } : null
        "
      ></div>
    </div>

    <!-- 标点 -->
  </div>
</template>

<script>
export default {
  props: {
    transFormTime: {
      type: Number,
      default: 500,
    },
    setScrollTime: {
      type: Number,
      default: 2000,
    },
    pageBgColor: {
      type: String,
      default: "red",
    },
  },

  data() {
    return {
      // 单个item宽度
      swiperWidth: 0,
      // 当前页码
      currentIndex: 1,
      // item样式
      swiperStyle: {},
      // item长度
      swiperLength: 0,
      // 滑动起始点位
      touchStartX: 0,
      // 结束坐标
      touchEndX: 0,
      // 是否正在滑动
      isScroll: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.getElement();
      this.setTime();
    },200);
  },

  methods: {
    // 定时器
    setTime() {
      this.startTime = window.setInterval(() => {
        // 调用加页码
        this.currentIndex++;

        // 开始滚动
        this.setTransfrom();
      }, this.setScrollTime);
    },
    stopTime() {
      clearInterval(this.startTime);
    },

    // 设置过度并调用滚动开始
    setTransfrom() {
      // 设置正在滑动
      this.isScroll = true;
      this.swiperStyle.transition = `transform ease ${this.transFormTime}ms`;
      this.startScroll(-this.currentIndex * this.swiperWidth);
      // 滑动完成
      this.isScroll = false;
    },

    // 设置滚动动画
    startScroll(distance) {
      this.swiperStyle.transform = `translate3d(${distance}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${distance}px, 0, 0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${distance}px, 0, 0)`;
      // 检查位置
      this.checkScroll();
    },

    // 检查左滑滚动位置
    checkScroll() {
      // 如果位置到了最后一个
      if (this.currentIndex == this.swiperLength + 1) {
        this.currentIndex = 1;
        window.setTimeout(() => {
          this.swiperStyle.transition = `0ms`;
          this.startScroll(-this.swiperWidth);
        }, this.transFormTime);
      } else if (this.currentIndex <= 0) {
        // console.log("当前个数", this.swiperLength);
        this.currentIndex = this.swiperLength;
        window.setTimeout(() => {
          this.swiperStyle.transition = `0ms`;
          this.startScroll(-this.swiperWidth * this.currentIndex);
        }, 400);
      }
    },

    // 刷新元素宽度
    refreshWidth(){
      
      let swiperItemEl = document.getElementsByClassName("swiper-item");
      let swiperWd = swiperItemEl[0].offsetWidth;
      this.swiperWidth = swiperWd;
      console.log("轮播图刷新高度");
    },

    // 获取swiper的宽度和样式 以及克隆
    getElement() {
      let swiperEl = document.querySelector(".swiper");
      let swiperItemEl = document.getElementsByClassName("swiper-item");
      // 将item个数赋值给swiperLength
      this.swiperLength = swiperItemEl.length;
      // 获取单个div宽度
      let swiperWd = swiperItemEl[0].offsetWidth;
      this.swiperWidth = swiperWd;

      // 当item个数大于一个时克隆  用作循环
      if (swiperItemEl.length > 1) {
        let firstClone = swiperItemEl[0].cloneNode(true);
        let lastClone = swiperItemEl[this.swiperLength - 1].cloneNode(true);
        swiperEl.appendChild(firstClone);
        // 在第1个节点之前插入
        swiperEl.insertBefore(lastClone, swiperItemEl[0]);
        // 把swiper的样式赋值给 swiperStyle  用作添加dom样式实现滚动
        this.swiperStyle = swiperEl.style;
        /*
         * 如果有克隆  应该展示第二个item  修改默认位置
         * 如果大于1时 就将起始位置设置为2
         */
        this.startScroll(-this.swiperWidth);
      }
      console.log("宽度", this.swiperWidth);
    },

    // 判断用户触摸距离
    checkTouchX() {
      let srcollX = this.touchEndX - this.touchStartX;
      let absSrcollX = Math.abs(srcollX);

      // 如果滑动距离超过宽度的0.3
      if (absSrcollX >= this.swiperWidth * 0.3) {
        // 如果滑动方向为左 执行加页码 反之减
        if (srcollX < 0) {
          this.currentIndex++;
        } else {
          this.currentIndex--;
        }
      }
      // 调用动画操作DOM位移
      this.setTransfrom();
    },

    // 触摸开始
    touchStart(e) {
      // 如果正在滑动中  不可拖动
      if (this.isScroll) return;
      // console.log("触摸开始");
      this.stopTime();
      this.swiperStyle.transition = `0ms`;
      this.touchStartX = e.touches[0].pageX;
      // console.log("起始点X坐标", this.touchStartX);
    },

    // 触摸移动
    touchMove(e) {
      // 获取滑动结束点 计算滑动距离
      this.touchEndX = e.touches[0].pageX;
      let srcollX = this.touchEndX - this.touchStartX;
      this.startScroll(-this.swiperWidth * this.currentIndex + srcollX);
    },

    // 触摸结束
    touchEnd() {
      // console.log("结束X坐标", this.touchEndX);
      // console.log("触摸结束,距离", this.touchEndX - this.touchStartX);
      this.checkTouchX();
      this.setTime();
    },
  },
};
</script>

<style>
.swiper-box {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
  position: relative;
}

.page {
  /* background-color: rgb(255, 255, 255); */
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  width: 100%;
}

.page-item {
  float: right;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 2px;
}
</style>