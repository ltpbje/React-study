import {  useReducer } from 'react';
// useReducer
//1.定义reducer函数 根据不同的action 返回不同的状态
  function reducer(state,action){
    switch(action.type){
      case 'INC':
        return state +1
      case 'DEC':
        return state-1
      case 'SET':
        return action.payload
      default:
        return state
    }
  }

// 2.组件中调用useReducer（reducer，O） => [state，dispatch]


// 3.调用dispatch（{type：INC'}）=>通知reducer产生一个新的状态使用这个新状态更新UI

function App() {
  // 2.组件中调用useReducer（reducer，O） => [state，dispatch]
  const [state,dispatch] = useReducer(reducer,0)
  return (
    <div className="App">
      <div>
        this is app  
        {/* 3.调用dispatch（{type：INC'}）=>通知reducer产生一个新的状态使用这个新状态更新UI*/}
        <button onClick={()=>dispatch({type:'DEC'})}>-1</button>        
        {state}
        <button onClick={()=>dispatch({type:'INC'})}>+1</button>        
        <button onClick={()=>dispatch({type:'SET',payload:100})}>update</button>        
      </div>
    </div>
  );
}

export default App;
