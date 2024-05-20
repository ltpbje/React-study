import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore= createSlice({
    name:'foodsList',
    initialState:{
        // 商品列表
        foodsList:[]
    },
    reducers:{
        // 同步修改数据部分
        setFoodList(state,action){
            state.foodsList = action.payload
        }
    }
})

const {setFoodList}  = foodsStore.actions

// 异步获取数据部分
const fetchFoodsList =()=>{
   return async (dispatch)=>{ 
      // 编写异步逻辑
      const res = await axios.get('http://localhost:3004/takeaway')
      // 调用dispatch函数提交action
      dispatch(setFoodList(res.data))  
  }
}
export {fetchFoodsList}

const reducer = foodsStore.reducer

export default reducer
