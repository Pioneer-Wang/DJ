import axios from 'axios';
import router from '../router';
import {Message} from 'element-ui';

// 请求拦截 设置统一header
axios.interceptors.request.use(config=>{
    if(localStorage.eleToken){
        config.headers.Authorization=localStorage.eleToken
    }
    return config
},err=>{
    return Promise.reject(err)
})
// 响应拦截 token过期处理
axios.interceptors.response.use(response=>{
    return response
},err=>{
    Message.error(err.response.data)
    const {status}=err.response
    if(status==401){
        Message.error('token值无效，请重新登录')
        // 清除token
        localStorage.removeItem('eleToken')
        // 页面跳转
        router.push('/login')
    }
})

export default axios