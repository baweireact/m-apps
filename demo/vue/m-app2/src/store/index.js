import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '小米书城',
    list: [],
    currentId: 0,
    isRealScroll: true,
    myBooks: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getList({ commit }) {
      Api.list().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'list', value: res.data })
        }
      })
    },
    getMyBooks({ commit }) {
      Api.myBooks(null, 'get').then(res => {
        if(res.code === 200) {
          commit({ type: 'setState', key: 'myBooks', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
