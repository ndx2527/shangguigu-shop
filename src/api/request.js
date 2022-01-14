// 对axios进行二次封装

import axios from "axios";

const requests = axios.create({
  // 基础路径
  baseURL: "/api",
  // 响应超时
  timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  return res.data;
}, (error) => {
  return error;
})

// 跨域问题
// JSONP、代理


export default requests;


