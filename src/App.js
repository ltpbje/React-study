// 项目的根组件
// App -> index.js -> public/index.html(root)


//  父传子
//  1.父组件传递数据 子组件标签身上绑定属性
//  2.子组件接收数据 props的参数

function Son(props){
  // props：对象里面包含了父组件传递过来的所有的数据
  console.log(props)
  return (
    <div>this is son,{props.name}</div>
  )
}

function App(){
  const name ='this is a app name'
  return (
    <div>
      <Son name={name} ></Son>
    </div>
  ) 
}


export default App