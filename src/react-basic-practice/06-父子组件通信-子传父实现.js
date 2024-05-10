// 项目的根组件
// App -> index.js -> public/index.html(root)

import { useState } from "react"



//  父传子
//  1.父组件传递数据 子组件标签身上绑定属性
//  2.子组件接收数据 props的参数

function Son(props){
  // Son组件中的数据
  const sonMsg = 'this is son msg'
  return (
    <div>
      this is son 
    <button onClick={()=>props.onGetSonMsg(sonMsg)}>sendMsg</button>      
    </div>
  )
}
function App(){
  // 这种写法会引起视图上的改变
  const [msg,setMsg] = useState()
  // 这种写法不会引起视图上的改变
  // let msga ='1'
  const getSonMsg =(msg)=>{
    console.log(msg)
    setMsg(msg)
    // msga = msg
    // console.log(1)
  }
  return (
    <div>
        this is App,
        {msg}
        <Son onGetSonMsg={getSonMsg}></Son>
    </div>
  ) 
}


export default App