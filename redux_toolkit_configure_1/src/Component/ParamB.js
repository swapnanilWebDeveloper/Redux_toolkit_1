import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/paramBSlice';

function ParamB() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const breadth = useSelector(state => state.paramB.breadth);

  return (
    <div className="card"> 
        <h3>breadth component...</h3> 
        
        <h3>Total breadth : {breadth}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>
    </div>
  )
}

export default ParamB
