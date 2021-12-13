// 封装axios模块

import axios from 'axios';

export function request(config) {

  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout:5000
  })

  // 拦截器 拦截请求
  instance.interceptors.request.use(config => {
    // 拦截下的就是config  请求成功
    // console.log(config);
    return config;
  },err => {
    // 请求失败
    console.log(err);
  })

  // 拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res;
  },err => {
    console.log(err);
  })

  // 因为axios返回的就是一个promise 所以可以直接把结果return 出去
  // 在前端用then catch使用
  return instance(config)
}