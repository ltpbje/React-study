// Class API 生命周期
// 1.父传子直接通过prop子组件标签身上绑定父组件中的数据即可

import { Component} from "react";


// 2.子传父 
// 子组件
class Son1 extends Component{
  
  render(){
    return <div>i am son 
      <div>{this.props.msg}</div>
      <button onClick={()=>this.props.onGetSonMsg('我是Son1组件中的msg')}>sendMsgToParent</button>
    </div>
  }

}

// 子组件
// 3. 兄弟组件通信
class Son2 extends Component{
  render(){
     return <div>i am son2
        <div>{this.props.msg}</div>
      </div>
  }
}

// 父组件
class Parent extends Component{
  state={
    msg:'this is parent msg'
    }
  getSonMsg=(sonMsg)=>{
    console.log(sonMsg)
    this.setState({
      msg:sonMsg
    })
  }
  render(){
    return( 
    <div>
      i am Parent
      <Son1 msg={this.state.msg} onGetSonMsg={this.getSonMsg}></Son1>
      <Son2 msg={this.state.msg}></Son2>
    </div>
    )
  }

}


function App() {
  return (
    <>
      <Parent></Parent>
    </>
  );
}

export default App;
