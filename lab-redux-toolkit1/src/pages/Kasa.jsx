import { useDispatch, useSelector } from "react-redux"
import { useRef } from 'react'
import { Link } from "react-router-dom";
import { addMoney } from "../store/features/bankSlice";

export default function Kasa(){
  const balance = useSelector(state => state.bank.balance);
  const dispatch = useDispatch();
  const input = useRef()
  
  const handleAddMoney = () => {
    const money = +input.current.value;
    dispatch(addMoney({money}))
  }

  return (
    <div>
      Kasa: Hello you have {balance} $ on your account, wanna add money?
      <div>
        <input ref={input} type="number"/>
        <button onClick={handleAddMoney}>Add</button>
      </div>
      <Link to={'/'}>Back to main</Link>
    </div>
  )
}