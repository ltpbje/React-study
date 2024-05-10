// 项目的根组件
// App -> index.js -> public/index.html(root)


//  父传子
//  1.父组件传递数据 子组件标签身上绑定属性
//  2.子组件接收数据 props的参数

function Son(props){
  // props：对象里面包含了父组件传递过来的所有的数据
  // props：对象里面包含了父组件传递过来的所有的数据
  // {name：父组件中的数据'}
  console.log(props)
  // 子组件只能读取props中的数据，不能直接进行修改，父组件的数据只能由父组件修改
  // props.name = ''
  return (
    <div>this is son, {props.children}</div>
  )
}
function App(){
  return (
    <div>
      <Son>
        {/* 当我们把内容嵌套在子组件标签中时，父组件会自动在名为children的prop属性中接收该内容 */}
        <span>
          this is span
        </span>
      </Son>
    </div>
  ) 
}


export default App