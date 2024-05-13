// 项目的根组件
// App -> index.js -> public/index.html(root)

import { useState } from "react"



// ReactHooks使用规则
// 使用规则
// 1.只能在组件中或者其他自定义Hook函数中调用
// 2.只能在组件的顶层调用，不能嵌套在if、for、其他函数中

// React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
// const [count,setCount] = useState()

function App(){

  if(Math.random >0.4){
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
    // const [count,setCount] = useState()
  }
  return (
    <div>
      <button >toggle</button>
    </div>
  ) 
}


export default App