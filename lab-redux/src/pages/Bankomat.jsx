import { useDispatch, useSelector } from "react-redux"
import { useRef } from 'react'
import { Link } from "react-router-dom";
import { WITHDRAW_MONEY } from "../store/actions/bank";

export default function Bankomat(){
  const balance = useSelector(state => state.bank.balance);
  const dispatch = useDispatch();
  const input = useRef()
  
  const withdrawMoney = () => {
    const money = +input.current.value;
    dispatch({type: WITHDRAW_MONEY , payload: { money }})
  }

  return (
    <div>
      Bankomat: Hello you have {balance} $ on your account
      <div>
        <input ref={input} type="number"/>
        <button onClick={withdrawMoney}>Withdraw</button>
      </div>
      <Link to={'/'}>Back to main</Link>
    </div>
  )
}