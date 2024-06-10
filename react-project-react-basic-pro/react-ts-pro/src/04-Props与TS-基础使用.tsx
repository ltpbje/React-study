//props + ts

type Props ={
  className:string,
  title?:string
}


function Button(props:Props){
  const {className,title} =props
  return(
    <>
      <button className={className} title={title}>click me {className}</button>
    </>  
  )
}

function App() {
  
  return (
    <>
      this is app
    <Button className="test" title="this is title"></Button>
    </>
  )
}

export default App
