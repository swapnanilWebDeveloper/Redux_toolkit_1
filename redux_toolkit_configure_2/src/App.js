import logo from './logo.svg';
import './App.css';
import Subject_1 from './Component/Subject_1';
import Subject_2 from './Component/Subject_2';
import Subject_3 from './Component/Subject_3';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const [total,setTotal] = useState(0);

  const physics = useSelector(state => state.subject_1.physics);
  const chemistry = useSelector(state => state.subject_2.chemistry);
  const mathematics = useSelector(state => state.subject_3.mathematics);

  useEffect(() => {
     setTotal(physics + chemistry + mathematics);
  },[physics, chemistry, mathematics]);

  return (
    <div className="App">
       <h2>redux-toolkit 1 is executing.....</h2>
       <h3>App Component</h3>
       <h4>Marks in Physics is : {physics}</h4>
       <h4>Marks in chemistry is : {chemistry}</h4>
       <h4>Marks in mathematics is : {mathematics}</h4>
       <h4>Marks in total : {total}</h4>
       <Subject_1 />
       <Subject_2 />
       <Subject_3 />
    </div>
  );
}

export default App;
