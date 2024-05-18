import { useDispatch, useSelector } from "react-redux";
import {descrement,inscrement} from './store/modules/counterStore'
function App() {
  const {count} =  useSelector(state=> state.counter)
  const dispath = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispath(descrement())}>-</button>
        {count}
      <button onClick={()=>dispath(inscrement())}>+</button>
    </div>
  );
}

export default App;
