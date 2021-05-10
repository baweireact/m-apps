import Api from "../../api"

export default {
  async getLightList({ commit }) {
    const res = await Api.light.list()
    commit({ type: 'setLightState', key: 'list', value: res.data })
  },
  async getMyBooks({ commit }) {
    const res = await Api.light.myBooks()
    commit({ type: 'setLightState', key: 'myBooks', value: res.data })
  },
  async getDetail({ commit }, payload) {
    const res = await Api.light.detail(payload.id)
    res.data.count = 1
    commit({ type: 'setLightState', key: 'detailBook', value: res.data })
  }
}
