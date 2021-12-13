<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  /* 为了占据整个宽度 设置left right都是0 */
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(197, 197, 197, 0.2);
}


</style>