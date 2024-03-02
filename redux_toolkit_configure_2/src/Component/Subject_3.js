import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Slice/subject_3Slice';

function Subject_3() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const mathematics = useSelector(state => state.subject_3.mathematics);

  return (
    <div className="card">
        <h3>Account component...</h3> 
        
        <h3>Marks in mathematics : {mathematics}</h3>
        <button onClick={() => dispatch(increment())}>Increment mathematics+</button>
        <button onClick={() => dispatch(decrement())}>Decrement mathematics-</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment mathematics By Amount</button>
    </div>
  )
}

export default Subject_3
