// 项目的根组件
// App -> index.js -> public/index.html(root)
// JSX基础-实现基础的条件渲染
//定义文章类型
const articleType = 3 //0 1 3 
// 定义核心函数（根据文章类型返回不同的JSX模版）
function getArticleItem (){
  if(articleType ===0){
    return <div>我是无图模式</div>
  }else if(articleType ===1){
    return <div>我是单图模式</div>
  }else{
    return <div>我是三图模式</div>
  }
}
function App() {
  return (
    <div className="App">
      {getArticleItem()}
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


// JSX基础-实现基础的条件渲染
// const isLogin  = false
// function App() {
//   return (
//     <div className="App">
//       {/* 逻辑与&& */}
//       {isLogin && <span>this is span</span>}
//       {/* 三元运算 */}
//       {isLogin ? <div>jack</div>:<div>loading...</div> }
//     </div>
//   );
// }

// export default App;