export default [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/light/Login"),
  },
  {
    path: "/index",
    component: () => import("@/views/light/Index"),
    children: [
      {
        path: "/index/home",
        component: () => import("@/views/light/children/home/Home"),
        meta: {
          header: "小米书城",
        },
      },
      {
        path: "/index/my_books",
        component: () => import("@/views/light/children/MyBooks"),
        meta: {
          header: "书包",
        },
      },
      {
        path: "/index/me",
        component: () => import("@/views/light/children/Me"),
        meta: {
          header: "个人中心",
        },
      },
    ],
  },
]
