<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  width: 100%;
  display: flex;
  font-size: 12px;
  padding: 8px 0px 20px 0px;
  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img{
  width: 70%;
  margin-bottom: 5px;
}

</style>