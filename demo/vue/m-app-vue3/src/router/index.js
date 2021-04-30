import { createRouter, createWebHistory } from "vue-router"
import Store from "../store"
import light from "./light"

const routes = [...light]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  Store.commit({ type: "setLightState", key: "header", value: to.meta.header })
  next()
})

export default router
