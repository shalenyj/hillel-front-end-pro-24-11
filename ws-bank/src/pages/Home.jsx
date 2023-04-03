import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const balance = useSelector(state => state.bank.balance)
  return (
    <div>
      Home
      <header>
        <Link to={'/kasa'} >Kasa</Link>
        <br />
        <Link to={'/bankomat'}>Bankomat</Link>
        <br />
        <Link to={'/create-invoice'}>CreateInvoice</Link>
      </header>
      <p>Your balance equal: {balance} $</p>
    </div>
  )
}

export default Home;