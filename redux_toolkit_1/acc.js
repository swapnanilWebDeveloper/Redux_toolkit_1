import React from 'react'
import {useState} from "react"
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount,getUserAccount } from '../actions'

function Account() {
   const [value, setValue] = useState(0);
  
   const amount = useSelector(state => state.account.amount)
   const points = useSelector(state => state.bonus.points)

   const dispatch = useDispatch();

  return (
    <div>
          <div className="card">
            <div className="container">
                <h4>Account Component</h4>
                <h3>Amount : ${amount}</h3>
                <h3>Points : {points}</h3>
                <button onClick={() => dispatch(increment())}>Increment +</button>
                <button onClick={() => dispatch(decrement())}>Decrement -</button>
                <input type="text" onChange={(e) => setValue(+e.target.value) } />
                <button onClick={() => dispatch(incrementByAmount(value))}>Increment By {value}</button>
                <button onClick={() => dispatch(getUserAccount(2))}>Init account by user</button>
            </div>
          </div>
    </div>
  )
}

export default Account
