import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    currentId: 0,
    currentList: [],
    myBook: []
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
    setMyBook(state, payload) {
      state.myBook = payload.myBook
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
      Api.getList(`?id=${currentId}`).then(res => {
        if (res.code === 200) {
          commit({ type: 'setCurrentList', currentList: res.data })
        }
      })
    },
    getMyBook({ commit }) {
      axios({
        url: '/api/'
      })
    }
  },
  modules: {
  }
})
