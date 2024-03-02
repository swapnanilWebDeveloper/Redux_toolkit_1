import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/paramASlice';

function ParamA() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const length = useSelector(state => state.paramA.length);

  return (
    <div className="card"> 
        <h3>Length component...</h3> 
        
        <h3>Total length : {length}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>
    </div>
  )
}

export default ParamA
