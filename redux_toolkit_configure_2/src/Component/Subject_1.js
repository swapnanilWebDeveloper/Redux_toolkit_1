import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Slice/subject_1Slice';

function Subject_1() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const physics = useSelector(state => state.subject_1.physics);

  return (
    <div className="card">
        <h3>Account component...</h3> 
        
        <h3>Marks in physics : {physics}</h3>
        <button onClick={() => dispatch(increment())}>Increment physics+</button>
        <button onClick={() => dispatch(decrement())}>Decrement physics-</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment physics By Amount</button>
    </div>
  )
}

export default Subject_1
