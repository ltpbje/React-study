//props + ts

import React from "react"

type Props ={
  className:string,
  children:React.ReactNode
}


function Button(props:Props){
  const {className,children} =props
  return(
    <>
      <button className={className}>{children}</button>
    </>  
  )
}

function App() {
  
  return (
    <>
      this is app
    <Button className="test">
        click on me 1
    </Button>
    <Button className="test">
        <span>
         click on me 2
          
        </span>
    </Button>
    </>
  )
}

export default App
