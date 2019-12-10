import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionList: [],
    currentIndex: 0,
    username: ''
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getQuestionList({ commit }) {
      axios({
        url: '/api/question_list'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setState', key: 'questionList', value: res.data.data })
        }
      })
    }
  },
  modules: {
  }
})
