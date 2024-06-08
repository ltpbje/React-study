// useCallback


import { forwardRef,useRef } from "react";


// 子组件
const Son =forwardRef((props,ref)=>{
  return <input type='text' ref={ref}></input>
})

// 父组件
function App() {
  const sonRef = useRef(null)
  const showRef=()=>{
    console.log(sonRef)
    sonRef.current.focus()
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
