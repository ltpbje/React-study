// 用户相关的所有请求
import { request } from "@/utils";
// 1.登录请求

export function loginAPI(formData){
    return request({
        url:'/authorization',
        method:'POST',
        data:formData
    })
}



// 2.获取用户信息

export function getProfileAPI(formData){
    return request({
        url:'/user/profile',
        method:'GET',
    })
}


