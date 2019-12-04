import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],  //导航
    currentId: 0,  //高亮
    currentList: [],  //列表
    myBook: []  //书包
  },
  mutations: {
    //动态的key，动态的value
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getNav({ commit }) {
      Api.getNav().then(res => {
        if (res.code === 200) {
          //提交mutation
          commit({ type: 'setState', key: 'navList', value: res.data })
        }
      })
    },
    getList({ commit, state }) {
      let { currentId } = state
      Api.getList(`?id=${currentId}`).then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'currentList', value: res.data })
        }
      })
    },
    getMyBook({ commit }) {
      Api.getMyBook().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'myBook', value: res.data })
        }
      })
    },
    update({state}) {
      Api.update({
        myBookNew: state.myBook
      }).then(res => {})
    }
  },
  modules: {
  }
})
