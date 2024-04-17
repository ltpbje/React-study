// 项目的根组件
// App -> index.js -> public/index.html(root)
const count = 100
const getName=()=>{
  return 'jack'
}
function App() {
  return (
    <div className="App">
     this is App
     {/* 使用引号传递字符串 */}
     {' this is message'}
     {/* 使用JavaScript变量 */}
     {count}
     {/* 函数调用 */}
     {getName()}
     {/* 方法调用 */}
     {new Date().getDate()}
     {/* 使用JavaScript对象 */}
     <div style={{color:'red'}}>this is div</div>
    </div>
  );
}

export default App;
