import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withdrawMoney } from "../store/features/bankSlice";

const Bankomat = () => {
  const balance = useSelector(state => state.bank.balance)
  const dispatch = useDispatch()
  return (
    <div>
      Bankomat
      <Formik
        initialValues={{
          money: 0
        }}
        validate={({ money }) => {
          if(money <= 0){
            return {
              money: 'Min value 1'
            }
          }
          if(money > balance){
            return {
              money: `You have only ${balance} $ on your account`
            }
          }
          return {}
        }}
        onSubmit={({ money }) => {
          dispatch(withdrawMoney(money))
        }}
      >
        <Form>
          <p>Balance: {balance}</p>
          <Field name="money" type="number" step="1"></Field>
          <ErrorMessage name="money" component="div"></ErrorMessage>
          <button type="submit">Withdraw money</button>
          <br />
          <Link to={'/home'}>Home</Link>
        </Form>
      </Formik>

    </div>
  )
}

export default Bankomat;