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
    myBook: [],  //书包
    loading: false
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
      commit({ type: 'setState', key: 'loading', value: true })
      Api.getList(`?id=${currentId}`).then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'currentList', value: res.data })
          commit({ type: 'setState', key: 'loading', value: false })
        }
      })
    },
    //获取书包数据
    getMyBook({ commit }) {
      commit({ type: 'setState', key: 'loading', value: true })
      Api.getMyBook().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'myBook', value: res.data })
          commit({ type: 'setState', key: 'loading', value: false })
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
