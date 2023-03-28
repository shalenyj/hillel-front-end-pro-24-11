import { useDispatch, useSelector } from "react-redux"
import { useRef } from 'react'
import { Link } from "react-router-dom";
import { ADD_MONEY } from "../store/actions/bank";

export default function Kasa(){
  const balance = useSelector(state => state.bank.balance);
  const dispatch = useDispatch();
  const input = useRef()
  
  const addMoney = () => {
    const money = +input.current.value;
    dispatch({type: ADD_MONEY , payload: { money }})
  }

  return (
    <div>
      Kasa: Hello you have {balance} $ on your account, wanna add money?
      <div>
        <input ref={input} type="number"/>
        <button onClick={addMoney}>Add</button>
      </div>
      <Link to={'/'}>Back to main</Link>
    </div>
  )
}