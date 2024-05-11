// 项目的根组件
// App -> index.js -> public/index.html(root)

import { useState } from "react"
// 使用状态提升实现兄弟组件通信
function A({onGetAMsg}){
  // Son组件当中的数据
  const name = 'this is A name'
  return (
   <div>
     this is A component
     <button onClick={()=>onGetAMsg(name)}>sendMsg</button>
   </div>

  )
}
function B(props){
  return (
    <div>
      {/* 接受兄弟组件的数据 */}
      this is B component,{props.name}
    </div>
  )
}
function App(){
  const [name,setName] = useState('')
  const getAMsg=(msg)=>{
    setName(msg)
  }
  return (
    <div>
        this is App,{name}
        <A onGetAMsg={getAMsg}></A>
        <B name={name}></B>
    </div>
  ) 
}


export default App