import { useStore } from "vuex"

export default () => {
  const store = useStore()
  const handleClose = () => {
    store.commit({
      type: "setLightState",
      key: "isListDialogVisible",
      value: false,
    })
  }

  const handleOk = () => {
    handleClose()
  }

  const handleAddCount = () => {
    const addBook = store.state.light.addBook
    addBook.count++
    store.commit({ type: "setLightState", key: "addBook", value: addBook })
  }

  const handleSubCount = () => {
    const addBook = store.state.light.addBook
    if (addBook.count > 1) {
      addBook.count--
      store.commit({ type: "setLightState", key: "addBook", value: addBook })
    }
  }

  const handleInputCount = (e) => {
    const addBook = store.state.light.addBook
    let count = e.target.value.replace(/[^\d]/g, "") - 0
    if (count === 0) {
      count = 1
    }
    addBook.count = count
    store.commit({
      type: "setLightState",
      key: "addBook",
      value: { ...addBook },
    })
  }

  return {
    handleClose,
    handleOk,
    handleAddCount,
    handleSubCount,
    handleInputCount,
  }
}
