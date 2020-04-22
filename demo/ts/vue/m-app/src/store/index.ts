import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Payload {
  key: string,
  value: any
}

export default new Vuex.Store({
  state: {
    title: '小米书包',
    count: 0
  },
  mutations: {
    setState(state:any, payload:Payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
