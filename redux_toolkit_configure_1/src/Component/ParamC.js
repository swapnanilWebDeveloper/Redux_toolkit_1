import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/paramCSlice';

function ParamC() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const height = useSelector(state => state.paramC.height);

  return (
    <div className="card"> 
        <h3>height component...</h3> 
        
        <h3>Total height : {height}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>
    </div>
  )
}

export default ParamC
