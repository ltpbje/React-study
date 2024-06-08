// React.memo

import { memo, useState } from "react";

// 1.验证默认的渲染机制 子跟着父一起渲染 父重新渲染后子也会重新渲染


// 2.memo进行缓存 也就是暂时的记忆  只有props发生变化的时候才会重新渲染 （context）
const MemoSon = memo(
  function Son(){
    console.log('我是子组件 ,我重新渲染了');
    return <div>this is son</div>
  }
)
  // function Son(){
  //   console.log('我是子组件 ,我重新渲染了');
  //   return <div>this is son</div>
  // }


function App() {
  const [count ,setCount] = useState(0)
  return (
    <div className="App">
      this is app
      <button onClick={()=>setCount(count + 1)}>+{count}</button>
      <MemoSon></MemoSon>
    </div>
  );
}

export default App;
