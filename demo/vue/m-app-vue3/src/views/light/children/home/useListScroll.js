import { useStore } from "vuex"

let topArr = []
export default () => {
  const store = useStore()

  const handleScroll = (e) => {
    if (store.state.light.isRealScroll) {
      let { scrollTop } = e.target
      scrollTop += topArr[0]
      const index = topArr.findIndex(
        (top, index, arr) => top <= scrollTop && scrollTop < arr[index + 1]
      )
      store.commit({ type: "setLightState", key: "currentId", value: index })
    }
  }

  const handleTopArr = (arr) => {
    topArr = arr
  }

  return {
    handleScroll,
    handleTopArr
  }
}