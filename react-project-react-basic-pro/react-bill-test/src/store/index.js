// 组合子模块导出store实例
import billReducer from './modules/billStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        bill:billReducer
    }
})

export default store