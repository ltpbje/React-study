//react + ts


import { useState } from "react"
type User={
  name:string,
  age:number
}
function App() {
  const [user,setUser]= useState<User>({
    name:'jack',
    age:18
  })


  // const [user,setUser]= useState<User>(()=>({
  //   name:'jack',
  //   age:18
  // }))


  // const [user,setUser]= useState<User>()
const changeUser = ()=>{
  // setUser({
  //   name:'ls',
  //   age:19
  // })
  // setUser(undefined)
} 
  

  return (
    <>
      this is app{user.name}
    </>
  )
}

export default App
