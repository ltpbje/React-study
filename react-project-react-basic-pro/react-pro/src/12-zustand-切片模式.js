import { useEffect } from "react";
import { create } from "zustand";
const URL ='http://geek.itheima.net/v1_0/channels'

const createChannelStore=(set)=>{
    return {  
      channelList:[],
      fetchGetList:async()=>{
        const res= await fetch(URL)
        const jsonRes = await res.json()
        console.log(jsonRes)
        set({channelList:jsonRes.data.channels})
      }
    }
}


const createCounterStore=(set)=>{
  return {
    // 状态数据
    count:0,
    // 修改状态数据的方法
    inc:()=>{
      set((state)=>({count:state.count + 1}))
    }
  }
}

const useStore= create((...a)=>{
  return {
   ...createChannelStore(...a),
   ...createCounterStore(...a)
  }
})
// 2.绑定store
// useStore => { count,inc 
function App() {
  const{count,inc,fetchGetList,channelList} =useStore()
  useEffect(()=>{
    fetchGetList()
  },[fetchGetList])
  return (
    <>
     <button onClick={()=>inc()}>{count}</button>
     <ul>
      {
        channelList.map(item=><li key={item.id}>{item.name}</li>)
      }
     </ul>
    </>
  );
}

export default App;
