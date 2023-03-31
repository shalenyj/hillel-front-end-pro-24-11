import { useDispatch, useSelector } from "react-redux"
import { useRef } from 'react'
import { Link } from "react-router-dom";
import { withDrawMoney } from "../store/features/bankSlice";

export default function Bankomat(){
  const balance = useSelector(state => state.bank.balance);
  const dispatch = useDispatch();
  const input = useRef()
  
  const handleWithdrawMoney = () => {
    const money = +input.current.value;
    dispatch(withDrawMoney({ money }))
  }

  return (
    <div>
      Bankomat: Hello you have {balance} $ on your account
      <div>
        <input ref={input} type="number"/>
        <button onClick={handleWithdrawMoney}>Withdraw</button>
      </div>
      <Link to={'/'}>Back to main</Link>
    </div>
  )
}