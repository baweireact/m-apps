import { useStore } from "vuex"
import Api from '@/api'

export default () => {
  const store = useStore()
  const handleClose = () => {
    store.commit({
      type: "setLightState",
      key: "isListDialogVisible",
      value: false,
    })
  }

  const handleOk = async () => {
    const book = store.state.light.addBook
    if (book.count !== '') {
      let res = await Api.light.myBooks({ book }, 'post')
      store.commit({ type: 'setLightState', key: 'myBooks', value: res.data })
      handleClose()
    }
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
    addBook.count = e.target.value.replace(/[^\d]/g, "")
    if (addBook.count !== '') {
      addBook.count = parseInt(addBook.count)
    }
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
