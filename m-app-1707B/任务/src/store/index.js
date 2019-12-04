import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    currentId: 0,
    currentList: [],
    taskList: []
  },
  getters: {
    getTaskList(state) {
      return (type, search) => {
        return state.taskList.filter(item => {
          if (type) {
            return item.type === type
          } else {
            return true
          }
        }).filter(item => {
          if (search) {
            return item.name.includes(search)
          } else {
            return true
          }
        })
      }
    }
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getNav({ commit }) {
      Api.getNav().then(res => {
        if (res.code === 200) {
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
    getTaskList({ commit }) {
      Api.getTaskList().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'taskList', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
