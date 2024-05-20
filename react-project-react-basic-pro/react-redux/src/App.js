import { useDispatch, useSelector } from "react-redux";
import {descrement,inscrement,addToNum, testDispatch} from './store/modules/counterStore'
import {fetchChannelList}from './store/modules/channelStore'
import { useEffect } from "react";
function App() {
  // 获取store中的数据
  const {count} =  useSelector(state=> state.counter)
  const {channelList} =  useSelector(state=> state.channel)
  const dispatch = useDispatch()

  //使用useEffect触发异步请求执行
  useEffect(()=>{
    // 分发任务 触发任务
    dispatch(fetchChannelList())
  },[])
  return (
    <div className="App">
      <button onClick={()=>dispatch(descrement())}>-</button>
        {count}
      <button onClick={()=>dispatch(inscrement())}>+</button>
      <button onClick={()=>dispatch(addToNum(10))}>addTo10</button>
      <button onClick={()=>dispatch(addToNum(20))}>addTo20</button>

      <ul>
         { channelList.map(item =><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
