import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import{getToken,setToken as _setToken}from '@/utils/index'
const userStore= createSlice({
    name:'user',
    // 数据状态
    initialState:{
        // token:localStorage.getItem('token_key') || ''
        token:getToken() || '',
        userInfo:{}
    },
    // 同步修改方法
    reducers:{
        setToken(state,action){
            state.token = action.payload
            // localstorage存一份
            // localStorage.setItem('token_key',action.payload)
            _setToken(action.payload)
        },
        setUserInfo(state,action){
            state.userInfo = action.payload
        }
    }
})

// 解构出actionCreater
const {setToken,setUserInfo} = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer


// 异步方法完成登录获取token
const fetchLogin =(loginForm)=>{
    return async (dispatch)=>{
        // 1.发送异步请求
        const res =await request.post('/authorizations',loginForm)
        // 2.提交同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}


// 异步方法完成获取个用户信息
const fetchUserInfo =()=>{
    return async (dispatch)=>{
        const res =await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}

export {fetchLogin,fetchUserInfo}

export default userReducer