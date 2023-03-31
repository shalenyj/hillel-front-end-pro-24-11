import { useDispatch, useSelector, } from "react-redux"
import { Link } from "react-router-dom";
import { fetchItems } from "../store/features/bankSlice";
import { useEffect } from "react";

export default function Main(){
  const balance = useSelector(state => state.bank.balance)
  // const items = useSelector(state => state.bank.items);
  // console.log(items.map)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <div>
      <p>Hello my friend</p>
      {/* {items.map(item => <div>{item.title}</div>)} */}
      <p>You have {balance} on your account</p>
      <Link to={'/bankomat'}>Bankomat</Link>
      <br />
      <Link to={'/kasa'}>Kasa</Link>
      <br />
      <Link to={'/formik'}>Formik</Link>
    </div>
  )
}