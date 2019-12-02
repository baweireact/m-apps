import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],  //导航
    currentId: 0,  //高亮
    currentList: []  //列表
  },
  mutations: {
    //动态的key，动态的value
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getNav({ commit }) {
      axios({
        url: '/api/nav'
      }).then(res => {
        if (res.data.code === 200) {
          //提交mutation
          commit({ type: 'setState', key: 'navList', value: res.data.data })
        }
      })
    },
    getList({ commit, state }) {
      let { currentId } = state
      axios({
        url: `/api/list?id=${currentId}`
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setState', key: 'currentList', value: res.data.data })
        }
      })
    }
  },
  modules: {
  }
})
