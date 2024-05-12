// 项目的根组件
// App -> index.js -> public/index.html(root)
import { useState } from "react"
import { useEffect } from "react"
const URL ='http://geek.itheima.net/v1_0/channels'

function App(){
  const [list,setList] =useState([])
  // 在组件渲染完毕之后，立刻从服务端获取频道列表数据并显示到页面中
  //创建一个状态数据
  useEffect(()=>{
      //额外的操作 获取频道列表
      async function getList(){
        const res = await fetch(URL)
        const jsonRes =await res.json()
        console.log(list)
        setList(jsonRes.data.channels)
      }
      getList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  // 在 React 中，当你在 useEffect Hook 中使用一个空的依赖项数组 [] 时，这告诉 React 你的副作用逻辑只在组件的第一次渲染后运行一次，之后就不会再运行了。这类似于类组件中的 componentDidMount 生命周期方法。
  // 
  // useEffect(()=>{
  //   console.log(1)
  // },[])
  return (
    <div>
      this is app
      <ul>
        {list.map(item=> <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  ) 
}


export default App