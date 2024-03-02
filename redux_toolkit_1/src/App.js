import logo from './logo.svg';
import './App.css';
import Account from './Component/Account';
import Bonus from './Component/Bonus';
import { useSelector } from 'react-redux';

function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);

  return (
    <div className="App">
       <h2>redux-toolkit 1 is executing.....</h2>
       <h3>App Component</h3>
       <h4>Total amount is : {amount}</h4>
       <h4>Total points is : {points}</h4>
       <Account />
       <Bonus />
    </div>
  );
}

export default App;
