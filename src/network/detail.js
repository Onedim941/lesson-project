import { request } from 'network/request';

export function getDetailData(iid) {
  return request({
    url: "/detail",
    method: "get",
    params: {
      iid
    }
  })
}


export function  getDetailRecommend(){
  return request({
    url:"/recommend",
    method: "get"
  })
}


// 整合数据detail 的数据
export function goods(data) {
  const index = data.columns.length - 1;
  data.columns.splice(index, 1, data.shopInfo.services[0].name)
  return {
    title: data.itemInfo.title,
    price: data.itemInfo.price,
    oldPrice: data.itemInfo.oldPrice,
    discountDesc: data.itemInfo.discountDesc,
    columns: data.columns,
    services: data.shopInfo.services
  }
}


export function shopInfo(data) {
  return {
    name: data.shopInfo.name,
    logo: data.shopInfo.shopLogo,
    score: data.shopInfo.score,
    goodsNum: data.shopInfo.cGoods,
    cSells: data.shopInfo.cSells
  }
}

export function detailInfo(data) {
  return {
    desc: data.detailInfo.desc,
    detailKey:data.detailInfo.detailImage[0].key,
    detailImg: data.detailInfo.detailImage[0].list
  }
}