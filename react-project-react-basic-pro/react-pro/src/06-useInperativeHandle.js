// useInperativeHandle
// 父组件调用子组件中的函数

import { forwardRef,useImperativeHandle,useRef } from "react";


// 子组件
const Son =forwardRef((props,ref)=>{
  const inputRef =useRef(null)
  // 实现聚焦逻辑
  const focusHandler=()=>{
    inputRef.current.focus()
  }
  // 把聚焦方法暴露出去
  useImperativeHandle(ref,()=>{
    return {
      focusHandler
    }
  })
  return <input type='text' ref={inputRef}></input>
})

// 父组件
function App() {
  const sonRef = useRef(null)
  const showRef=()=>{
    console.log(sonRef)
    sonRef.current.focusHandler()
  }
  return (
    <div className="App">
      <Son ref={sonRef}></Son>
      {/* 把函数作为prop传给子组件 */}
      <button onClick={showRef}>focus</button>
    </div>
  );
}

export default App;
