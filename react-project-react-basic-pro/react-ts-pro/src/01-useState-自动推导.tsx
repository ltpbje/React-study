//react + ts
//根据初始值自动推断
//场景：明确的初始值

import { useState } from "react"

function App() {
  const [value,toggle] =useState(true)
  // const changeValue=()=>{
  //   // toggle(1)
  //   toggle(false)
  // }

  const [list,setList] =useState([1,2,3])

  // const changeList=()=>{
  //   setList([4,5,6])
  // }
  return (
    <>
      this is app{value}
    </>
  )
}

export default App
