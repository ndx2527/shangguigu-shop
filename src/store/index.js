import Vue from "vue"
import Vuex from "vuex"
// import { reqCategoryList } from '@/api'
Vue.use(Vuex);

export default new Vuex.Store({
  // 创建存储数据
  state: {
    pathName: "", // 存储一个字符串
    currDbSource: {},
    currJobData: "",
    DbSource: [],
  },
  // 声明存储数据函数
  mutations: {
    savePath(state, pathName) {
      state.pathName = pathName;
    },
    saveCurrDbSource(state, currDbSource) {
      state.currDbSource = currDbSource;
    },
    saveCurrJobData(state, currJobData) {
      state.currJobData = currJobData;
    },
    saveDbSource(state, DbSource) {
      state.DbSource = DbSource;
    }
  },
  actions: {
    // async categoryList() {
    //   let res = await reqCategoryList();
    //   return res;
    // }
  }
})