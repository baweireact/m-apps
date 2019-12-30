import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //仓库
  state: {
    navList: [],
    currentId: 0,
    currentList: []
  },
  //同步
  mutations: {
    //修改仓库里的值,作业：简化一下mutation
    setNavList(state, payload) {
      state.navList = payload.navList
    },
    setCurrentId(state, payload) {
      state.currentId = payload.currentId
    },
    setCurrentList(state, payload) {
      state.currentList = payload.currentList
    }
  },
  //异步
  actions: {
    //获取导航数据 https://vuex.vuejs.org/zh/guide/actions.html
    getNavList({ commit }) {
      axios({
        url: '/api/nav'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setNavList', navList: res.data.data })
        }
      })
    },
    getList({ commit, state }) {
      let { currentId } = state 
      axios({
        url: `/api/list?id=${currentId}`
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setCurrentList', currentList: res.data.data })
        }
      })
    }
  },
  modules: {
  }
})
