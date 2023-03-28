import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getItem } from "../store/actions/bank";

export default function Main(){
  const balance = useSelector(state => state.bank.balance)
  const items = useSelector(state => state.bank.items);
  console.log(items.map)

  const dispatch = useDispatch()
  useEffect(() => {
    getItem(dispatch)
  }, [])

  return (
    <div>
      <p>Hello my friend</p>
      {items.map(item => <div>{item.title}</div>)}
      <p>You have {balance} on your account</p>
      <Link to={'/bankomat'}>Bankomat</Link>
      <br />
      <Link to={'/kasa'}>Kasa</Link>
    </div>
  )
}