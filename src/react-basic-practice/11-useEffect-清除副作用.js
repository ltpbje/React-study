// 项目的根组件
// App -> index.js -> public/index.html(root)

import { useEffect } from "react"
import { useState } from "react"


function Son(){
  useEffect(()=>{
    // 1. 渲染时开启一个定时器
   const timer=  setInterval(()=>{
      console.log('定时器执行中...')
    },1000)
    return()=>{
      // 说明：清除副作用的函数最常见的执行时机是在组件卸载时自动执行
      // 需求：在Son组件渲染时开启一个定时器，卸载时清除这个定时器
      // 组件卸载时 执行 
      // 清除副作用 不能为空
      clearInterval(timer)
    }
  },[])
  return (
    <span>
      this is son
    </span>
  )
}
function App(){
  const [show,setShow] = useState(true)
  
  return (
    <div>
      this is app,{show && <Son></Son>}
      <button onClick={()=>setShow(false)}>卸载子组件</button>
    </div>
  ) 
}


export default App