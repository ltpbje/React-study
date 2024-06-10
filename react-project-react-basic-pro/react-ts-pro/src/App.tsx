//react + ts


import { useState } from "react"
type User={
  name:string,
  age:number
}
function App() {
  const [user,setUser] =useState<User | null>(null)

 const changeUser =()=>{
  setUser(null)
  setUser({
    name:'jack',
    age:18
  })
 }
  return (
    <>
      this is app
      {user?.name}
    </>
  )
}

export default App
