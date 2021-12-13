// 将home页的网络请求再进行封装一层，将所有Home页面的网络请求都封装到此页面
import { request } from '@/network/request'

// 轮播图以及推荐
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

// 商品列表
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    method: "get",
    params: {
      type,
      page
    }
  })
}

export function demo() {
  return request({
    url: "/api_v2/mdg/set_organization_list",
    method: "post",
    // fromdata:true,
    data: [
      {
        ZORGID: "qqq",
        ZORGIDX: "qqqqwweq",
      },
      {
        ZORGID: "bbb",
        ZORGIDX: "qqqqwwwwweq",
      },
    ]
  })
}