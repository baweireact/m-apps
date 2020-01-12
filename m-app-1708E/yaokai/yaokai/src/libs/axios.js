/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 10:56:42
 * @LastEditTime: 2019-10-21 15:46:46
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import router from '@/router'
// import vm from '../main'
// import cookie from './cookies'

axios.defaults.baseURL = "http://localhost:88"

const service = axios.create({
    timeout: 2000
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data
}, function(error) {
    // 对响应错误做点什么
    const response = error.response

    switch (response.status) {
        case 401:
            vm.$message.error(response.data.message)
            const route = router.currentRoute
            cookie.removeCookie('token')
            if (route.path !== '/login') {
                router.push({
                    path: '/login',
                    query: {
                        callbackUrl: route.path
                    }
                })
            }
            break
        case 422:
            vm.$message.error(response.data.message)
    }
    return Promise.reject(error)
})

// 设置get，post传递参数的差异化
export default {
    get: (url, data) => service.get(url, {
        params: data
    }),
    post: (url, data) => service.post(url, data),
    delete: (url, data) => service.delete(url, data),
    put: (url, data) => service.put(url, data)
}