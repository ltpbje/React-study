// 项目的根组件
// App -> index.js -> public/index.html(root)
// React中获取DOM

import { useRef } from "react"


// 1.useRef生成ref对象绑定到dom标签身上
//2.dom可用时，ref.current获取dom
//渲染完毕之后dom生成之后才可用



function App(){

  const inputRef = useRef(null)
  function showDom (){
    console.dir(inputRef.current)
  }
  return (
    <div>
      <input type='text' ref={inputRef}></input>
      <button onClick={showDom}>获取dom</button>
    </div>
  ) 
}


export default App