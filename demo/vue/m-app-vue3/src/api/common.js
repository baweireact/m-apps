import axios from "axios"

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:81"
}

axios.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem("token")
    return config
  },
  (err) => {
    alert("错误")
  }
)

axios.interceptors.response.use(
  (res) => {
    if (res.data.code === 400) {
      alert(res.data.message)
    }
    return res.data
  },
  (err) => {
    const {
      response: { status },
    } = err
    switch (status) {
      case 404:
        alert("地址错误404")
        break

      default:
        alert("错误")
        break
    }
  }
)

export const common = async (config) => {
  let res = await axios(config)
  return res
}
