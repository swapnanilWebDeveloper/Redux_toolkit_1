import logo from './logo.svg';
import './App.css';
import ParamA from './Component/ParamA';
import ParamB from './Component/ParamB';
import ParamC from './Component/ParamC';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const [volume, setVolume] = useState(0);

  const length = useSelector(state => state.paramA.length);
  const breadth = useSelector(state => state.paramB.breadth);
  const height = useSelector(state => state.paramC.height);
  
  useEffect(() => {
     setVolume(length * breadth * height);
  },[length, breadth, height])
  return (
    <div className="App">
       <h2>redux-toolkit 1 is executing.....</h2>
       <h3>App Component</h3>
       <h4>The length is : {length}</h4>
       <h4>The breadth is : {breadth}</h4>
       <h4>The height is : {height}</h4>
       <h3>The volume is : {volume}</h3>
       <ParamA />
       <ParamB />
       <ParamC />
    </div>
  );
}

export default App;
