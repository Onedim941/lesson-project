<template>
  <div class="nav-bar" :style="{background:backgroundColor,color:fontColor}">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    backgroundColor:{
      type:String,
      default:"#fff"
    },
    fontColor:{
      type:String,
      default:"#fff"
    }
  }
}
</script>

<style>
  .nav-bar{
    display: flex;
    /* 一般导航栏高度为44px */
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 3px rgba(100,100,100,0.1);
  }

  .left,.right{
    width: 60px;
  }

  .center{
    /* flex布局中  左右两边都有了固定宽度  所以flex：1 直接占满中间宽度 */
    flex: 1;
  }

</style>