import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore= createSlice({
    name:'foods',
    initialState:{
        // 商品列表
        foodsList:[],
        // 菜单激活下标值
        activeIndex: 0,
        // 购物车列表
        cartList:[]
    },
    reducers:{
        // 同步修改数据部分
        setFoodList(state,action){
            state.foodsList = action.payload
        },
        //更改activeIndex        
        changeActiveIndex (state,action){
            state.activeIndex =action.payload
        },
        // 添加购物车
        addCart(state,action){
            // 是否添加过？以action.payLoad.id去cartList中匹配 匹配到了 添加过
            const item= state.cartList.find(item=>item.id ===action.payload.id)
            if(item){
                item.count++
            }else{
                state.cartList.push(action.payload)
            }
        },
        //count增
        increCount(state,action){
            // 关键点：找到当前要修改谁的count id
            const item = state.cartList.find(item=>item.id ===action.payload.id)
            item.count++
        },
        // count减
        decreCount(state,action){
            // 关键点：找到当前要修改谁的count id
            const item = state.cartList.find(item=>item.id ===action.payload.id)
            item.count--
        }
    }
})

const {setFoodList,changeActiveIndex,addCart,decreCount,increCount}  = foodsStore.actions

// 异步获取数据部分
const fetchFoodsList =()=>{
   return async (dispatch)=>{ 
      // 编写异步逻辑
      const res = await axios.get('http://localhost:3004/takeaway')
      // 调用dispatch函数提交action
      dispatch(setFoodList(res.data))  
  }
}
export {fetchFoodsList,changeActiveIndex,addCart,decreCount,increCount}

const reducer = foodsStore.reducer

export default reducer
