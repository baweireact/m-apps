// 配置API接口地址
var root = 'http://localhost:88'
    // 引用axios
import axios from 'axios'
import router from "@/router"

const service = axios.create({
    baseUrl: '/api',
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




// 自定义判断元素类型JS
// function toType(obj) {
//     return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }
// // 参数过滤函数
// function filterNull(o) {
//     for (var key in o) {
//         if (o[key] === null) {
//             delete o[key]
//         }
//         if (toType(o[key]) === 'string') {
//             o[key] = o[key].trim()
//         } else if (toType(o[key]) === 'object') {
//             o[key] = filterNull(o[key])
//         } else if (toType(o[key]) === 'array') {
//             o[key] = filterNull(o[key])
//         }
//     }
//     return o
// }

// function apiAxios(method, url, params, success, failure) {
//     if (params) {
//         params = filterNull(params)
//     }
//     axios({
//             method: method,
//             url: url,
//             data: method === 'POST' || method === 'PUT' ? params : null,
//             params: method === 'GET' || method === 'DELETE' ? params : null,
//             baseURL: root,
//             withCredentials: false
//         })
//         .then(function(res) {
//             if (res.data.success === true) {
//                 if (success) {
//                     success(res.data)
//                 }
//             } else {
//                 if (failure) {
//                     failure(res.data)
//                 } else {
//                     window.alert('error: ' + JSON.stringify(res.data))
//                 }
//             }
//         })
//         .catch(function(err) {
//             let res = err.response
//             if (err) {
//                 window.alert('api error, HTTP CODE: ' + res.status)
//             }
//         })
// }

// // 返回在vue模板中的调用接口
// export default {
//     get: function(url, params, success, failure) {
//         return apiAxios('GET', url, params, success, failure)
//     },
//     post: function(url, params, success, failure) {
//         return apiAxios('POST', url, params, success, failure)
//     },
//     put: function(url, params, success, failure) {
//         return apiAxios('PUT', url, params, success, failure)
//     },
//     delete: function(url, params, success, failure) {
//         return apiAxios('DELETE', url, params, success, failure)
//     }
// }