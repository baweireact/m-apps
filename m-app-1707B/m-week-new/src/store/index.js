import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weekList: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getWeekList({commit}) {
      axios({
        url: '/api/get_week_list'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setState', key: 'weekList', value: res.data.data })
        }
      })
    },
    updateWeekList({ state }) {
      axios({
        url: '/api/update_week_list',
        data: {
          newWeekList: state.weekList
        },
        method: 'post'
      }).then(res => {

      })
    }
  },
  modules: {
  }
})
