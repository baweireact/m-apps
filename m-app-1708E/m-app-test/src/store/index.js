import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  //仓库
  state: {
    navList: [],
    currentId: 0,
    currentList: [],
    myBook: [],
    loading: false
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
    },
    //动态的
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  //异步
  actions: {
    //获取导航数据 https://vuex.vuejs.org/zh/guide/actions.html
    getNavList({ commit }) {
      Api.getNavList().then(res => {
        if (res.code === 200) {
          commit({ type: 'setNavList', navList: res.data })
        }
      })
    },
    //列表
    getList({commit, state}) {
      let { currentId } = state 
      commit({ type: 'setState', key: 'loading', value: true })
      Api.getList(`?id=${currentId}`).then(res => {
        if (res.code === 200) {
          commit({ type: 'setCurrentList', currentList: res.data })
          commit({ type: 'setState', key: 'loading', value: false })
        }
      })
    },
    //书包
    getMyBook({ commit }) {
      Api.getMyBook().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'myBook', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
