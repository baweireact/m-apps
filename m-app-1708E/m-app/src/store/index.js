import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    currentId: 0,
    currentList: [],
    myBook: [],
    loading: false
  },
  mutations: {
    setNavList(state, payload) {
      state.navList = payload.navList
    },
    setCurrentId(state, payload) {
      state.currentId = payload.currentId
    },
    setCurrentList(state, payload) {
      state.currentList = payload.currentList
    },
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getNav({ commit }) {
      Api.getNav().then(res => {
        if (res.code === 200) {
          commit({ type: 'setNavList', navList: res.data })
        }
      })
    },
    getCurrentList({ commit, state }) {
      let { currentId } = state
      commit({ type: 'setState', key: 'loading', value: true })
      Api.getList(`?id=${currentId}`).then(res => {
        if (res.code === 200) {
          commit({ type: 'setCurrentList', currentList: res.data })
          commit({ type: 'setState', key: 'loading', value: false })
        }
      })
    },
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
