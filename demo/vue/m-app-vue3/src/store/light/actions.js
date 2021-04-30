import Api from "@/api"

export default {
  async getLightList({ commit }) {
    let res = await Api.list()
    commit({ type: 'setLightState', key: 'list', value: res.data })
  },
}
