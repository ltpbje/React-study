import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const channelStore = createSlice({
    name:'channel',
    initialState:{
        channelList: []
    },
    reducers:{
        setChannels(state,action){
            state.channelList = action.payload
        }
    }
})


const {setChannels} =channelStore.actions
// 异步任务
const url ='http://geek.itheima.net/v1_0/channels'
const fetchChannelList =()=>{
    return async (dispatch)=>{
        const res =await axios.get(url)
      dispatch( setChannels(res.data.data.channels))
    }
}
export {fetchChannelList}

const reducer = channelStore.reducer
export default reducer