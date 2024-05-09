// 项目的根组件
// App -> index.js -> public/index.html(root)

import { useState } from "react";

//1.声明一个react状态-useState
//2.核心绑定流程
//1.通过value属性绑定react状态
//2、绑定onchange事件 通过事件参数e拿到输入框最新的值 反向修改到react状态

function App(){
  const [value ,setValue]=useState('')
  return (
    <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
    </div>
  ) 
}


export default App