// 项目的根组件
// App -> index.js -> public/index.html(root)


import { useState } from "react"



//封装自定义hook通用思路
//1.声明一个以use打头的函数
//2.在函数体内封装可复用的逻辑（只要是可复用的逻辑）
//3.把组件中用到的状态或者回调return出去（以对象或者数组）
//4.在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用

//问题：布尔切换的逻辑当前组件耦合在一起的不方便复用
// 解决思路：自定义hook
function useToggle(){
   // 可复用的逻辑 
  const [show,setShow] = useState(true)
  const toggle=()=>{
    setShow(!show)
  }
  return[
    show,
    toggle
  ]
}

function App(){
  // const [show,setShow] = useState(true)
  // const toggle=()=>{
  //   setShow(!show)
  // }
  const [show,toggle] = useToggle()
  // const [toggle, show] = useToggle()

  return (
    <div>
      {show &&(<div>this is app</div>)} 
      <button onClick={toggle}>toggle</button>
    </div>
  ) 
}


export default App