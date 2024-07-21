//axios二次封装
import axios from 'axios'
import {ElMessage} from "element-plus";
import useUserStore from "../store/modules/user.ts";

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
});

//添加请求和响应拦截器
request.interceptors.request.use((config) => {
    let userStore = useUserStore();
    if (userStore.token) {
        config.headers.token = userStore.token;
    }
    return config;
});
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {

    let message = '';
    switch (error.response.status) {
        case 401:
            message = '没有权限访问';
            break
        case 404:
            message = '请求地址错误';
            break
        case 500:
            message = '服务器内部错误';
            break
        default:
            message = error.response.data.message;
    }
    ElMessage.error({
        message: message,
        type: 'error'
    })
    console.error(message)
    return Promise.reject(error);
})

export default request;