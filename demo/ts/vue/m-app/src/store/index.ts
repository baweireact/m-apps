import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

interface Payload {
  key: string,
  value: any
}

export default new Vuex.Store({
  state: {
    title: '小米书包',
    list: [],
    currentId: 0,
    isRealScroll: true,
    count: 0
  },
  mutations: {
    setState(state:any, payload:Payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    list({ commit }) {
      Api.list().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'list', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
