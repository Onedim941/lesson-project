<template>
  <div class="comment">
    <div class="comment_head">用户评价</div>
    <div class="comment_content">
      <div class="user_info">
        <img :src="userinfo.avatar" alt="" />
        <span class="user_name">{{ userinfo.uname }}</span>
      </div>
      <div class="comment_content_p">
        <p>{{ commentList.content }}</p>
        <span>{{ commentList.created | time(commentList.created) }}</span>
        <span>{{ commentList.style }}</span>
      </div>
      <div class="comment_img " v-if="commentList.images != null">
        <div
          class="comment_img_box"
          v-for="item in commentList.images"
          :key="item"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentList: {
      type: Object,
      default: () => {
        return {};
      },
    },
    userinfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  filters: {
    time(timestr) {
      let date = new Date(timestr * 1000);
      let Y = date.getFullYear();
      let M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let D = date.getDate();
      return Y + "-" + M + "-" + D;
    },
  },
};
</script>

<style>
.comment {
  padding: 0rem 0.5rem;
}
.comment_head {
  padding: 0.5rem 0rem;
  border-bottom: 2px solid rgb(243, 243, 243);
}
.user_info {
  padding: 0.5rem 0rem;
}
.user_info img {
  width: 12%;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.comment_content_p p {
  color: rgb(122, 122, 122);
  margin: 0.5rem 0rem;
  font-size: 0.9rem;
}
.comment_content_p span {
  color: rgb(156, 156, 156);
  font-size: 0.8rem;
  margin-right: 0.5rem;
}
.comment_img{
  display: flex;
}
.comment_img_box{
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  margin-right: .5rem;
  margin-top: .5rem;
}
.comment_img img {
  width: 110%;
}
</style>