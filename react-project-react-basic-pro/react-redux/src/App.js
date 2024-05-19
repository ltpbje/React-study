import { useDispatch, useSelector } from "react-redux";
import {descrement,inscrement,addToNum} from './store/modules/counterStore'
function App() {
  const {count} =  useSelector(state=> state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(descrement())}>-</button>
        {count}
      <button onClick={()=>dispatch(inscrement())}>+</button>
      <button onClick={()=>dispatch(addToNum(10))}>addTo10</button>
      <button onClick={()=>dispatch(addToNum(20))}>addTo20</button>
    </div>
  );
}

export default App;
