import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    // 路由懒加载
    component: () => import('views/home/home.vue'),
    meta: {
      title: "首页"
    }
  },
  {
    path: '/cart',
    component: () => import('views/cart/cart.vue'),
    meta: {
      title: "分类"
    }
  },
  {
    path: '/category',
    component: () => import('views/category/category.vue'),
    meta: {
      title: "购物车"
    }
  },
  {
    path: '/profile',
    component: () => import('views/profile/profile.vue'),
    meta: {
      title: "我的"
    }
  },
  {
    path: '/detail',
    component: () => import('views/detail/Detail.vue'),
    meta: {
      title: "商品页",
      isShowTabBar: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log("matched", to.matched);
  document.title = to.matched[0].meta.title
  if(to.path.indexOf('detail') != -1){
    to.matched[0].meta.isShowTabBar = false
  }else{
    to.matched[0].meta.isShowTabBar = true
  }
  console.log(to.matched[0].meta.isShowTabBar);
  next()
})

export default router
