import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Slice/subject_2Slice';

function Subject_2() {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const chemistry = useSelector(state => state.subject_2.chemistry);

  return (
    <div className="card">
        <h3>Account component...</h3> 
        
        <h3>Marks in chemistry : {chemistry}</h3>
        <button onClick={() => dispatch(increment())}>Increment chemistry+</button>
        <button onClick={() => dispatch(decrement())}>Decrement chemistry-</button>
        <input type="text" onChange={(e) => setValue(+e.target.value) } />
        <button onClick={() => dispatch(incrementByAmount(value))}>Increment chemistry By Amount</button>
    </div>
  )
}

export default Subject_2
