// 项目的根组件
// App -> index.js -> public/index.html(root)
// JSX基础-实现基础的条件渲染
const isLogin  = false
function App() {
  return (
    <div className="App">
      {isLogin && <span>this is span</span>}
      {isLogin ? <div>jack</div>:<div>loading...</div> }
    </div>
  );
}

export default App;


// JSX基础-识别js表达式
// const count = 100
// const getName=()=>{
//   return 'jack'
// }
// function App() {
//   return (
//     <div className="App">
//      this is App
//      {/* 使用引号传递字符串 */}
//      {' this is message'}
//      {/* 使用JavaScript变量 */}
//      {count}
//      {/* 函数调用 */}
//      {getName()}
//      {/* 方法调用 */}
//      {new Date().getDate()}
//      {/* 使用JavaScript对象 */}
//      <div style={{color:'red'}}>this is div</div>
//     </div>
//   );
// }
// export default App;

// JSX基础-实现列表渲染
// const list = [
//   {id:1001, name:'Vue'},
//   {id:1002, name: 'React'},
//   {id:1003, name: 'Angular'}
// ]
// function App() {
//   return (
//     <div className="App">
//       this is App
//     {/* 渲染列表*/}
//     {/* map 循环哪个结构 return结构*/}
//     {/*注意事项：加上一个独一无二的key 字符串或者number id*/}
//     {/*key的作用：React框架内部使用 提升更新性能的*/}
//     {list.map(item=><li key={item.id}>{item.name}</li>)}      

//     </div>
//   );
// }

// export default App;
